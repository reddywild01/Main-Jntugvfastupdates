# JNTUGVFASTUPDATES - Visual Design Guide

## 🎨 Complete Visual Specification

---

## 1. Alert Ticker (Top Bar)

### Visual Appearance
```
┌─────────────────────────────────────────────────────────────┐
│ 🔴 LIVE UPDATES  →  B.Tech 4-2 R20 Results Published  ●    │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**:
- Height: 32px
- Background: Linear gradient (orange-600 → red-600 → orange-600)
- Text: White, 14px, bold uppercase "LIVE UPDATES"
- Animation: Vertical slide transition every 4 seconds
- Indicator: Pulsing orange dot (●)

---

## 2. Header - Primary Navigation

### Visual Appearance
```
┌─────────────────────────────────────────────────────────────┐
│  ┌──┐  JNTUGVFASTUPDATES        University  Admin  Academics│
│  │JG│  Real-Time Academic Updates                           │
│  └──┘                                                        │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**:
- Height: 80px
- Background: Blue-900 gradient (left to right)
- Logo: 56x56px white box with "JG" text
- Title: White, 24px, bold
- Subtitle: Blue-200, 14px
- Nav Links: White, 16px, hover → blue-200

---

## 3. Header - Secondary Navigation

### Visual Appearance
```
┌─────────────────────────────────────────────────────────────┐
│  📊 Results  🔔 Notifications  📅 Time Tables  🎫 Tickets   │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**:
- Height: 48px
- Background: White
- Border Bottom: 1px gray-200
- Items: Gray-700, 16px, hover → orange-600
- Icons: Emoji (24px)

---

## 4. Hero Search Section

### Visual Appearance
```
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│              Search JNTUGVFASTUPDATES                        │
│                                                              │
│    ┌──────────────────────────────────────────────┐  🔍     │
│    │  Search for results, notifications...        │         │
│    └──────────────────────────────────────────────┘         │
│                                                              │
│    ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│    │ 📊 NEW   │  │ 🎫 NEW   │  │ 📅       │                │
│    │ B.Tech   │  │ Hall     │  │ Calendar │                │
│    │ Results  │  │ Tickets  │  │ 2025-26  │                │
│    └──────────┘  └──────────┘  └──────────┘                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**:
- Background: Blue-900 gradient
- Heading: White, 30px, bold, centered
- Search Bar: White, 64px height, rounded-lg, shadow-2xl
- Search Icon: Gray-400, 24px, right-aligned
- Top 3 Cards: 
  - Background: White/10, backdrop-blur
  - Border: White/20
  - Hover: White/20
  - "NEW" Badge: Orange-500, 12px, bold

---

## 5. Notification Feed

### Visual Appearance
```
┌─────────────────────────────────────────────────────────────┐
│  🔴 Live Notification Feed                                  │
├─────────────────────────────────────────────────────────────┤
│  📢 All  📊 Results  🎫 Hall Tickets  📅 Calendars         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  📊  [NEW] [URGENT]                                      →  │
│      B.Tech 4-2 Semester (R20) Results - August 2025        │
│      Results are now available for download                 │
│      📅 2025-12-15                                          │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  🎫  [NEW]                                               →  │
│      Hall Tickets for B.Tech 3-1 (R22) - January 2026      │
│      📅 2025-12-14                                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**:
- Header: Blue-900 gradient, 64px height
- Filter Pills:
  - Active: Orange-600, white text
  - Inactive: White, gray-700 text, gray-200 border
- Notification Cards:
  - Icon: 48px emoji
  - Badges: 
    - NEW: Orange-600, 10px padding, uppercase
    - URGENT: Red-600, pulsing animation
  - Title: Gray-900, 16px, semibold
  - Description: Gray-600, 14px
  - Date: Gray-500, 14px with calendar icon
  - Hover: Blue-50 background
- Max Height: 800px, scrollable

---

## 6. Quick Actions

### Visual Appearance
```
┌─────────────────────────────────────────────────────────────┐
│  ⚡ Quick Actions                                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │ 📊  Check Results                               →  │     │
│  │     View your exam results                          │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │ 🎫  Download Hall Ticket                         →  │     │
│  │     Get your exam hall ticket                       │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │ 📅  View Time Table                              →  │     │
│  │     Check examination schedule                      │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**:
- Cards:
  - Gradient backgrounds:
    - Blue: from-blue-600 to-blue-700
    - Purple: from-purple-600 to-purple-700
    - Green: from-green-600 to-green-700
  - Height: 80px
  - Shadow: lg (hover: xl)
  - Icon: 48px emoji
  - Title: White, 18px, bold
  - Description: White/80, 14px
  - Arrow: White/80, 24px
  - Hover: Translate Y -4px

