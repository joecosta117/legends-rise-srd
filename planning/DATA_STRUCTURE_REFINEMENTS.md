# JSON Data Structure Refinements for Interconnected Game Data

## Key Differences Between Ancestries and Arcanist (Class)

### 1. **Requirement/Prerequisite System**
- **Ancestries**: Simple and linear - traits have limits on selections
- **Arcanist**: Talents have subclass requirements (e.g., "Advanced Learning requires: wizard")
  
**Refinement needed**: Add a `requirements` object that can handle complex prerequisites
```json
{
  "requirement": "wizard",
  // OR
  "requirements": {
    "subclass": ["wizard", "sorcerer"],
    "minLevel": 4,
    "prerequisiteTalent": "Advanced Learning"
  }
}
```

### 2. **Interconnected References**
- **Ancestries**: Mostly self-contained, some link to skills/combat rules
- **Arcanist**: References multiple interconnected systems:
  - Subclasses (which have their own features)
  - Magic traditions (external system)
  - Battle spells (external system)
  - Themes (Arcane theme)
  - Talents that modify other talents (e.g., Magic Surge modifies High Magic)

**Refinement needed**: Implement a reference/link system
```json
{
  "referencesSpellSystem": true,
  "linkedTo": {
    "subclass": "wizard",
    "theme": "Arcane",
    "modifies": ["High Magic", "Unleash Arcane"],
    "externalLinks": [
      {
        "type": "spell",
        "name": "Arcane Dart",
        "tradition": "arcane"
      }
    ]
  }
}
```

### 3. **Ability vs. Passive Feature Distinction**
Both Ancestries and Arcanist have features, but they're structured differently:

**Ancestry Traits**: Direct effects or passive bonuses
```json
{ "name": "Quick Learner", "effect": "add half proficiency bonus" }
```

**Arcanist Features**: Mix of:
- Passive bonuses (e.g., "+1 to Guard")
- Active abilities (with ActType, Frequency, Trigger, Effect)
- Progression abilities (Spellcasting gets better at certain levels)

**Refinement needed**: Standardize ability structure
```json
{
  "type": "ability | passive | progression",
  "actType": "Action | Maneuver | Reaction | Free",
  "frequency": "At-will | Encounter | Scene | Daily",
  "trigger": "...",
  "effect": "...",
  "scaling": {
    "byLevel": { "2": "...", "5": "...", "8": "..." },
    "byTier": { "1": "...", "2": "..." }
  }
}
```

### 4. **Level-Based Collections**
- **Ancestries**: All features at once (no level progression)
- **Arcanist**: Features unlock at specific levels (1st, 2nd, 3rd)

**Refinement needed**: Standardize level/tier progression structures
```json
{
  "unlocksAt": {
    "level": 5,
    "tier": 2
  },
  "grantedPerSession": {
    "tal": { "2": 1, "4": 1, "6": 1, "9": 1 }  // gains 1 talent at levels 2,4,6,9
  }
}
```

### 5. **Choice/Selection Mechanics**
- **Ancestries**: "Choose 2 animal characteristics", "Choose primary and secondary traits"
- **Arcanist**: "Choose a subclass", "Choose a talent tier 1 or lower"

**Refinement needed**: Explicit choice system
```json
{
  "choices": {
    "selectSubclass": {
      "type": "required",
      "count": 1,
      "from": ["Wizard", "Sorcerer", "Warmage"]
    },
    "selectTalentTier": {
      "type": "required",
      "count": 1,
      "level": 2,
      "from": "talents.tier1"
    },
    "selectMagicTradition": {
      "type": "required",
      "count": 1,
      "from": ["arcane", "protection", "illusion", ...],
      "exclude": ["eldritch", "holy", "nature", "unholy"]
    }
  }
}
```

### 6. **External Dependencies**
The Arcanist heavily depends on:
- Magic traditions (needs separate data structure)
- Battle spells (needs separate data structure)
- Themes (needs separate data structure)
- Combat abilities (study, move, overpower)
- Conditions (vulnerable, shaken)
- Resources (mana, recoveries)

**Refinement needed**: Separate data schemas with linking IDs
```json
{
  "id": "arcanist-high-magic",
  "usesResource": "mana",
  "affects": { "spellTier": "increase_by_one" },
  "modifiedByTalent": "unparalleled-magic"
}
```

### 7. **Talent Synergies**
Some talents work together or build on each other:
- "Magic Surge" only works with "High Magic"
- "Arcane Ascension" upgrades "Unleash Arcane"

**Refinement needed**: Synergy tracking
```json
{
  "synergiesWith": [
    {
      "talent": "High Magic",
      "effect": "arcane energy leaps at nearby creatures"
    }
  ],
  "upgradesFeature": "Unleash Arcane",
  "incompatibleWith": ["..."]
}
```

## Proposed Unified Schema Strategy

```json
{
  "metadata": {
    "id": "arcanist",
    "type": "class",
    "references": {
      "theme": "arcane",
      "requiredSystems": ["magic-traditions", "battle-spells"],
      "linkedData": ["subclasses", "talents"]
    }
  },
  "content": {
    "name": "Arcanist",
    "origins": [],
    "coreFeatures": {},
    "features": {},
    "subclasses": [],
    "talents": [],
    "progressionTable": {
      "talentGains": { "2": 1, "4": 1, "6": 1, "9": 1 },
      "spellGains": { "1": 2, "2": 1, "4": 1, "6": 1, "9": 1 }
    }
  }
}
```

## Additional Considerations for Cross-System Integration

1. **ID-based References**: Use consistent IDs instead of names for linking
   - `"requirement": "subclass:wizard"` instead of `"requirement": "wizard"`

2. **Data Normalization**: Extract common patterns
   - All abilities follow same structure
   - All passive features follow same structure
   - Choices are standardized

3. **Versioning**: Classes/Ancestries may change
   - Add `version` and `lastUpdated` fields

4. **Localization**: Support multiple languages
   - Separate translation keys from display content

5. **References Management**: Track bi-directional relationships
   - Talent X modifies Feature Y
   - Subclass A requires Talent B
   - Keep these in a separate relationship file or index

