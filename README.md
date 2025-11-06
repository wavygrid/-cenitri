# Centurim - Coming Soon Page

A minimal, elegant React-based coming soon landing page featuring a subtle animated pixelated world map with city pulse effects.

## Features

- **Animated World Map Background**: Subtle pixelated world map with pulsing animations centered around major cities (New York, Berlin, Geneva, Dubai, Mumbai, Canberra, London, Moscow)
- **Modern Design**: Clean, minimalist layout with the Centurim logo and company description
- **Responsive**: Fully responsive design that works on all device sizes
- **Hanken Grotesk Font**: Professional typography using Google Fonts
- **Performance Optimized**: Canvas-based animation for smooth 60fps performance

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Technology Stack

- React 19
- Vite
- HTML5 Canvas for animations
- CSS3
- Hanken Grotesk font family

## Project Structure

```
centu-coming_soon/
├── src/
│   ├── App.jsx          # Main application component with canvas animation
│   ├── App.css          # Application styles
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── logo.svg             # Centurim logo
├── page_icon.svg        # Favicon
└── package.json         # Project dependencies
```

## Animation Details

The background features a canvas-based animation that:
- Renders a pixelated world map in subtle grey tones
- Creates pulsing effects around 8 major global cities
- Uses distance-based calculations to create radial pulse waves
- Runs at 60fps with requestAnimationFrame for smooth performance
- Adjusts automatically to window resizing

## Customization

### Changing Cities

Edit the `cities` array in `src/App.jsx`:

```javascript
const cities = [
  { name: 'City Name', lat: latitude, lon: longitude },
  // Add more cities...
];
```

### Adjusting Animation Speed

Modify the `pulseSpeed` values in `src/App.jsx` for different animation speeds.

### Styling

Edit `src/App.css` to customize colors, spacing, typography, and responsive breakpoints.

## Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge (latest versions)

## License

ISC
