# Cross-System JSON Integration Plan

## Current State Analysis

### Three Data Systems Created:
1. **ancestries.json** - Character origin system with traits/subtraits
2. **arcanist.json** - Single class with features, subclasses, talents
3. **battle-spells.json** - Spells organized by magic tradition and tier

### Key Interconnections Discovered

#### Ancestry → Battle Spells
- **Elementalkin**: Grants specific spell based on elemental soul choice
  - Example: "Choose air → learn lightning bolt battle spell"
  - *Currently embedded in description, not structured*

- **Gnome**: "Faerie Trickery" grants illusion tradition
  - *Reference is implicit, not ID-based*

- **Umbraling**: "Umbral Magic" grants darkness battle spell
  - *Hardcoded spell reference in description*

#### Class → Battle Spells
- **Arcanist "Arcanist Magic"**: "You learn the arcane tradition and another magic tradition"
  - Needs to reference specific tradition IDs
  - Subclasses have different tradition/spell grants

- **Talent "Expanded Arcanist Magic"**: "Learn a battle spell or magic tradition"
  - Open-ended reference to any spell from specific traditions

#### Class → Ancestry (Indirect)
- Some Arcanist talents have requirements based on subclass choice
- Ancestry grants talents/abilities that modify class features
- No direct references yet, but potential for complexities

#### Class → Class (Subclass)
- Arcanist has three subclasses (Wizard, Sorcerer, Warmage)
- Talents have subclass-specific requirements
- Features interact differently by subclass

---

## Proposed Data Architecture

### Option 1: Three Separate Files (Recommended for Now)

**Pros:**
- Each file independently usable
- Easier to version/update individual systems
- Clearer separation of concerns
- Supports incremental loading

**Cons:**
- Need a linking/reference layer (4th file)
- Query path: "Which spells does a class learn?" requires joining across files
- Duplicate information possible

**Structure:**
```
/rules/
  ├── ancestries.json
  ├── classes/
  │   ├── arcanist.json
  │   ├── warrior.json
  │   └── ...
  ├── battle-spells.json
  └── cross-references.json (NEW)
```

### Option 2: Unified Master File (Future)

**Pros:**
- All relationships explicit
- Single source of truth
- Easier cross-system queries

**Cons:**
- Very large single file
- Harder to maintain/update
- Performance issues with large dataset
- Difficult to isolate changes

---

## Unified Reference System (cross-references.json)

Even with separate files, create a master reference file that maps:

```json
{
  "references": {
    "ancestryToSpells": {
      "elementalkin": {
        "traitName": "Elemental Magic",
        "type": "conditional",
        "condition": "elemental soul",
        "options": {
          "air": "air-lightning-bolt-1",
          "earth": "earth-stone-armor-1",
          "fire": "fire-fireball-1",
          "ice": "ice-frozen-prison-1",
          "water": "water-crashing-wave-1"
        }
      }
    },
    "classToSpells": {
      "arcanist-arcanist-magic": {
        "level": 1,
        "traditions": ["arcane", "??"],
        "spellsPerTradition": 1,
        "spellTier": 1
      }
    },
    "talentToSpells": {
      "expanded-arcanist-magic": {
        "type": "choose",
        "fromTraditions": ["arcane"]
      }
    }
  }
}
```

---

## Recommended ID System

All referenceable items need consistent IDs:

### Magic Tradition IDs
```
"air", "arcane", "death", "earth", "eldritch", "enchantment", "fire", "gravity", "holy"
```

### Spell IDs
**Format:** `{tradition}-{name}-{tier}`
```
"air-lightning-bolt-1"
"arcane-dragon-transformation-2"
"death-vampiric-drain-1"
```

### Ancestry IDs
```
"human", "beastkin", "cambion", ...
```

### Class IDs
```
"arcanist", "warrior", "rogue", ...
```

### Subclass IDs
```
"arcanist-wizard", "arcanist-sorcerer", "arcanist-warmage"
```

### Talent IDs
```
"arcanist-expanded-arcanist-magic", "arcanist-far-spell", ...
```

### Feature/Ability IDs
```
"arcanist-high-magic", "arcanist-countermagic", ...
```

---

## Normalized Data Structures Needed

### 1. Magic Tradition Schema
```json
{
  "id": "arcane",
  "name": "Arcane",
  "description": "Pure magical energy and force",
  "spells": ["spell-id-1", "spell-id-2"]
}
```

### 2. Spell Schema (Unified)
```json
{
  "id": "air-lightning-bolt-1",
  "tier": 1,
  "tradition": "air",
  "name": "Lightning Bolt",
  "actType": "Action",
  "descriptor": "...",
  "keywords": ["Escalation", "Magical", "Range"],
  "mechanics": {
    "target": "1 creature within 3 zones",
    "defense": "Guard",
    "damage": "5 lightning damage per spell tier"
  },
  "grantedBy": [
    {
      "type": "ancestry",
      "ancestryId": "elementalkin",
      "condition": "elemental soul = air"
    },
    {
      "type": "class",
      "classId": "arcanist",
      "level": 1,
      "description": "Learn as part of Arcane tradition"
    }
  ]
}
```

