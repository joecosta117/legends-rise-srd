# Character Builder Specification

## Project Overview

The Character Builder is a multi-step visual interface that guides users through creating a complete character by composing data from interconnected systems. This document defines the ideal data structure and workflow.

---

## User Journey & Data Flow

### Step 1: Select Ancestry
**User selects:** One ancestry from 20 options

**Data returned:**
- Ancestry ID
- Ancestry trait descriptions
- Choices available (e.g., "choose 2 animal characteristics")
- What this unlocks:
  - Conditional ability grants (e.g., Elementalkin → spell based on elemental soul)
  - Starting features/traits
  - Flavor/narrative context

**Data structure needed:**
```json
{
  "ancestryId": "elementalkin",
  "name": "Elementalkin",
  "description": "...",
  "traits": {
    "size": { choices: ["small", "medium"] },
    "elementalSoul": { 
      choices: ["air", "earth", "fire", "ice", "water"],
      grantedSpell: { /* conditional spell */ }
    },
    "elementalAffinity": { /* passive effect */ },
    "elementalMagic": { /* ability */ }
  }
}
```

### Step 2: Select Class & Subclass
**User selects:** One class, then one subclass

**Data returned:**
- Class ID
- Subclass ID
- Core features (HP, defenses, equipment)
- Starting spell/ability selections
- What this unlocks:
  - Available talents (filtered by tier)
  - Spell traditions available
  - Theme choice

**Constraints:**
- Some talents require specific subclass
- Some talents conflict with ancestry choices
- Spell availability depends on tradition choices

**Data structure needed:**
```json
{
  "classId": "arcanist",
  "subclassId": "arcanist-wizard",
  "coreFeatures": {
    "theme": "arcane",
    "defenseBonus": "+1 Spirit",
    "startingHP": 10,
    "recoveries": 6
  },
  "talentOptions": [
    {
      "tierId": 1,
      "available": [
        "expanded-arcanist-magic",
        "far-spell",
        "powerful-spell"
      ],
      "restricted": [
        /* talents requiring sorcerer subclass */
      ]
    }
  ]
}
```

### Step 3: Select Spell Traditions & Spells
**User selects:** Magic tradition(s) based on class, then specific spells

**Data returned:**
- Selected traditions
- Available spells from those traditions
- Spell tier options
- What this unlocks:
  - Which talents become available (e.g., "Magic Surge" requires High Magic ability)
  - Combat capability descriptors

**Data structure needed:**
```json
{
  "traditions": [
    {
      "id": "arcane",
      "name": "Arcane",
      "selectedSpells": [
        {
          "spellId": "arcane-arcane-dart-0",
          "tier": 0
        },
        {
          "spellId": "arcane-lightning-bolt-1",
          "tier": 1
        }
      ]
    }
  ]
}
```

### Step 4: Select Experiences/Talents
**User selects:** Talents based on available options and class level

**Data returned:**
- Selected talents
- Talent effects (which features they grant/modify)
- Synergies with other selections
- What this unlocks:
  - Modified spell list (e.g., "Expanded Arcanist Magic")
  - Enhanced abilities
  - Additional feature interactions

**Data structure needed:**
```json
{
  "talents": [
    {
      "talentId": "arcanist-far-spell",
      "tier": 1,
      "effects": {
        "modifies": ["spell-range"],
        "grants": null
      }
    }
  ]
}
```

### Step 5: Select Equipment
**User selects:** Starting equipment based on class and choices

**Data returned:**
- Equipment list with effects
- Armor/weapon bonuses
- Equipment-dependent ability modifications
- What this unlocks:
  - Modified defenses
  - Specific build viability (e.g., certain talents work better with certain equipment)

**Data structure needed:**
```json
{
  "equipment": [
    {
      "equipmentId": "mystic-robes",
      "name": "Mystic Robes",
      "type": "armor",
      "effects": {
        "defenseBonus": "+1 Guard",
        "applicableConditions": ["wearing-mystic-robes"]
      }
    }
  ]
}
```

### Step 6: Review & Finalize (Defenses)
**System calculates:** All defense values based on selections

**Data returned:**
- Complete character sheet with:
  - All selected features merged
  - Calculated defense values
  - Final spell list
  - Equipment effects applied
  - Synergies highlighted

**Data structure needed:**
```json
{
  "character": {
    "ancestry": "elementalkin",
    "class": "arcanist",
    "subclass": "arcanist-wizard",
    "level": 1,
    "defenses": {
      "guard": 11,
      "spirit": 12,
      "reflex": 10
    },
    "hitPoints": 10,
    "recoveries": 6,
    "spells": [ /* merged from ancestry, class, talents */ ],
    "traits": [ /* all applicable traits */ ],
    "features": [ /* all applicable features with synergies */ ],
    "equipment": [ /* with effects applied */ ]
  }
}
```

