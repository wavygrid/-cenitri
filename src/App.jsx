import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in animations
    setLoaded(true);
  }, []);

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

    // Generate world map pixels with smaller, more detailed dots
    const generateMapPixels = () => {
      const pixels = [];
      const pixelSize = 2; // Smaller dots
      const spacing = 4; // Tighter spacing for more detail

      // Create a grid of pixels representing continents
      for (let y = 0; y < canvas.height; y += spacing) {
        for (let x = 0; x < canvas.width; x += spacing) {
          // Simple world map approximation (continents)
          const lon = (x / canvas.width) * 360 - 180;
          const lat = 90 - (y / canvas.height) * 180;

          // More detailed continent boundaries
          const isLand =
            // North America
            (lon >= -170 && lon <= -50 && lat >= 15 && lat <= 72) ||
            (lon >= -130 && lon <= -55 && lat >= 5 && lat <= 15) ||
            // Central America
            (lon >= -110 && lon <= -75 && lat >= 5 && lat <= 25) ||
            // South America
            (lon >= -82 && lon <= -34 && lat >= -56 && lat <= 13) ||
            // Europe
            (lon >= -10 && lon <= 42 && lat >= 36 && lat <= 71) ||
            // Africa
            (lon >= -18 && lon <= 52 && lat >= -35 && lat <= 38) ||
            // Middle East
            (lon >= 34 && lon <= 60 && lat >= 12 && lat <= 42) ||
            // Asia
            (lon >= 42 && lon <= 150 && lat >= -10 && lat <= 77) ||
            // Southeast Asia
            (lon >= 92 && lon <= 141 && lat >= -11 && lat <= 28) ||
            // Australia
            (lon >= 113 && lon <= 154 && lat >= -44 && lat <= -10) ||
            // New Zealand
            (lon >= 166 && lon <= 179 && lat >= -47 && lat <= -34);

          if (isLand) {
            pixels.push({
              x,
              y,
              size: pixelSize,
              baseOpacity: 0.12,
              opacity: 0.12,
              pulseSpeed: 0.0008 + Math.random() * 0.0012,
              pulseOffset: Math.random() * Math.PI * 2
            });
          }
        }
      }

      return pixels;
    };

    const pixels = generateMapPixels();

    // Add pulsing effect for cities with larger radius
    const cityPulses = cities.map(city => {
      const pos = latLonToCanvas(city.lat, city.lon);
      return {
        ...pos,
        radius: 80, // Larger influence radius
        pulseSpeed: 0.0015, // Slower, more elegant pulse
        pulseOffset: Math.random() * Math.PI * 2
      };
    });

    let animationFrame;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;

      // Draw base pixels with smoother pulsing
      pixels.forEach(pixel => {
        const cityInfluence = cityPulses.reduce((acc, city) => {
          const dx = pixel.x - city.x;
          const dy = pixel.y - city.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < city.radius) {
            // Smoother sine wave for seamless pulsing
            const pulse = (Math.sin(time * city.pulseSpeed + city.pulseOffset) + 1) / 2;
            // Smooth falloff from center
            const falloff = Math.pow(1 - distance / city.radius, 2);
            const influence = falloff * pulse * 0.2;
            return acc + influence;
          }
          return acc;
        }, 0);

        const opacity = Math.min(pixel.baseOpacity + cityInfluence, 0.35);

        ctx.fillStyle = `rgba(190, 190, 190, ${opacity})`;
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
        <div className={`logo-container ${loaded ? 'fade-in' : ''}`}>
          <img src="/logo.svg" alt="Centurim" className="logo" />
        </div>

        <div className={`text-container ${loaded ? 'fade-in-delayed' : ''}`}>
          <p className="description">
            We architect the bespoke digital presence that differentiates your practice while meeting global compliance requirements.
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
