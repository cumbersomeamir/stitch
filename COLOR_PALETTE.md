# 🎨 Stitch Brand Color Palette Reference

Complete color system for the Stitch brand - premium, modern, creator-industry-focused.

## Usage in Tailwind Classes

All colors are available as Tailwind utility classes with the naming convention shown below.

### Primary Colors (Brand Core)

```jsx
// Electric Violet - Main brand color
className="bg-primary text-primary-2"

// Deep Space Black - Core background
className="bg-primary-2"

// Charcoal Slate - Surfaces and cards
className="bg-primary-3"
```

### Secondary Colors

```jsx
// Neo Cyan
className="bg-secondary-cyan text-secondary-cyan"

// Soft Magenta
className="bg-secondary-magenta"

// Signal Yellow
className="bg-secondary-yellow"
```

### Background Colors

```jsx
// Dark Hero background
className="bg-bg-hero"

// Dark Surface background
className="bg-bg-surface"

// Light Surface Alt
className="bg-bg-surface-alt"
```

### Text Colors

```jsx
// Primary text (white)
className="text-text-primary"

// Secondary text (soft grey)
className="text-text-secondary"

// Muted text
className="text-text-muted"

// Placeholder text
className="text-text-placeholder"
```

### Accent / Functional Colors

```jsx
// Success states
className="bg-success text-success-soft"

// Warning states
className="bg-warning text-warning-soft"

// Error states
className="bg-error text-error-deep"

// Info states
className="bg-info text-info-soft"
```

### Border Colors

```jsx
// Strong borders
className="border-border-strong"

// Light borders
className="border-border-light"

// Input field borders
className="border-border-input"
```

### Gradient Utilities

```jsx
// Brand Signature Gradient (Violet → Cyan)
<div className="gradient-brand">...</div>

// Creator Energy Gradient (Violet → Magenta)
<div className="gradient-creator">...</div>

// Luxury Dark Fade
<div className="gradient-luxury">...</div>
```

## CSS Custom Properties

All colors are also available as CSS custom properties:

```css
var(--primary-1-electric-violet)      /* #6B4EFF */
var(--primary-2-deep-space-black)     /* #0C0C14 */
var(--primary-3-charcoal-slate)       /* #1A1A24 */
var(--secondary-neo-cyan)             /* #27E6F5 */
var(--secondary-soft-magenta)         /* #FF66C4 */
var(--secondary-signal-yellow)        /* #FFE564 */
var(--text-primary)                   /* #FFFFFF */
var(--text-secondary)                 /* #B5B5C3 */
var(--text-muted)                     /* #7A7A88 */
/* ... and more */
```

## Complete Color Reference

### Primary Colors
- **Primary 1 – Electric Violet**: `#6B4EFF` - Main brand color
- **Primary 2 – Deep Space Black**: `#0C0C14` - Core background
- **Primary 3 – Charcoal Slate**: `#1A1A24` - Surfaces and cards

### Secondary Colors
- **Neo Cyan**: `#27E6F5`
- **Soft Magenta**: `#FF66C4`
- **Signal Yellow**: `#FFE564`

### Backgrounds
- **Dark Hero**: `#0C0C14`
- **Dark Surface**: `#12121C`
- **Light Surface Alt**: `#1A1A24`

### Text
- **Primary**: `#FFFFFF`
- **Secondary**: `#B5B5C3`
- **Muted**: `#7A7A88`
- **Placeholder**: `#50505C`

### Functional
- **Success**: `#2ECC71` (Soft: `#1F9D58`)
- **Warning**: `#FFC857` (Soft: `#E4A531`)
- **Error**: `#FF4D4F` (Deep: `#D9363E`)
- **Info**: `#3BA3FF` (Soft: `#1A7EDB`)

### Borders
- **Strong**: `#2A2A35`
- **Light**: `#1E1E28`
- **Input**: `#3C3C4A`