---

## Data Operations Required

The builder must support these queries:

### Query Type 1: Availability Filtering
- "Show me talents compatible with this ancestry+class combo"
- "Which spells are available given my tradition choices?"
- "What equipment is available for this class?"

**Solution:** Each item has `restrictions` and `requirements` fields

### Query Type 2: Cascading Effects
- "If I select this talent, what other selections become unavailable?"
- "If I select this ancestry, what spells are conditionally granted?"

**Solution:** Dependency graph/reference system

### Query Type 3: Synergy Detection
- "Which of my selected talents work together?"
- "Does my equipment modify any of my abilities?"

**Solution:** `synergiesWith` and `enhances` fields

### Query Type 4: Value Calculation
- "What's my final Guard defense value?"
- "How much damage does this spell do with my modifiers?"

**Solution:** Calculation engine that applies stacked modifiers

### Query Type 5: Completeness Validation
- "Is this character valid?"
- "Are all required selections made?"

**Solution:** Validation schema against character output

---

## Recommended Data Structure Architecture

### File Organization (Optimized for Character Builder)

```
/data/
┌─ /raw/                           (Source of truth - minimal processing)
│  ├── ancestries.json             (20 entries)
│  ├── classes/
│  │  ├── arcanist.json
│  │  ├── warrior.json
│  │  └── ...
│  ├── battle-spells/
│  │  ├── air.json
│  │  ├── arcane.json
│  │  └── ...
│  ├── equipment.json              (Starting equipment)
│  ├── themes.json                 (Theme talents)
│  └── experiences.json            (Talents, abilities)
│
├─ /builder/                       (Optimized for Character Builder)
│  ├── character-builder-schema.json    (Complete schema)
│  ├── constraints.json                 (Validation rules)
│  ├── dependencies.json                (What enables what)
│  ├── skill-trees.json                 (Visual tree data)
│  └── calculation-rules.json           (Defense/damage calc)
│
├─ /schemas/                       (JSON Schema validation)
│  ├── ancestry.schema.json
│  ├── character.schema.json
│  ├── spell.schema.json
│  └── equipment.schema.json
│
└─ /characters/                    (Saved character builds)
   ├── {character-uuid}.json
   └── ...
```

---

## Optimized Data Formats for Builder

### 1. ID-Referenced Index (Fast Lookup)

Instead of embedding full data everywhere, use IDs + central index:

```json
{
  "ancestryIndex": {
    "elementalkin": {
      "name": "Elementalkin",
      "traitIds": ["elem-soul", "elem-affinity", "elem-magic"],
      "spellGrants": [
        {
          "condition": "elemental soul",
          "options": {
            "air": "spell:air-lightning-bolt-1",
            "earth": "spell:earth-stone-armor-1"
          }
        }
      ]
    }
  },
  "classIndex": {
    "arcanist": {
      "name": "Arcanist",
      "subclasses": ["wizard", "sorcerer", "warmage"],
      "theme": "theme:arcane",
      "talents": {
        "tier1": ["talent:expanded-arcanist-magic", ...],
        "tier2": [...],
        "tier3": [...]
      }
    }
  },
  "spellIndex": {
    "air-lightning-bolt-1": {
      "traditon": "air",
      "tier": 1,
      "grantedBy": [
        { type: "ancestry", ancestryId: "elementalkin", condition: "air" },
        { type: "class-tradition", classId: "arcanist" }
      ]
    }
  }
}
```

### 2. Constraint Matrix (Validation)

Define all incompatibilities and requirements:

```json
{
  "constraints": {
    "talentRequirements": {
      "advanced-learning": {
        "requires": "subclass:wizard"
      },
      "arcane-vitality": {
        "requires": "subclass:sorcerer"
      }
    },
    "ancestryClassConflicts": [
      {
        "ancestry": "forgeborn",
        "classesForbidden": ["wildshape-focused-class"],
        "reason": "Construct cannot wildshape"
      }
    ],
    "equipmentRestrictions": {
      "mystic-robes": {
        "classes": ["arcanist", "druid"]
      }
    }
  }
}
```

### 3. Enhancement Graph (Synergies)

Track which selections enhance others:

```json
{
  "enhancements": {
    "talent:magic-surge": {
      "requires": "feature:high-magic",
      "effect": "When using High Magic, arcane energy leaps to nearby enemies",
      "enhancesDamage": 2
    },
    "talent:unparalleled-magic": {
      "enhances": "feature:high-magic",
      "effect": "Use High Magic twice per scene instead of once"
    },
    "equipment:mystic-robes": {
      "enhancedBy": "subclass:warmage-war-magic",
      "baseEffect": "+0 to Guard",
      "warmageEffect": "+1 to Guard (when worn with War Magic)"
    }
  }
}
```

