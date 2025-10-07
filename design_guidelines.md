# OpsMastery CRM Landing Page - Design Guidelines

## Design Approach: Futuristic Cyberpunk Aesthetic

**Core Direction**: Blade Runner-inspired futuristic interface with aggressive red/black color scheme, advanced motion design, and cutting-edge visual effects. This is a tech-forward, premium CRM demanding a bold, memorable visual identity.

**Primary References**: Cyberpunk 2077 UI, Tesla product pages, Apple Vision Pro marketing, Stripe's gradient work

## Color Palette

### Dark Mode (Default)
**Background Layers**:
- Primary: 0 0% 6% (deep black)
- Secondary: 0 0% 10% (elevated surfaces)
- Tertiary: 0 0% 14% (cards/panels)

**Brand Colors**:
- Primary Red: 0 85% 60% (vibrant electric red)
- Deep Red: 0 75% 45% (accent/borders)
- Blood Red: 0 90% 35% (shadows/glows)

**Accent Colors**:
- Cyan Highlight: 180 100% 50% (light beam accents)
- Purple Glow: 280 80% 60% (secondary beams)
- White: 0 0% 95% (text)
- Gray: 0 0% 60% (secondary text)

**Gradient Formulas**:
- Hero Beams: Linear from cyan (180 100% 50%) through purple (280 80% 60%) to red (0 85% 60%)
- Card Highlights: Radial from red (0 85% 60%) with 0.1 opacity fading to transparent
- Section Dividers: Animated gradient borders cycling through red-cyan-purple

## Typography

**Font Stack**:
- Primary: "Inter" (weights: 400, 500, 600, 700, 800)
- Display: "Space Grotesk" (weights: 600, 700) for hero headlines
- Mono: "JetBrains Mono" for feature labels/stats

**Scale**:
- Hero H1: text-7xl md:text-8xl lg:text-9xl (font-bold, Space Grotesk)
- Section H2: text-4xl md:text-5xl lg:text-6xl
- Feature H3: text-2xl md:text-3xl
- Body: text-base md:text-lg (leading-relaxed)
- Caption: text-sm (opacity-60)

## Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24, 32 for consistent rhythm

**Grid Structure**:
- Container: max-w-7xl with px-6 md:px-8
- Sections: py-20 md:py-32 lg:py-40 for dramatic vertical spacing
- Multi-column: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for features

## Page Structure & Sections

### 1. Hero Section (100vh)
- Full-screen animated light beam background with parallax depth
- Glassmorphic center panel (backdrop-blur-xl, border with gradient)
- Animated headline with glitch effect on load
- Dual CTA buttons: Primary (red solid) + Secondary (outline with blur bg)
- Floating particle effects around CTAs
- Scroll indicator with animated beam

### 2. Stats/Trust Bar
- Glassmorphic horizontal strip beneath hero
- 4-column grid: clients, operations managed, time saved, satisfaction
- Animated counting numbers on scroll into view
- Subtle red glow on hover

### 3. Core Features (3-column grid)
- Each feature in glassmorphic card with red gradient border on hover
- Icon with cyan glow effect
- Staggered slide-up animations
- Hover: lift effect with increased glow

### 4. Platform Preview
- Large glassmorphic frame containing dashboard screenshot
- Parallax scrolling creates depth separation
- Animated light beams scan across frame
- Side annotations with connecting beam lines

### 5. Benefits Showcase (Alternating 2-column)
- Row 1: Image left, content right
- Row 2: Content left, image right
- Content in glassmorphic panels
- Images with red border glow and parallax offset

### 6. Testimonials Carousel
- 3 glassmorphic cards visible
- Auto-scroll with pause on hover
- Customer photos with cyan border glow
- Quote marks in glowing red

### 7. Pricing Tiers (3-column)
- Glassmorphic cards with varying glow intensity
- Featured plan: stronger red glow + "Popular" beam tag
- Hover: entire card lifts with enhanced border animation

### 8. Final CTA Section
- Full-width glassmorphic panel
- Centered CTA with surrounding light beam animation
- Background: animated gradient mesh

### 9. Footer
- Multi-column layout with glassmorphic dividers
- Social icons with individual glow states
- Newsletter input with glowing focus state

## Visual Effects Library

### Glassmorphism
- backdrop-blur-xl or backdrop-blur-2xl
- bg-white/5 to bg-white/10 for panels
- border: 1px solid with gradient (red to cyan at 45deg, opacity 0.2)

### Light Beams
- Animated linear gradients at 45deg angles
- Keyframe animations rotating hue and position
- Applied to ::before/::after pseudo-elements
- Mix-blend-mode: screen for luminous effect

### Parallax Configuration
- Hero elements: 3 depth layers (background beams, main content, foreground particles)
- Feature sections: data-scroll-speed attributes (0.5 to -0.5 range)
- Images: subtle depth offset (2-5px range)

## Animation Strategy

### Entry Animations (on scroll)
- Fade + Slide Up: opacity-0 translate-y-12 → opacity-100 translate-y-0
- Stagger Delay: children animate with 0.1s increments
- Duration: 0.6-0.8s with ease-out-quart easing

### Hover Animations
- Cards: transform scale-105 + glow increase
- Buttons: slight lift + glow expansion
- Icons: rotate or pulse effect
- Duration: 0.3s with ease-in-out

### Continuous Animations
- Light beams: infinite rotation (20-40s duration)
- Particle float: gentle Y-axis movement
- Gradient shifts: slow hue rotation (60s loop)
- Border pulse: opacity cycling on glassmorphic elements

### Locomotive Scroll Settings
- Smooth scrolling enabled globally
- Multiplier: 1.2 for slight momentum
- Lerp: 0.08 for fluid deceleration

## Component Specifications

**Buttons**:
- Primary: Red solid bg, white text, glow on hover, ripple effect on click
- Secondary: Outline red, backdrop-blur-md bg, red text, hover fills with red/10

**Input Fields**:
- Glassmorphic with border glow on focus
- Red accent color for focus state
- Floating labels with smooth transitions

**Cards**:
- All cards use glassmorphism base
- Hover state: stronger border, subtle lift, inner glow
- Border uses animated gradient technique

## Images

**Hero Background**: Abstract futuristic cityscape or data visualization with light beams, dark with red/cyan accents (full viewport behind glassmorphic content)

**Platform Preview**: Dashboard screenshot showing OpsMastery interface - dark theme, charts, data tables (placed in section 4)

**Benefit Section Images**: 3-4 images showing: team collaboration, analytics dashboard, automation workflows, mobile app interface - all with futuristic treatment and red accent overlays

**No traditional large hero image** - instead using animated backgrounds with light beam effects and glassmorphic foreground elements.