### 3. Class Feature Schema (Unified)
```json
{
  "id": "arcanist-high-magic",
  "class": "arcanist",
  "name": "High Magic",
  "type": "ability | passive | choice",
  "actType": "Free",
  "frequency": "Encounter",
  "trigger": "You cast a battle spell",
  "effect": "Treat the spell's tier as one higher",
  "modifiedBy": ["arcanist-unparalleled-magic"],
  "modifies": []
}
```

### 4. Talent Schema
```json
{
  "id": "arcanist-expanded-arcanist-magic",
  "class": "arcanist",
  "tier": 1,
  "name": "Expanded Arcanist Magic",
  "requirement": null,
  "description": "Learn a battle spell or magic tradition from one listed in arcanist magic",
  "allowMultiple": true,
  "grantedSpellChoices": {
    "traditions": ["arcane"],
    "maxTier": 1
  }
}
```

---

## Cross-Reference Queries (Examples)

These queries become easy with proper normalization:

### Query 1: "What spells can an Arcanist learn?"
```javascript
// FROM: classes/arcanist.json -> features -> Arcanist Magic
// -> "Learn arcane tradition and another magic tradition"
// FROM: cross-references -> classToSpells -> arcanist-arcanist-magic
// Result: All spells from arcane + selected tradition (tier 1)
```

### Query 2: "What spells does Elementalkin give?"
```javascript
// FROM: ancestries.json -> elementalkin -> Elemental Magic trait
// FROM: cross-references -> ancestryToSpells -> elementalkin
// -> "Choose elemental soul, learn corresponding spell"
// Result: Conditional spell grant based on player choice
```

### Query 3: "Which features modify High Magic?"
```javascript
// FROM: battle-spells.json (if tracking features)
// OR FROM: cross-references -> featureModifications
// Result: ["unparalleled-magic"] (can use twice per scene)
```

### Query 4: "Can a Wizard learn Far Spell?"
```javascript
// FROM: classes/arcanist.json -> talents -> "Far Spell"
// -> requirement: null (no subclass requirement)
// Result: Yes, Wizard can take this talent
```

### Query 5: "Build spell list for Elementalkin Arcanist with fire affinity"
```javascript
// Ancestry grants: Fireball spell (tier 1, from Elemental Magic)
// Class grants: Arcane tradition spells (tier 1, from Arcanist Magic)
//             + 1 additional tradition (user chooses)
// Result: Spells from Arcane + Fireball + (chosen tradition)
```

---

## Transition Strategy

### Phase 1: Current State (✓ Complete)
- Three separate JSON files
- Each is valid standalone

### Phase 2: Add Reference System
- Create cross-references.json with ID-based linking
- Convert string descriptions to IDs
- Add "grantedBy" and "grants" fields to spells

### Phase 3: Normalize Schemas
- Apply unified ability schema across all files
- Convert all features to ID-based references
- Add metadata layer for relationships

### Phase 4: Create Query System (Optional)
- Write functions to join data across files
- Build validation against cross-references
- Generate reports (e.g., "complete character spell list")

### Phase 5: Combine if Needed
- Once normalized, could combine into master file
- Or keep separate with strong reference system
- Decision depends on use case (UI, API, etc.)

---

## Special Cases & Complexities

### 1. Conditional Grants (Already Found)
Some features grant different spells based on player choices:
- Elementalkin → spell depends on chosen element
- Drakkin → abilities depend on chosen heritage
- Arcanist → learns tradition "of your choice"

**Solution**: Use conditional structure with "condition" field

### 2. Requirement Chains
Some features require other features:
- "Arcane Ascending" (tier 3 talent) requires "Sorcerer" subclass
- "Sorcerer" subclass requires selecting it at level 1

**Solution**: Nested requirement objects with AND/OR logic

### 3. Synergies & Upgrades
Some features enhance others:
- "Magic Surge" only works with "High Magic"
- "Unparalleled Magic" upgrades "High Magic"

**Solution**: Cross-reference fields: "synergiesWith", "upgradesFeature"

### 4. Circular References
- Class talents might grant spells
- Spells might be restrictions on class choices
- Need validation against circular deps

**Solution**: Include bidirectional references with version tracking

---

## Recommendation

**Keep three separate JSON files for now** because:

1. ✅ System is manageable at current scope (20 ancestries, ~10 classes coming, 50+ spells)
2. ✅ Easier to edit/maintain individual systems
3. ✅ Natural file organization matches SRD structure
4. ✅ Each file can be loaded independently

**But add cross-references.json** because:

1. ✅ Provides structure for interconnections
2. ✅ Prevents hardcoding spell/tradition names
3. ✅ Makes validation possible
4. ✅ Easier transition if combining later

**Structure for completed project:**
```
/data/
  ├── ancestries.json          (20 ancestries)
  ├── classes/
  │   ├── arcanist.json        (being worked on)
  │   ├── warrior.json
  │   ├── rogue.json
  │   └── ... (more classes)
  ├── battle-spells.json       (all spell traditions)
  ├── magic-traditions.json    (metadata about traditions)
  ├── cross-references.json    (ID-based linking)
  └── schema/
      ├── ancestry.schema.json
      ├── class.schema.json
      ├── spell.schema.json
      └── reference.schema.json
```

---

## Next Steps

1. **Refactor existing JSONs** to use IDs instead of names
2. **Create magic-traditions.json** grouping spells by tradition
3. **Build cross-references.json** mapping all interconnections
4. **Add validation layer** to ensure references exist
5. **Complete remaining classes** (Warrior, Rogue, etc.)
