# Character Builder: Data Files Quick Reference

## All Files You'll Need

### DATA SOURCE FILES (These you have or need to create)

| File | Purpose | Created? | Used In Builder Step | Queries |
|------|---------|----------|----------------------|---------|
| **ancestries.json** | All ancestry options with traits | ✅ | Step 1 | "Show me all ancestries" |
| **classes/arcanist.json** | Arcanist class details | ✅ | Step 2 | "What are this class's features?" |
| **battle-spells.json** | Magic traditions & spells | ✅ | Step 3 | "Show spells from this tradition" |
| **equipment.json** | Starting equipment options | ❌ NEED | Step 5 | "What gear does this class start with?" |
| **experiences.json** | All talents/abilities/features | ❌ NEED | Step 4 | "What talents are available?" |
| **themes.json** | Theme options & talents | ❌ NEED | Theme Step | "What theme talents exist?" |

### BUILDER CONFIGURATION FILES (These you need to create)

| File | Purpose | Created? | What It Contains |
|------|---------|----------|-----------------|
| **character-builder-schema.json** | Builder structure | ❌ NEED | Step definitions, flow, UI hints |
| **constraints.json** | Validation rules | ❌ NEED | Requirements, incompatibilities, restrictions |
| **dependencies.json** | What enables what | ❌ NEED | Feature dependencies, synergies |
| **calculation-rules.json** | Stat calculations | ❌ NEED | How to compute Guard, Spirit, Reflex, HP |
| **reference-index.json** | Fast lookup & cross-refs | ❌ NEED | ID-based indexes for all items |

### SCHEMA FILES (For validation)

| File | Purpose | Created? |
|------|---------|----------|
| **schema/ancestry.schema.json** | Validate ancestry format | ❌ NEED |
| **schema/character.schema.json** | Validate final character output | ❌ NEED |
| **schema/spell.schema.json** | Validate spell format | ❌ NEED |
| **schema/equipment.schema.json** | Validate equipment format | ❌ NEED |

### OUTPUT FILE (Created by builder when complete)

| File | Purpose |
|------|---------|
| **characters/{uuid}.json** | Saved character build with all merged data |

---

## Data Flow: What Happens at Each Step

```
STEP 1: SELECT ANCESTRY
├─ Query: ancestries.json
├─ Load: All 20 ancestry options
├─ User chooses: 1 ancestry
├─ Builder stores: { ancestryId: "user_choice" }
└─ Next step unlocks: Class selection (no restrictions)

STEP 2: SELECT CLASS & SUBCLASS
├─ Query: classes/{class}.json
├─ Load: All available classes
├─ User chooses: 1 class → 1 subclass
├─ Check: constraints.json for ancestry conflicts
├─ Builder stores: { classId, subclassId }
└─ Next step unlocks: Spell tradition selection

STEP 3: SELECT MAGIC TRADITIONS & SPELLS
├─ Query: battle-spells.json, reference-index.json
├─ Load: Traditions available for this class
├─ Filter: dependencies.json (remove restricted traditions)
├─ Check: Ancestry spell grants (e.g., elementalkin spell)
├─ User chooses: Spells from available traditions
├─ Builder stores: { selectedTraditions[], selectedSpells[] }
└─ Next step unlocks: Talent selection

STEP 4: SELECT TALENTS/EXPERIENCES
├─ Query: experiences.json, constraints.json
├─ Load: Talents available at tier 1 for this class
├─ Filter: constraints.json for subclass requirements
├─ Filter: dependencies.json (remove incompatible talents)
├─ User chooses: Available talents
├─ Builder stores: { selectedTalents[] }
└─ Next step unlocks: Equipment selection

STEP 5: SELECT EQUIPMENT
├─ Query: equipment.json
├─ Load: Starting equipment available for this class
├─ Check: dependencies.json (equipment synergies)
├─ User chooses: Starting equipment
├─ Builder stores: { selectedEquipment[] }
└─ Next step: Review & Finalize

STEP 6: REVIEW & FINALIZE
├─ Query: All stored data + calculation-rules.json
├─ Apply modifiers:
│  ├─ Base stats from class
│  ├─ Ancestry trait modifiers
│  ├─ Equipment modifiers
│  ├─ Talent modifiers
│  └─ Feature modifiers
├─ Calculate final values:
│  ├─ Guard = base + modifiers
│  ├─ Spirit = base + modifiers
│  ├─ Reflex = base + modifiers
│  └─ HP = base + modifications
├─ Check validity: schema/character.schema.json
├─ Highlight synergies: dependencies.json + enhancements
└─ Output: Final character.json
```