---

## 7. Department Grid

### Visual Appearance
```
┌─────────────────────────────────────────────────────────────┐
│  Department-wise Updates                                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────┐  ┌─────────────────────┐           │
│  │ 💻  CSE          → │  │ 📡  ECE          → │           │
│  │     Computer Science│  │     Electronics     │           │
│  │                [12] │  │                [8]  │           │
│  └─────────────────────┘  └─────────────────────┘           │
│                                                              │
│  ┌─────────────────────┐  ┌─────────────────────┐           │
│  │ ⚙️  MECH         → │  │ 🏗️  CIVIL        → │           │
│  │     Mechanical Eng. │  │     Civil Eng.      │           │
│  │                [6]  │  │                [5]  │           │
│  └─────────────────────┘  └─────────────────────┘           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**:
- Grid: 2 columns (1 on mobile)
- Cards:
  - Background: Gray-50 to white gradient
  - Border: 2px gray-200 (hover: blue-500)
  - Height: 100px
  - Icon: 48px emoji
  - Short Name: Gray-900, 18px, bold
  - Full Name: Gray-600, 14px
  - Badge: Orange-600 circle, -8px top/right, 32px diameter
  - Arrow: Gray-400 (hover: blue-900)

---

## 8. SGPA Calculator

### Visual Appearance
```
┌─────────────────────────────────────────────────────────────┐
│  🧮 Academic Calculators                                    │
├─────────────────────────────────────────────────────────────┤
│  [ SGPA ]  CGPA  %                                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [3 credits] [O (10)        ▼]  ✕                          │
│  [3 credits] [A+ (9)        ▼]  ✕                          │
│                                                              │
│  ┌──────────────────────────────────────────┐               │
│  │ + Add Subject                            │               │
│  └──────────────────────────────────────────┘               │
│                                                              │
│  ┌──────────────────────────────────────────┐               │
│  │         Your SGPA                        │               │
│  │                                          │               │
│  │            9.50                          │               │
│  │                                          │               │
│  └──────────────────────────────────────────┘               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**:
- Header: Orange-600 to red-600 gradient
- Tabs:
  - Active: Orange-600, white text
  - Inactive: Gray-100, gray-700 text
- Input Rows:
  - Credits: 80px width, number input
  - Grade: Flex-1, dropdown select
  - Remove: Red-600, 32px button
- Add Button: Dashed border, gray-300 (hover: orange-500)
- Result Card:
  - Background: Orange-100 to red-100 gradient
  - SGPA: 48px, bold, orange-600
  - Centered text

---

## 9. Quick Links Sidebar

### Visual Appearance
```
┌─────────────────────────────────────────────────────────────┐
│  🔗 Quick Links                                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  📚  R22 Syllabus                                        →  │
│  📝  Previous Year Papers                                →  │
│  📅  Academic Calendar                                   →  │
│  📋  R20 Regulations                                     →  │
│  📄  R18 Regulations                                     →  │
│  🕒  Exam Time Tables                                    →  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**:
- Header: Purple-900 gradient
- Links:
  - Background: Gray-50 (hover: purple-50)
  - Icon: 32px emoji
  - Text: Gray-900, 16px (hover: purple-900)
  - Arrow: Gray-400 (hover: purple-900, translate X 4px)
  - Height: 56px
  - Rounded: lg

---

## 10. Footer

### Visual Appearance
```
┌─────────────────────────────────────────────────────────────┐
│  JNTUGVFASTUPDATES                                          │
│  Your trusted source for real-time academic updates...      │
│  Follow us: 📘 🐦 📱                                        │
│                                                              │
│  Quick Links        Resources                               │
│  • Exam Results     • SGPA Calculator                       │
│  • Hall Tickets     • CGPA Calculator                       │
│  • Calendar         • R22 Regulations                       │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  © 2026 JNTUGVFASTUPDATES    Privacy | Terms | Disclaimer  │
├─────────────────────────────────────────────────────────────┤
│  ⚠️ Unofficial portal - Visit JNTU-GV official website     │
└─────────────────────────────────────────────────────────────┘
```

**Specifications**:
- Background: Gray-900 → blue-900 → gray-900 gradient
- Text: Blue-200 (links: hover white)
- Social Icons: Blue-800 circles (hover: blue-700)
- Grid: 4 columns desktop, 1 column mobile
- Border Top: Blue-800 for bottom bar
- Disclaimer Box: Blue-900/30, rounded-lg

---

## 📐 Spacing System

### Padding/Margin Scale
```
0:   0px
1:   4px
2:   8px
3:   12px
4:   16px
5:   20px
6:   24px
8:   32px
12:  48px
16:  64px
```

### Common Patterns
- Container padding: `px-4 sm:px-6 lg:px-8`
- Section spacing: `space-y-6` (24px)
- Card padding: `p-6` (24px)
- Button padding: `px-4 py-2` (16px × 8px)

---

## 🎯 Interactive States

### Buttons & Links
```
Default  → Hover      → Active     → Disabled
Gray-700 → Blue-900   → Blue-950   → Gray-400
         (scale 102%)  (scale 98%)  (opacity 50%)
