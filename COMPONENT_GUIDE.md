# SOOK.TV - Simplified Component Guide

## Component Overview

The `SookIntro` component is now a clean, focused landing page featuring:
- **Logo**: "sook.tv" with animated cartoonish eyes in the zeros
- **Smile**: Animated SVG smile below the header
- **Message**: Welcome text that fades in

## Component Structure

### Props
```typescript
interface SookIntroProps {
  autoPlay?: boolean;  // Whether animations start automatically (default: true)
}
```

### Key Functions

#### `blink()`
Creates a blink animation for both eyes.
- Scales eyes down on Y-axis (0.08s)
- Pauses slightly between eyes
- Scales back up (0.12s)

#### `startEyeAnimation()`
Infinite loop of eye movements:
1. Look center → blink
2. Look left
3. Look right → blink
4. Look down
5. Return to center → blink

Each movement is smooth with GSAP easing.

#### `alignEyesToHeader()`
Positions the eye elements inside the zeros of "sook.tv":
- Calculates zero dimensions and positions
- Places eyes as absolutely positioned circles
- Triggered on mount and window resize

#### `animateSmile()`
Fades in smile SVG and welcome message:
- Smile: opacity 0 → 1 (0.8s)
- Message: opacity 0 → 1 with slight upward motion (0.8s, delayed 0.3s)

## Animation Flow

```
Page loads
    ↓
300ms delay
    ↓
alignEyesToHeader() - position eyes in zeros
    ↓
startEyeAnimation() - begin eye movement loop
animateSmile() - fade in smile and message
    ↓
Eyes continuously animate (looking, blinking)
Smile stays visible
Message stays visible
```

## CSS Classes

### `.container`
Main wrapper - fixed fullscreen with white background

### `.header`
Contains logo and smile positioning

### `.brandName`
"sook.tv" text - responsive sizing (clamp)

### `.smile`
SVG smile - positioned below header, fades in

### `.eye` / `.pupil`
Eye elements - positioned absolutely over zeros

### `.message` / `.messageLine`
Welcome text - fades in and rises up

## Usage

```jsx
import SookIntro from '@/components/SookIntro';

export default function IntroPage() {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <SookIntro autoPlay={true} />
    </main>
  );
}
```

## Accessibility Features

✅ Respects `prefers-reduced-motion` setting  
✅ ARIA labels for screen readers  
✅ Semantic HTML structure  
✅ Responsive design (mobile/tablet/desktop)

## Performance Notes

- Single GSAP timeline for eye animation
- Cleanup on unmount prevents memory leaks
- Uses `will-change` CSS for optimized animations
- Minimal state (only prefers-reduced-motion)

## Customization

### Change eye color
Edit `.pupil` background in CSS

### Adjust animation speed
Modify duration values in `startEyeAnimation()` and `animateSmile()`

### Change smile shape
Edit SVG path in render

### Update message text
Change text in `.messageLine` divs

## Files to Clean Up

Delete `app/components/sookIntroSteps.ts` - no longer used
