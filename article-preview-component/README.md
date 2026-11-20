# Frontend Mentor - Article preview component solution

This is my solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
- [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://github.com/Code-Surgeon-Hossam/article-preview-component](https://github.com/Code-Surgeon-Hossam/article-preview-component)
- Live Site URL: [https://code-surgeon-hossam.github.io/article-preview-component/](https://code-surgeon-hossam.github.io/article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties and Flexbox
- Mobile responsive layout with media queries
- Vanilla JavaScript
- Google Fonts (Manrope)

### What I learned

- **Positioning:** I used `position: relative` on the card and `position: absolute` on the share panel, so it floats over the content without affecting the layout.
- **Pseudo-elements:** I built the small arrow under the share panel with `::after` and CSS borders.
- **Accessibility:** The share button uses `aria-expanded` and `aria-controls`, so screen readers know whether the panel is open. I also styled the open state directly from the attribute:

```css
.share-button[aria-expanded="true"] {
  background-color: hsl(212, 23%, 45%);
}
```

- **The `hidden` attribute:** `display: flex` overrides it, so I added a `[hidden] { display: none !important; }` rule.
- **Responsive design:** On mobile the card becomes a column and the share panel turns into a full-width bar over the author row.

## Author

- GitHub - [@Code-Surgeon-Hossam](https://github.com/Code-Surgeon-Hossam)
- Frontend Mentor - [@Code-Surgeon-Hossam](https://www.frontendmentor.io/profile/Code-Surgeon-Hossam)
