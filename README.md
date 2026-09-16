## Responsive Button Interaction

A new button was added inside the header that toggles a dark theme.

### How it works
- The button listens for click events in `script.js`.
- When clicked, it toggles `data-theme="dark"` on the `<body>`.
- `styles.css` contains theme-specific rules using `body[data-theme="dark"]`.
- This creates a responsive dark/light mode switch.
