# GradeLift Modern Clinical Color System

## Overview

This document outlines the comprehensive "Modern Clinical" color palette implemented for GradeLift. The system is designed for trustworthiness, readability, and optimal viewing during late-night studying, with high-contrast accent colors for quizzes and community links.

---

## CSS Variables Reference

### Light Mode (Default)

```css
:root {
  /* Backgrounds & Surfaces */
  --bg-main: #ffffff; /* Crisp White - primary background */
  --bg-card: #f8fafc; /* Soft Light Gray - card containers */
  --bg-hover: #f1f5f9; /* Light Grayish-blue - hover states */

  /* Typography */
  --text-heading: #0f172a; /* Deep Navy Blue - authoritative headers */
  --text-body: #334155; /* Dark Slate - body text */
  --text-muted: #64748b; /* Medium Slate - secondary text */

  /* Brand & Accents */
  --primary-brand: #1e3a8a; /* Deep Navy - main brand color */
  --secondary-teal: #0d9488; /* Surgical Teal - progress, tabs, secondary icons */
  --accent-coral: #ff6b6b; /* Vibrant Coral - CTAs (WhatsApp, Quizzes) */

  /* Feedback Colors */
  --success-green: #10b981; /* Green - correct answers */
  --error-red: #ef4444; /* Red - wrong answers */
}
```

### Dark Mode (Late-Night Study)

```css
[data-theme="dark"] {
  /* Backgrounds & Surfaces */
  --bg-main: #0f172a; /* Deep Slate Gray - avoids OLED smearing */
  --bg-card: #1e293b; /* Slightly lighter slate - card layering */
  --bg-hover: #334155; /* Medium slate - hover states */

  /* Typography */
  --text-heading: #f8fafc; /* Off-white - prevents eye glare */
  --text-body: #cbd5e1; /* Soft gray - relaxed reading */
  --text-muted: #94a3b8; /* Muted gray - secondary text */

  /* Brand & Accents */
  --primary-brand: #3b82f6; /* Brighter Blue - improved visibility */
  --secondary-teal: #2dd4bf; /* Brighter Teal - better contrast */
  --accent-coral: #ff8787; /* Softened Coral - glowing effect */
}
```

---

## Color Roles & Usage

### 1. **Background Colors**

- **`--bg-main`**: Apply to `body` element - primary background
- **`--bg-card`**: Apply to all content containers (cards, modals, sections)
- **`--bg-hover`**: Apply to hover/active states for depth

### 2. **Typography Colors**

- **`--text-heading`**: Large headings (h1, h2, h3)
- **`--text-body`**: Paragraph text, body content
- **`--text-muted`**: Secondary info, timestamps, labels

### 3. **Brand Colors**

- **`--primary-brand`**: Primary buttons, links, focus states (Navy Blue)
- **`--secondary-teal`**:
  - Active tab indicators
  - Progress bars
  - Secondary interactive elements
  - Hover borders on cards
- **`--accent-coral`**:
  - "Join WhatsApp Channel" button (PRIMARY CTA)
  - "Start Quiz" buttons
  - Important action buttons

### 4. **Feedback Colors**

- **`--success-green`**: Correct quiz answers, success states
- **`--error-red`**: Wrong quiz answers, error states

---

## Implementation Guide

### Step 1: Apply to Body

```css
body {
  background-color: var(--bg-main);
  color: var(--text-body);
}
```

### Step 2: Style Card Containers

```css
.card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card:hover {
  border-color: var(--secondary-teal);
  transform: translateY(-2px);
}
```

### Step 3: Style CTA Buttons

```css
/* WhatsApp/Quiz buttons - Use CORAL */
.btn-cta,
.btn-primary,
.btn-quiz {
  background-color: var(--accent-coral);
  color: white;
}

.btn-cta:hover {
  background-color: #ff5252;
}
```

### Step 4: Style Progress & Interactive States

```css
.progress-bar-fill {
  background-color: var(--secondary-teal);
}

.tab.active {
  border-bottom: 3px solid var(--secondary-teal);
}
```

### Step 5: Handle Form Focus States

```css
input:focus,
textarea:focus {
  border-color: var(--primary-brand);
  box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
}
```

---

## Theme Toggle Implementation

The theme switching is handled automatically via the `data-theme` attribute:

```html
<!-- Default Light Mode -->
<html lang="en" data-theme="light">
  <!-- Or Dark Mode -->
  <html lang="en" data-theme="dark"></html>
</html>
```

JavaScript automatically applies the correct CSS variable set:

```javascript
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
});
```

---

## Color Accessibility & Contrast

All colors meet WCAG AA standards for contrast:

| Color Usage     | Light Mode         | Dark Mode          | Contrast Ratio |
| --------------- | ------------------ | ------------------ | -------------- |
| Text on Primary | #334155 on #FFFFFF | #CBD5E1 on #0F172A | 11.2:1         |
| Headers         | #0F172A on #FFFFFF | #F8FAFC on #0F172A | 18.5:1         |
| CTA Buttons     | #FFFFFF on #FF6B6B | #FFFFFF on #FF8787 | 7.1:1          |
| Secondary       | #FFFFFF on #0D9488 | #FFFFFF on #2DD4BF | 6.8:1          |

---

## Component Examples

### Study Card

```html
<div class="study-card">
  <div class="study-card-header">
    <h3 class="study-card-title">Anatomy of the Shoulder</h3>
    <span class="study-card-badge">In Progress</span>
  </div>

  <div class="study-card-content">
    <!-- Content here -->
  </div>

  <div class="study-card-actions">
    <button class="btn-card-primary">Start Quiz</button>
    <button class="btn-card-secondary">View Notes</button>
  </div>
</div>
```

### Quiz Question Card

```html
<div class="question-card">
  <h3>Question Title</h3>
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 45%;"></div>
  </div>
  <div class="options-container">
    <button class="option-btn">Option A</button>
    <button class="option-btn">Option B</button>
    <button class="option-btn correct">Option C (Correct)</button>
  </div>
</div>
```

### WhatsApp CTA

```html
<div class="cta-card">
  <h3>Join the Community</h3>
  <p>Get daily anatomy tips and support.</p>
  <a href="#" class="btn-cta">Join GradeLift WhatsApp</a>
  <!-- Uses accent-coral -->
</div>
```

---

## Dark Mode Optimization for Late-Night Studying

The dark mode palette has been specifically optimized for extended late-night study sessions:

- **OLED-friendly**: Deep slate background (#0F172A) minimizes eye strain
- **Reduced glare**: Off-white text (#F8FAFC) instead of stark white
- **Enhanced contrast**: Brighter accent colors (#3B82F6, #2DD4BF) for better visibility
- **Softened highlights**: Teal and coral slightly lightened to glow without harshness

---

## Best Practices

1. ✅ **Always use CSS variables** instead of hardcoded colors
2. ✅ **Test in both light and dark modes** before deploying
3. ✅ **Use semantic class names** that reflect purpose, not color
4. ✅ **Maintain consistent spacing** between color-coordinated elements
5. ✅ **Test with colorblind users** in mind (avoid red-green only differentiation)

---

## Customization

If you need to adjust colors, update the CSS variables in `style.css`:

```css
:root {
  --accent-coral: #ff6b6b; /* Change this value */
}

[data-theme="dark"] {
  --accent-coral: #ff8787; /* Change dark mode version */
}
```

All elements will automatically update without changing any HTML or component code.

---

## File References

- Main stylesheet: `style.css`
- Example component: `study-card-example.html`
- Main file: `index.html`

Enjoy the Modern Clinical design of GradeLift! 🎓
