# SOOK.TV Animation Sequence - Comprehensive Breakdown

## PHASE 1: INITIAL LOAD (Header Setup)

| Step | Element | Duration | Start Time | Transition Properties | Easing | Notes |
|------|---------|----------|------------|----------------------|--------|-------|
| 1.1 | Header (sook.tv) | - | 0s | Fixed position | N/A | Visible on page load |
| 1.2 | Eyes (left & right) | - | 0s | opacity: 0, transform: translateY(20px) | N/A | Hidden initially |
| 1.3 | Smile SVG | Instant | 300ms | opacity: 1 | power2.out | Fades in smoothly |

---

## PHASE 2: EYE ANIMATION SEQUENCE (Parallel with Narrative)

| Step | Element | Duration | Start Time | Transition Properties | Easing | Notes |
|------|---------|----------|------------|----------------------|--------|-------|
| 2.1 | Eyes positioned | - | 0s | Positioned over zeros | N/A | absolutePositioning |
| 2.2 | Pupils - Center | 0.4s | 0s | x: 0, y: 0 | power2.out | Start centered |
| 2.3 | Pupils - Blink #1 | 0.08s | 0.8s | scaleY: 0.1 (left), delay 0.02s (right) | power2.in | Quick blink in |
| 2.4 | Pupils - Blink #1 Recovery | 0.12s | 0.88s | scaleY: 1 | power2.out | Blink recovery |
| 2.5 | Pupils - Left Look | 0.3s | 1.2s | x: -10, y: 0 | power2.out | Look left |
| 2.6 | Pupils - Blink #2 | 0.08s | 2.2s | scaleY: 0.1 | power2.in | Second blink |
| 2.7 | Pupils - Blink #2 Recovery | 0.12s | 2.28s | scaleY: 1 | power2.out | Recovery |
| 2.8 | Pupils - Right Look | 0.4s | 2.4s | x: 10, y: 0 | power2.out | Look right |
| 2.9 | Pupils - Down Look | 0.3s | 3.2s | x: 0, y: 8 | power2.out | Look down |
| 2.10 | Pupils - Center | 0.3s | 4.0s | x: 0, y: 0 | power2.out | Return to center |
| 2.11 | Pupils - Blink #3 | 0.08s | 4.3s | scaleY: 0.1 | power2.in | Third blink |
| 2.12 | Pupils - Blink #3 Recovery | 0.12s | 4.38s | scaleY: 1 | power2.out | Recovery |
| **Eye Loop Duration** | **~5s** | Repeats infinitely | - | - | - | Continuous animation |

---

## PHASE 3: NARRATIVE CYCLE (Sentence 1-4)

### ARABIC Sentence Sequence (Index 0)
| Step | Element | Duration | Start Time | Transition Properties | Easing | Notes |
|------|---------|----------|------------|----------------------|--------|-------|
| 3.1A | Setup | Instant | 0s | innerHTML populated, words opacity: 0, y: 20px | N/A | All 13 words hidden |
| 3.2A | Word Reveal | 0.5s | 0s | opacity: 1, y: 0, stagger: 0.08s | power2.out | Each word in sequence |
| 3.3A | Read/Hold | 2.5s | 0.5s | - | - | Display time for reading |
| 3.4A | Word Exit | 0.4s | 3.0s | opacity: 0, y: -15, stagger: 0.02s | power2.in | Quick fade out |
| **Sentence 1 Total** | **3.4s** | - | - | - | - | Includes stagger delays |

### KOREAN Sentence Sequence (Index 1)
| Step | Element | Duration | Start Time | Transition Properties | Easing | Notes |
|------|---------|----------|------------|----------------------|--------|-------|
| 3.1K | Setup | Instant | 3.4s | innerHTML populated, words opacity: 0, y: 20px | N/A | All 8 words hidden |
| 3.2K | Word Reveal | 0.5s | 3.4s | opacity: 1, y: 0, stagger: 0.08s | power2.out | Staggered reveal |
| 3.3K | Read/Hold | 2.5s | 3.9s | - | - | Display time |
| 3.4K | Word Exit | 0.4s | 6.4s | opacity: 0, y: -15, stagger: 0.02s | power2.in | Exit animation |
| **Sentence 2 Total** | **3.4s** | - | - | - | - | ~3.4s duration |

### HINDI Sentence Sequence (Index 2)
| Step | Element | Duration | Start Time | Transition Properties | Easing | Notes |
|------|---------|----------|------------|----------------------|--------|-------|
| 3.1H | Setup | Instant | 6.8s | innerHTML populated, words opacity: 0, y: 20px | N/A | All 11 words hidden |
| 3.2H | Word Reveal | 0.5s | 6.8s | opacity: 1, y: 0, stagger: 0.08s | power2.out | Staggered entry |
| 3.3H | Read/Hold | 2.5s | 7.3s | - | - | Reading time |
| 3.4H | Word Exit | 0.4s | 9.8s | opacity: 0, y: -15, stagger: 0.02s | power2.in | Smooth exit |
| **Sentence 3 Total** | **3.4s** | - | - | - | - | ~3.4s duration |