```

### Cards
```
Default         → Hover
White           → Blue-50
Border Gray-200 → Border Blue-500
Shadow-lg       → Shadow-xl
                  Translate Y -2px
```

---

## 📊 Component Sizes

### Heights
- Alert Ticker: 32px
- Header Primary: 80px
- Header Secondary: 48px
- Search Bar: 64px
- Quick Action Card: 80px
- Department Card: 100px
- Notification Card: Variable (min 120px)
- Footer: Variable (min 300px)

### Widths
- Max Container: 1280px (max-w-7xl)
- Search Bar: 100% (max 768px)
- Sidebar: 33% desktop, 100% mobile

---

## 🌈 Color Usage Guide

### When to Use Each Color

**Blue** (Primary):
- Headers
- Institutional elements
- Trust indicators
- Links

**Orange** (Accent):
- "NEW" badges
- Urgent notifications
- Call-to-action buttons
- Active states

**Red** (Alert):
- "URGENT" badges
- Critical warnings
- Error states
- Live indicators

**Purple**:
- Special features (calculators)
- Premium content
- Tertiary actions

**Green**:
- Success messages
- Positive actions
- Download buttons

**Gray**:
- Body text
- Borders
- Backgrounds
- Disabled states

---

## 📱 Responsive Breakpoints

### Mobile (< 640px)
- Single column layout
- Stacked components
- Full-width cards
- Hamburger menu
- Large touch targets (min 44px)

### Tablet (640px - 1024px)
- 2-column grids
- Partial sidebar visibility
- Expanded navigation
- Larger typography

### Desktop (> 1024px)
- 3-column main grid (2:1 ratio)
- Full sidebar
- Hover states enabled
- Maximum content width: 1280px

---

## 🎬 Animation Timings

```
Fast:   150ms  (Hover states, color changes)
Normal: 300ms  (Transforms, opacity)
Slow:   500ms  (Page transitions)
Auto:   4000ms (Alert ticker rotation)
```

### Easing Functions
- `ease-in-out`: General transitions
- `ease-out`: Exit animations
- `ease-in`: Entry animations

---

## ✨ Special Effects

### Glass Morphism (Hero Cards)
```css
background: rgba(255, 255, 255, 0.1)
backdrop-filter: blur(12px)
border: 1px solid rgba(255, 255, 255, 0.2)
```

### Gradients
```css
/* Primary Header */
from-blue-900 via-blue-800 to-blue-900

/* Alert Ticker */
from-orange-600 via-red-600 to-orange-600

/* Quick Actions */
from-blue-600 to-blue-700
from-purple-600 to-purple-700
from-green-600 to-green-700
```

### Shadows
```css
/* Default */
shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)

/* Hover */
shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)

/* Hero Search */
shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

---

## 🔤 Typography Examples

### Headings
```
H1: text-3xl font-bold (30px)
H2: text-2xl font-bold (24px)
H3: text-xl font-bold (20px)
H4: text-lg font-semibold (18px)
```

### Body Text
```
Large: text-lg (18px)
Normal: text-base (16px)
Small: text-sm (14px)
Tiny: text-xs (12px)
```

### Line Heights
```
Tight: leading-tight (1.25)
Normal: leading-normal (1.5)
Relaxed: leading-relaxed (1.625)
```

---

## 🎨 Accessibility

### Color Contrast Ratios
- Normal Text: Minimum 4.5:1
- Large Text (18px+): Minimum 3:1
- UI Components: Minimum 3:1

### Focus States
```css
focus:outline-none
focus:ring-4
focus:ring-orange-400
```

### Screen Reader Support
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Alt text for all images (emojis have inherent meaning)

---

*This visual guide ensures consistent implementation across all components and devices.*