---

## Critical Data Relationships You Need to Implement

### Relationship 1: Ancestry Grants Spells
```
Example: Elementalkin user selects "Fire" elemental soul
├─ Ancestry file says: "Elemental Magic grants 'fireball' if fire"
├─ Battle-spells file has: { id: "fire-fireball-1", ... }
├─ dependencies.json connects: "elementalkin + fire → fire-fireball-1"
└─ Builder adds to spell list: fireball spell
```

### Relationship 2: Subclass Restricts Talents
```
Example: Arcanist user selects "Wizard" subclass
├─ Talent "Advanced Learning" has: { requirement: "wizard" }
├─ Talent "Arcane Vitality" has: { requirement: "sorcerer" }
├─ constraints.json marks: "Arcane Vitality unavailable for Wizard"
└─ Builder hides: Arcane Vitality talent option
```

### Relationship 3: Talents Modify Features
```
Example: User selects "Unparalleled Magic" talent
├─ Feature "High Magic" says: "Use once per scene"
├─ Talent "Unparalleled Magic" says: "Use twice per scene"
├─ dependencies.json links: "unparalleled-magic enhances high-magic"
└─ Character sheet shows: "High Magic (enhanced by Unparalleled Magic)"
```

### Relationship 4: Equipment Affects Defenses
```
Example: Class starts with "Mystic Robes"
├─ Equipment file says: { id: "mystic-robes", guardBonus: 0 }
├─ Subclass "Warmage" feature says: "+1 to Guard while wearing robes"
├─ calculation-rules.json shows: How to apply conditional bonus
└─ Builder at Step 6: Calculates Guard as 10 + 1 (warmage bonus)
```

### Relationship 5: Spells Available by Class
```
Example: Arcanist learns Arcane tradition
├─ Class file says: "Learn arcane tradition + 1 other"
├─ battle-spells.json has all arcane spells
├─ dependencies.json says: "Class can choose from: arcane, protection, illusion..."
├─ User selects: arcane tradition + protection tradition + spells
└─ Builder merges: Both traditions' spells into character spell list
```

---

## What Your Builder Needs to Query At Each Step

### Step 1: Ancestry Selection
```javascript
// Query
GET ancestries.json → all entries

// Build UI
map each ancestry to selectable card with description and dropdown showing choices

// Store
{ ancestryId: "selected_id" }
```

### Step 2: Class & Subclass Selection
```javascript
// Query
GET classes/ → list all class files
FOR EACH class:
  - Load metadata (name, desc)
  - Load subclasses array
  - Check constraints.json for ancestor conflicts

// Build UI
First dropdown: all classes
Second dropdown: subclasses for selected class (if any conflict, disable)

// Store
{ classId: "selected_id", subclassId: "selected_id" }
```

### Step 3: Spell Traditions
```javascript
// Query
GET battle-spells.json
GET reference-index.json → tradition availability for selected class
GET constraints.json → restricted traditions
GET dependencies.json → ancestry spell grants

// Build UI
Show available traditions
User clicks each tradition → shows available spells to select from
Show ancestry granted spell separately

// Store
{ selectedTraditions: ["arcane", "protection"],
  selectedSpells: [
    { spellId: "arcane-dart-0", tier: 0 },
    { spellId: "arcane-lightning-bolt-1", tier: 1 },
    { spellId: "fire-fireball-1", tier: 1, grantedBy: "ancestry" }
  ]
}
```

### Step 4: Talents/Experiences
```javascript
// Query
GET experiences.json
GET constraints.json → subclass requirements
GET dependencies.json → incompatibilities
GET reference-index.json → tier 1 talents available

// Build UI
Show available talents (filtered by subclass + tier)
Group by tier
Highlight synergies with already-selected features

// Store
{ selectedTalents: ["talent-id-1", "talent-id-2"] }
```

### Step 5: Equipment
```javascript
// Query
GET equipment.json
GET reference-index.json → equipment available for class
GET dependencies.json → equipment synergies

// Build UI
Show class starting equipment options
Let user select which to take

// Store
{ selectedEquipment: ["eq-mystic-robes", "eq-spellbook"] }
```

### Step 6: Review & Calculate
```javascript
// Query all gathered data + calculation-rules.json

// Calculate
FOR each stat in ["guard", "spirit", "reflex"]:
  stat_value = class_base + class_bonus + equipment_bonus + trait_bonus + talent_bonus

// Merge all feature data
final_character = {
  ...identity,
  ...calculated_stats,
  ...merged_traits,
  ...merged_features,
  ...merged_spells,
  ...merged_talents,
  ...equipment_with_effects
}

// Validate
CHECK final_character against schema/character.schema.json

// Output
SAVE final_character to characters/{uuid}.json
```