### RUSSIAN Sentence Sequence (Index 3 - LAST)
| Step | Element | Duration | Start Time | Transition Properties | Easing | Notes |
|------|---------|----------|------------|----------------------|--------|-------|
| 3.1R | Setup | Instant | 10.2s | innerHTML populated, words opacity: 0, y: 20px | N/A | All 9 words hidden |
| 3.2R | Word Reveal | 0.5s | 10.2s | opacity: 1, y: 0, stagger: 0.08s | power2.out | Staggered reveal |
| 3.3R | Read/Hold | 2.5s | 10.7s | - | - | Reading time |
| 3.4R | Word Exit | 0.4s | 13.2s | opacity: 0, y: -15, stagger: 0.02s | power2.in | Complete fade out |
| **Sentence 4 Total** | **3.4s** | - | - | - | - | Last sentence |
| **NARRATIVE CYCLE COMPLETE** | **13.6s total** | - | - | - | - | All 4 sentences |

---

## PHASE 4: TRANSITION TO WELCOME MESSAGE

| Step | Element | Duration | Start Time | Transition Properties | Easing | Notes |
|------|---------|----------|------------|----------------------|--------|-------|
| 4.1 | Narrative Text Clear | Instant | 13.6s | innerHTML = '' | N/A | Remove sentence text |
| 4.2 | Pause/Wait | 0.3s | 13.6s | - | - | Breathing room |
| 4.3 | Message HTML Insert | Instant | 13.9s | messageContainer + 2 messageLine divs | N/A | New content injected |

---

## PHASE 5: WELCOME MESSAGE & EYES APPEARANCE (Final Sequence)

| Step | Element | Duration | Start Time | Transition Properties | Easing | Notes |
|------|---------|----------|------------|----------------------|--------|-------|
| 5.1 | Wait | 0.3s | 13.9s | - | - | Slight delay before reveal |
| 5.2A | Eyes (Both) | 0.8s | 14.2s | opacity: 0→1, y: 20px→0, stagger: 0.2s | power2.out | **Both eyes fade in together** |
| 5.2B | Message Line 1 | 0.8s | 14.2s | opacity: 0→1, y: 20px→0, stagger: 0.2s | power2.out | "Welcome to the marketplace" |
| 5.2C | Message Line 2 | 0.8s | 14.4s | opacity: 0→1, y: 20px→0, stagger: 0.2s | power2.out | "Find your lane(s)" |
| 5.3 | Final State | ∞ | 15.0s | - | - | **Message stays visible permanently** |

---

## SUMMARY TIMING

| Phase | Duration | Start Time | End Time | Description |
|-------|----------|------------|----------|-------------|
| **Initial Load** | 0.3s | 0s | 0.3s | Header visible, eyes hidden, smile fades in |
| **Eye Animation** | 5s (loop) | 0.3s | Repeats | Continuous eye movement & blinking |
| **Narrative Cycle** | 13.6s | 0s | 13.6s | 4 language sentences (3.4s each) |
| **Transition Wait** | 0.3s | 13.6s | 13.9s | Clear text, prepare for message |
| **Message Setup** | Instant | 13.9s | 13.9s | Insert message HTML |
| **Reveal Animation** | 0.8s | 14.2s | 15.0s | Eyes + Message lines appear |
| **Final Display** | ∞ | 15.0s | ∞ | Welcome message remains on screen |

---

## TRANSITION PROPERTY REFERENCE

| Property | Transition Values | Purpose |
|----------|------------------|---------|
| **opacity** | 0 → 1 (fade in) / 1 → 0 (fade out) | Visibility control |
| **y (transform)** | 20px → 0 (rise) / 0 → -15px (rise out) | Vertical movement |
| **scaleY** | 1 → 0.1 → 1 | Eye blink effect |
| **x, y (pupils)** | ±10, ±8 px movement | Pupil look direction |
| **stagger** | 0.08s (words in), 0.02s (words out), 0.2s (message/eyes) | Timing delay between elements |

---

## KEY EASING FUNCTIONS

- **power2.out**: Smooth deceleration (entry animations)
- **power2.in**: Smooth acceleration (exit animations)
- **power3.out**: Faster deceleration for eye movements

---

## ANIMATION FLOW DIAGRAM

```
0s → 0.3s: Header + Smile appear
       ↓
0.3s → 13.6s: Eye animation (continuous loop) 
       + Narrative sentences (4 cycles of 3.4s each)
       ↓
13.6s → 13.9s: Clear narrative, pause
       ↓
14.2s → 15.0s: Eyes + Welcome message reveal (synchronized)
       ↓
15.0s → ∞: Final state - Welcome message visible
```

---

## CURRENT STATE

✅ **All animations complete and working**
✅ **Eyes animate in with welcome message (synchronized)**
✅ **Message remains on screen indefinitely**
✅ **Smooth transitions with consistent easing**
