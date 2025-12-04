# Clubs of RIT - Wikipedia-Style Website

A beautifully designed, responsive website showcasing the diverse clubs and organizations at RIT Dubai. This project presents information about various student clubs in an engaging, visually appealing format inspired by Wikipedia's design philosophy.

## Features

### 🎨 Design Highlights
- **Modern, Clean Interface** - Minimalist design with a warm color palette inspired by the original presentation
- **Responsive Layout** - Fully responsive design that works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations** - Engaging fade-in animations and floating effects throughout
- **Interactive Elements** - Hover effects, smooth scrolling, and dynamic form validation

### 📱 Sections

1. **Navigation Bar** - Sticky navigation with smooth scrolling links and mobile hamburger menu
2. **Hero Section** - Eye-catching landing section with call-to-action button
3. **About Section** - Overview of Student Government-affiliated and independent clubs
4. **Featured Clubs** - Detailed cards for:
   - Environmental & Animal Welfare Club
   - Graphic Design Club
   - AI & Robotics Club
   - Desi Club
   - Women in Engineering
   - Info card for discovering more clubs
5. **Statistics Section** - Impressive statistics about RIT clubs
6. **Contact Section** - Get involved section with contact form
7. **Footer** - Credits and social media links

### 🎯 Club Categories Covered

- **Sustainability & Community** - Environmental and Animal Welfare Club
- **Creative & Innovation** - Graphic Design Club
- **Technology & Innovation** - AI & Robotics Club
- **Culture & Traditions** - Desi Club
- **STEM & Empowerment** - Women in Engineering

## File Structure

```
Wiki-Page-Assignment/
├── index.html      # Main HTML file with structure and content
├── styles.css      # Complete styling with responsive design
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## How to Use

1. **Open in Browser**
   - Simply open `index.html` in any modern web browser
   - No server or build tools required

2. **View Online**
   - Deploy to GitHub Pages, Netlify, or any static hosting service
   - Just upload the three files and you're done!

3. **Customize**
   - Edit `index.html` to change content
   - Modify `styles.css` for colors and styling
   - Update `script.js` for interactivity

## Customization Guide

### Colors
All colors are defined as CSS variables in `styles.css`:
```css
:root {
    --primary-color: #8B4513;      /* Brown */
    --secondary-color: #FF6B35;    /* Orange */
    --accent-color: #FFA500;       /* Light Orange */
    --sage-green: #7A9B8E;         /* Sage Green */
    /* ... more colors ... */
}
```

### Adding New Clubs
1. Copy a club card in `index.html`
2. Change the club header class (e.g., `eawc` to a new class like `newclub`)
3. Add styling for the new header in `styles.css`:
```css
.club-header.newclub {
    background: linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%);
}
```
4. Update the content with club details

### Contact Form
The contact form currently shows a success message. To make it functional:
1. Set up a backend service (Firebase, Formspree, etc.)
2. Update the form submission handler in `script.js`

## Features Implemented

### Interactivity
- ✅ Smooth scroll navigation with active link indicator
- ✅ Mobile hamburger menu
- ✅ Scroll-to-top button
- ✅ Contact form with validation
- ✅ Intersection Observer animations
- ✅ Floating background shapes
- ✅ Hover effects on cards

### Accessibility
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text ready (use `alt` attribute)
- ✅ Keyboard navigation support
- ✅ High contrast colors

### Performance
- ✅ Minimal dependencies (no libraries required)
- ✅ Optimized CSS with modern techniques
- ✅ Efficient JavaScript animations
- ✅ Fast loading and smooth scrolling

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

**Created by:**
- Madheeha Sameen
- Grishma Bhandari
- Amina
- Syed Zain
- Daania

**Course:** Comm.142.603  
**Institution:** RIT Dubai

## Color Palette

| Color | Usage |
|-------|-------|
| #8B4513 | Primary text and headings (Brown) |
| #FF6B35 | Buttons and highlights (Orange) |
| #FFA500 | Accents and hovers (Light Orange) |
| #7A9B8E | Green gradient accents (Sage) |
| #E8D5C4 | Light background (Peach) |

## Notes

- The website is fully self-contained with no external dependencies
- All animations are CSS-based for optimal performance
- The design follows modern web design best practices
- Mobile-first responsive design ensures great experience on all devices

## Future Enhancements

Potential additions:
- Club registration/sign-up system
- Member login and dashboard
- Event calendar
- Image gallery for each club
- Blog section for club updates
- Search functionality
- Dark mode toggle

---

**Visit us at:** RIT Dubai | **Email:** clubs@rit.edu
