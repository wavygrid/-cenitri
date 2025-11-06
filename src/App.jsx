import React, { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // City coordinates (approximate lat/long converted to canvas coordinates)
    const cities = [
      { name: 'New York', lat: 40.7128, lon: -74.0060 },
      { name: 'Berlin', lat: 52.5200, lon: 13.4050 },
      { name: 'Geneva', lat: 46.2044, lon: 6.1432 },
      { name: 'Dubai', lat: 25.2048, lon: 55.2708 },
      { name: 'Mumbai', lat: 19.0760, lon: 72.8777 },
      { name: 'Canberra', lat: -35.2809, lon: 149.1300 },
      { name: 'London', lat: 51.5074, lon: -0.1278 },
      { name: 'Moscow', lat: 55.7558, lon: 37.6173 }
    ];

    // Convert lat/lon to canvas coordinates
    const latLonToCanvas = (lat, lon) => {
      const x = ((lon + 180) / 360) * canvas.width;
      const y = ((90 - lat) / 180) * canvas.height;
      return { x, y };
    };

    // Generate world map pixels
    const generateMapPixels = () => {
      const pixels = [];
      const pixelSize = 4;
      const spacing = 6;

      // Create a grid of pixels representing continents
      for (let y = 0; y < canvas.height; y += spacing) {
        for (let x = 0; x < canvas.width; x += spacing) {
          // Simple world map approximation (continents)
          const lon = (x / canvas.width) * 360 - 180;
          const lat = 90 - (y / canvas.height) * 180;

          // Rough continent boundaries
          const isLand =
            // North America
            (lon >= -170 && lon <= -50 && lat >= 15 && lat <= 70) ||
            // South America
            (lon >= -80 && lon <= -35 && lat >= -55 && lat <= 15) ||
            // Europe
            (lon >= -10 && lon <= 40 && lat >= 35 && lat <= 70) ||
            // Africa
            (lon >= -20 && lon <= 50 && lat >= -35 && lat <= 37) ||
            // Asia
            (lon >= 40 && lon <= 150 && lat >= -10 && lat <= 75) ||
            // Australia
            (lon >= 110 && lon <= 155 && lat >= -45 && lat <= -10);

          if (isLand) {
            pixels.push({
              x,
              y,
              size: pixelSize,
              baseOpacity: 0.08,
              opacity: 0.08,
              pulseSpeed: 0.001 + Math.random() * 0.002,
              pulseOffset: Math.random() * Math.PI * 2
            });
          }
        }
      }

      return pixels;
    };

    const pixels = generateMapPixels();

    // Add pulsing effect for cities
    const cityPulses = cities.map(city => {
      const pos = latLonToCanvas(city.lat, city.lon);
      return {
        ...pos,
        radius: 40,
        pulseSpeed: 0.002,
        pulseOffset: Math.random() * Math.PI * 2
      };
    });

    let animationFrame;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;

      // Draw base pixels
      pixels.forEach(pixel => {
        const cityInfluence = cityPulses.reduce((acc, city) => {
          const dx = pixel.x - city.x;
          const dy = pixel.y - city.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < city.radius) {
            const pulse = Math.sin(time * city.pulseSpeed + city.pulseOffset) * 0.5 + 0.5;
            const influence = (1 - distance / city.radius) * pulse * 0.15;
            return acc + influence;
          }
          return acc;
        }, 0);

        const opacity = Math.min(pixel.baseOpacity + cityInfluence, 0.25);

        ctx.fillStyle = `rgba(180, 180, 180, ${opacity})`;
        ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="app">
      <canvas ref={canvasRef} className="world-map-canvas" />

      <div className="content">
        <div className="logo-container">
          <img src="/logo.svg" alt="Centurim" className="logo" />
        </div>

        <div className="text-container">
          <p className="description">
            We architect the bespoke digital presence that differentiates<br />
            your practice while meeting global compliance<br />
            requirements.
          </p>
          <a href="mailto:contact@centurim.com" className="contact">
            contact@centurim.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