---

## Three Critical Decisions You Need to Make

### Decision 1: Where Do You Store Requirements?

Option A: In each item (Talent has "requires: wizard")
```json
{ "id": "advanced-learning", "requirement": "subclass:wizard" }
```

Option B: In constraints.json (centralized)
```json
{ "constraints": { "advanced-learning": { "requires": "wizard" } } }
```

**Recommendation**: **Option B** (centralized)
- Easier to see all constraints at a glance
- Easier to update constraints without touching individual files
- Single source of truth for validation rules

### Decision 2: Single Spell File or Multiple?

Option A: One battle-spells.json (all traditions together)
```
battle-spells.json (large, ~500+ entries)
```

Option B: battle-spells/ folder (one file per tradition)
```
battle-spells/air.json
battle-spells/arcane.json
battle-spells/death.json
... etc
```

**Recommendation**: **Option B** (separate files)
- Easier to manage (50-100 spells per file vs 500+ in one)
- Can load only needed traditions
- Natural to version/update individual traditions

### Decision 3: How Do You Handle Conditional Grants?

Example: Elementalkin gets fireball only if "fire" elemental soul

Option A: Embed in ancestry trait
```json
{
  "name": "Elemental Magic",
  "grantSpellIf": {
    "condition": "fireSelected",
    "spellId": "fire-fireball-1"
  }
}
```

Option B: Store in dependencies.json
```json
{
  "spellGrants": {
    "fire-fireball-1": {
      "grantedBy": "ancestry:elementalkin",
      "onlyIf": "elementalSoul === 'fire'"
    }
  }
}
```

**Recommendation**: **Option B** (centralized)
- Single place to find all spell grants
- Easier to query "what spells are available?"
- Builder can apply grants at build time

---

## Implementation Checklist

### Phase 1: Create Missing Data Files
- [ ] equipment.json (estimate: 30-50 items)
- [ ] experiences.json (all class talents/abilities - estimate: 100+ entries)
- [ ] themes.json (theme options and their talents)

### Phase 2: Create Builder Configuration
- [ ] character-builder-schema.json (step definitions, UI hints)
- [ ] constraints.json (validation rules)
- [ ] dependencies.json (synergies, what enables what)
- [ ] calculation-rules.json (stat formulas)
- [ ] reference-index.json (fast lookups)

### Phase 3: Create Schemas
- [ ] schema/character.schema.json (final output validation)
- [ ] schema/equipment.schema.json (item format)
- [ ] schema/experience.schema.json (talent/ability format)

### Phase 4: Build Builder Application
- [ ] Step 1 UI (ancestry selector)
- [ ] Step 2 UI (class + subclass selector)
- [ ] Step 3 UI (spell tradition selector)
- [ ] Step 4 UI (talent selector with filters)
- [ ] Step 5 UI (equipment selector)
- [ ] Step 6 UI (review + calculate + validate)
- [ ] Character sheet generation
- [ ] Save/export functionality

---

## File Size Estimates

Once complete, your data folder might look like:

```
/data
├── ancestries.json                    ~100 KB
├── classes/
│  ├── arcanist.json                   ~50 KB
│  ├── warrior.json                    ~50 KB
│  └── ... (10 more classes)           ~500 KB total
├── battle-spells/
│  ├── air.json                        ~30 KB
│  ├── arcane.json                     ~30 KB
│  └── ... (10 traditions)             ~300 KB total
├── equipment.json                     ~75 KB
├── experiences.json                   ~150 KB
├── themes.json                        ~50 KB
├── character-builder-schema.json      ~25 KB
├── constraints.json                   ~50 KB
├── dependencies.json                  ~75 KB
├── calculation-rules.json             ~20 KB
└── reference-index.json               ~50 KB
                                       ━━━━━━━━
                                       ~1.5 MB total
```

This is very manageable and can be in single or multiple files depending on your preference.

---

## Summary: What You Need for the Character Builder

**Immediate (Must Create):**
1. equipment.json
2. experiences.json
3. themes.json
4. character-builder-schema.json
5. constraints.json
6. dependencies.json
7. calculation-rules.json
8. reference-index.json

**Optional but Recommended:**
9. schema/character.schema.json (for validation)
10. Separate spell files (battle-spells/ folder)

**Then Build:**
- Step-by-step UI form
- Real-time validation
- Character calculation engine
- Save/export system

You have a solid foundation with the 3 JSON files created so far. These additional files will make the builder powerful and maintainable.