### 4. Calculation Rules (Defense/Damage)

Define how values are calculated:

```json
{
  "statCalculations": {
    "guard": {
      "base": 10,
      "modifiers": [
        { "source": "class", "value": "$CLASS_GUARD_BONUS" },
        { "source": "armor", "value": "$ARMOR_GUARD_BONUS" },
        { "source": "trait", "value": "$TRAIT_MODIFIER" },
        { "source": "feature", "value": "$FEATURE_MODIFIER" }
      ],
      "stacking": "additive"
    },
    "spirit": {
      "base": 10,
      "modifiers": [
        { "source": "class", "value": "$CLASS_SPIRIT_BONUS" },
        { "source": "feature", "value": "$FEATURE_MODIFIER" }
      ]
    }
  }
}
```

### 5. Builder Flow State (UI Guidance)

Map steps to available options:

```json
{
  "builderFlow": {
    "step1_ancestry": {
      "title": "Choose Your Ancestry",
      "description": "Select where your hero comes from",
      "choices": "all ancestries",
      "validation": "must select exactly 1"
    },
    "step2_class": {
      "title": "Choose Your Class",
      "optionsInclude": "all classes",
      "restrictions": {
        "dependsOn": "step1_ancestry",
        "filterRule": "no restrictions (for now)"
      }
    },
    "step2b_subclass": {
      "title": "Choose Your Subclass",
      "optionsInclude": "$SELECTED_CLASS.subclasses",
      "restrictions": null
    },
    "step3_spells": {
      "title": "Select Your Magic",
      "optionsInclude": "$SELECTED_CLASS.availableTraditions",
      "restrictions": {
        "dependsOn": ["step2_class", "step1_ancestry"],
        "filterRule": "Exclude forbidden traditions"
      }
    },
    "step4_talents": {
      "title": "Choose Your Experiences",
      "optionsInclude": "$SELECTED_CLASS.talents",
      "restrictions": {
        "dependsOn": ["step2_subclass", "step3_spells"],
        "filterRule": "Remove talents requiring other subclass"
      }
    },
    "step5_equipment": {
      "title": "Select Your Equipment",
      "optionsInclude": "$SELECTED_CLASS.startingEquipment",
      "restrictions": null
    },
    "step6_review": {
      "title": "Review Character",
      "action": "Calculate all final values and validate"
    }
  }
}
```

---

## Data Flow Diagram

```
┌─────────────────────┐
│   User Selections   │
└──────────┬──────────┘
           │
           │ Step 1: Ancestry
           ▼
┌─────────────────────┐     ┌──────────────────┐
│  ancestry.json      │────▶│  Load ancestry   │
│  (raw data)         │     │  traits & grants │
└─────────────────────┘     └────────┬─────────┘
                                     │
           ┌─────────────────────────┼─────────────────────────┐
           │                         │                         │
           │ Step 2: Class           │ Step 3: Spells          │
           ▼                         ▼                         ▼
    ┌───────────────┐        ┌──────────────┐     ┌───────────────────┐
    │ classes/      │        │ Check        │     │ Filter spell      │
    │ {class}.json  │        │ ancestry     │     │ options by        │
    │ (raw data)    │        │ grants       │     │ class+tradition   │
    └───────┬───────┘        └──────────────┘     └─────────┬─────────┘
            │                                               │
            │ Load class                   Load spells
            │ features, talents            from battle-spells.json
            │                              (filtered)
            │
    Step 4: Talents ◀─────────────────────────────────────┘
    (Check constraints in constraints.json)
            │
    ┌───────▼────────┐
    │ Filter talents │
    │ by class       │
    │ compatibility  │
    └───────┬────────┘
            │
    Step 5: Equipment
            │
    ┌───────▼──────────┐     ┌──────────────────┐
    │ equipment.json   │────▶│ Load class       │
    │ (filtered by     │     │ starting gear    │
    │  class)          │     └──────────────────┘
    └───────┬──────────┘
            │
            │ All selections made
            ▼
    ┌──────────────────────────────┐
    │  Merge & Calculate           │
    │  - Apply all modifiers       │
    │  - Check synergies           │
    │  - Calculate final values    │
    └────────┬─────────────────────┘
             │
             ▼
    ┌──────────────────────────────┐
    │  CHARACTER JSON OUTPUT       │
    │  - Final stats               │
    │  - All features merged       │
    │  - Synergies highlighted     │
    └──────────────────────────────┘
```

---

## Complete Character Output Example

When builder is complete, output looks like this:

