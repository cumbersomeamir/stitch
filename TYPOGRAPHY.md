# 🔤 Stitch Typography System

Complete typography guide for the Stitch brand - premium, modern, cinematic typography optimized for creator-facing brands.

## Current Font Setup

### Primary Font: Inter (Premium Free Alternative)

Currently using **Inter** from Google Fonts as the primary font. Inter is:
- Used by premium brands (GitHub, Figma, Linear)
- Modern, clean aesthetic similar to Söhne
- Excellent readability on dark backgrounds
- Free and web-optimized

### Target Font: Söhne (When Available)

The system is configured to support **Söhne** from Klim Type Foundry. Once you have the Söhne font files, follow the setup instructions below.

---

## Typography Hierarchy

### 1. Display / Headlines
**Use for:** Hero text, main headlines, section headers

```jsx
<h1 className="text-display-xl">
  Your Always-On Editing Team — In Your Style.
</h1>

<h2 className="text-display-lg">Section Title</h2>
<h3 className="text-display-md">Subsection Title</h3>
```

**Specs:**
- Font: Söhne Breit / Söhne Extrabold (or Inter Bold/ExtraBold)
- Weight: 700–800
- Letter-spacing: -1%
- Line-height: 1.1–1.2

### 2. Subheadings
**Use for:** Subtitles, cards, mini section titles

```jsx
<h4 className="text-subheading">Card Title</h4>
```

**Specs:**
- Font: Söhne SemiBold (or Inter SemiBold)
- Weight: 600
- Letter-spacing: -0.5%
- Line-height: 1.4

### 3. Body Text
**Use for:** Paragraphs, descriptions, FAQs, service details

```jsx
<p className="text-body-lg">Large body text</p>
<p className="text-body-md">Regular body text</p>
<p className="text-body-sm">Small body text</p>
```

**Specs:**
- Font: Söhne Buch / Regular (or Inter Regular)
- Weight: 400
- Line-height: 150–165%
- Letter-spacing: Normal

### 4. Body Medium (Highlights)
**Use for:** Keywords, pricing features, stats, important lines

```jsx
<span className="text-body-medium">Featured Feature</span>
```

**Specs:**
- Font: Söhne Halbfett / Medium (or Inter Medium)
- Weight: 500

### 5. Button & CTA Text
**Use for:** All buttons and CTAs

```jsx
<button className="text-button">Get Started</button>
<button className="text-button text-button-lg">Book a Call</button>
```

**Specs:**
- Font: Söhne Halbfett / Bold (or Inter SemiBold/Bold)
- Weight: 600–700
- Letter-spacing: -0.5%

### 6. UI Labels / Captions / Metadata
**Use for:** Timestamps, editor pod labels, filenames, footnotes, tiny UI elements

```jsx
<time className="text-caption">2 hours ago</time>
<code className="text-mono">video_edit_v2.mp4</code>
```

**Specs:**
- Font: Söhne Kursive / Söhne Mono (or Inter Regular/Mono)
- Weight: 400–500
- Small size (12–14px)

### 7. Tabular Numbers
**Use for:** Pricing, stats, metrics, dates

```jsx
<div className="font-tabular text-display">$99</div>
<div className="font-tabular">1,234,567</div>
```

**Specs:**
- Uses tabular numbers for perfect alignment
- Works with any font weight

---

## Tailwind Utility Classes

All typography styles are available as utility classes:

```jsx
// Display
className="text-display-xl"
className="text-display-lg"
className="text-display-md"

// Subheadings
className="text-subheading"

// Body
className="text-body-lg"
className="text-body-md"
className="text-body-sm"
className="text-body-medium"

// Buttons
className="text-button"
className="text-button-lg"

// Captions
className="text-caption"
className="text-mono"

// Tabular numbers
className="font-tabular"
```

---

## Adding Söhne Font Files

### Step 1: Create Font Directory
```
src/app/fonts/soehne/
```

### Step 2: Add Font Files
Place your Söhne font files in the directory with these exact names:
- `Söhne-Buch.woff2` (Regular 400)
- `Söhne-Halbfett.woff2` (Medium 500)
- `Söhne-Kräftig.woff2` (SemiBold 600)
- `Söhne-Breit.woff2` (Bold 700)
- `Söhne-Extrabold.woff2` (ExtraBold 800)
- `Söhne-Mono.woff2` (Mono variant)
- `Söhne-Kursive.woff2` (Kursive variant - optional)

### Step 3: Update layout.js
Uncomment the Söhne font configuration in `src/app/layout.js`:

1. Uncomment the `localFont` imports
2. Uncomment the `soehne` and `soehneMono` font declarations
3. Update the body className to use Söhne variables:
   ```jsx
   className={`${soehne.variable} ${soehneMono.variable} font-sans antialiased`}
   ```

### Step 4: Update globals.css
Update the `--font-sans` variable to use Söhne:
```css
--font-sans: var(--font-soehne, var(--font-inter), ...);
--font-mono: var(--font-soehne-mono, ...);
```

---

## Typography Best Practices

1. **Contrast**: Use `text-text-primary` for main content, `text-text-secondary` for supporting text
2. **Hierarchy**: Use display styles sparingly for maximum impact
3. **Readability**: Body text should use 1.6 line-height minimum
4. **Tabular Numbers**: Always use `font-tabular` for numbers in tables, pricing, stats
5. **Responsive**: Typography scales automatically with Tailwind's responsive utilities

---

## Examples

```jsx
// Hero Section
<section>
  <h1 className="text-display-xl text-text-primary mb-4">
    Your Always-On Editing Team
  </h1>
  <p className="text-body-lg text-text-secondary max-w-2xl">
    Premium video editing services for creators who demand excellence.
  </p>
  <button className="text-button px-8 py-4 rounded-lg bg-primary text-white">
    Get Started
  </button>
</section>

// Pricing Card
<div className="bg-primary-3 border border-border-strong rounded-lg p-8">
  <h3 className="text-subheading text-text-primary mb-2">Pro Plan</h3>
  <div className="text-display-lg font-tabular text-primary mb-4">$99</div>
  <ul className="space-y-2 text-body text-text-secondary">
    <li className="text-body-medium">Unlimited edits</li>
    <li>24/7 support</li>
  </ul>
</div>
```

---

## Font Weights Reference

| Weight | Söhne Name | Inter Weight | Use Case |
|--------|-----------|--------------|----------|
| 400 | Buch (Regular) | Regular | Body text |
| 500 | Halbfett (Medium) | Medium | Highlights, emphasis |
| 600 | Kräftig (SemiBold) | SemiBold | Subheadings, buttons |
| 700 | Breit (Bold) | Bold | Headlines, strong CTAs |
| 800 | Extrabold | ExtraBold | Hero text, large displays |