```json
{
  "character": {
    "metadata": {
      "builderId": "elementalkin-arcanist-wizard",
      "createdAt": "2026-03-17T10:30:00Z",
      "version": "1.0"
    },
    "identity": {
      "ancestry": {
        "id": "elementalkin",
        "name": "Elementalkin",
        "elementalSoul": "fire",
        "size": "medium"
      },
      "class": {
        "id": "arcanist",
        "name": "Arcanist",
        "level": 1,
        "tier": 1
      },
      "subclass": {
        "id": "arcanist-wizard",
        "name": "Wizard"
      },
      "theme": {
        "id": "theme:arcane",
        "name": "Arcane"
      }
    },
    "baseStats": {
      "hitPoints": 10,
      "recoveries": 6,
      "mana": 2,
      "proficiencyBonus": 2
    },
    "defenses": {
      "guard": {
        "base": 10,
        "modifiers": [
          { "source": "class", "value": 0, "reason": "No base bonus" },
          { "source": "armor: mystic-robes", "value": 0, "reason": "Mystic robes" }
        ],
        "final": 10
      },
      "spirit": {
        "base": 10,
        "modifiers": [
          { "source": "class", "value": 1, "reason": "Arcanist defense bonus" }
        ],
        "final": 11
      },
      "reflex": {
        "base": 10,
        "modifiers": [],
        "final": 10
      }
    },
    "traits": [
      {
        "name": "Elemental Soul",
        "type": "choice",
        "value": "fire",
        "description": "Choose fire as your elemental soul."
      },
      {
        "name": "Elemental Affinity",
        "type": "passive",
        "effect": "You gain resistance to fire damage."
      }
    ],
    "features": [
      {
        "id": "arcanist-high-magic",
        "name": "High Magic",
        "type": "ability",
        "actType": "Free",
        "frequency": "Encounter",
        "trigger": "You cast a battle spell",
        "effect": "Treat the spell's tier as one higher",
        "synergiesWith": [
          {
            "talentId": "arcanist-unparalleled-magic",
            "effect": "Use High Magic twice per scene"
          }
        ]
      },
      {
        "id": "wizard-studious-spell",
        "name": "Studious Spell",
        "type": "ability",
        "effect": "Study when you cast a battle spell"
      }
    ],
    "spells": [
      {
        "id": "fire-fireball-1",
        "name": "Fireball",
        "tradition": "fire",
        "tier": 1,
        "grantedBy": {
          "ancestry": "elementalkin",
          "condition": "elemental soul = fire"
        },
        "actType": "Action",
        "target": "All creatures in 1 zone within 3 zones",
        "damage": "3 fire damage per spell tier",
        "modifiers": []
      },
      {
        "id": "arcane-arcane-dart-0",
        "name": "Arcane Dart",
        "tradition": "arcane",
        "tier": 0,
        "grantedBy": {
          "class": "arcanist",
          "reason": "Arcane tradition"
        }
      }
    ],
    "talents": [
      {
        "id": "arcanist-far-spell",
        "name": "Far Spell",
        "tier": 1,
        "type": "ability",
        "effect": "Extend spell range by 1 zone"
      }
    ],
    "equipment": [
      {
        "id": "eq:mystic-robes",
        "name": "Mystic Robes",
        "type": "armor",
        "effects": {
          "guard": 0,
          "otherEffects": "Required for some abilities"
        }
      }
    ],
    "validation": {
      "isComplete": true,
      "isValid": true,
      "warnings": [],
      "errors": []
    }
  }
}
```

---

## Recommended Implementation Strategy

### Phase 1: Data Preparation (CURRENT)
- ✓ Create base JSONs (ancestries, class, spells)
- Create equipment.json
- Create experiences.json (talents)
- Create themes.json

### Phase 2: Builder Infrastructure
- Create constraints.json (validation rules)
- Create dependencies.json (what enables what)
- Create calculation-rules.json (stat computation)
- Create character-builder-schema.json

### Phase 3: Builder Application
- Implement step-by-step form
- Add real-time validation
- Add synergy highlighting
- Implement character sheet generation

### Phase 4: Export & Persistence
- Save character builds
- Export to different formats
- Version tracking

---

## Single File vs. Multiple Files Decision

### For Character Builder: **Multiple Files is Better**

**Why:**
1. **Performance**: Load only what you need for each step
2. **Maintainability**: Update one system without affecting others
3. **Reusability**: Data can be queried independently
4. **Scalability**: Can add new classes/spells without massive file rewrite

**But add:**
- `character-builder-schema.json` - Tells builder how to structure UI
- `constraints.json` - Validation rules
- `dependencies.json` - What enables what

**This hybrid approach:**
- Raw data in separate files (raw/)
- Builder-specific indexes/configs in builder/ folder
- Single character output file when complete

---

## Critical Next Steps

1. **Create equipment.json** - What equipment exists and its effects?
2. **Create experiences.json** - All talents/abilities from all classes
3. **Create constraints.json** - All validation rules
4. **Create character-builder-schema.json** - Complete builder schema
5. **Design the builder UI** - Map data queries to UI components
