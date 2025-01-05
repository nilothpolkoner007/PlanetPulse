import React from 'react';

export default function HeroImage() {
  return (
    <div className="absolute inset-0 bg-black/40">
      <img
        src="https://images.unsplash.com/photo-1621451537084-482c73073a0f"
        alt="Ocean plastic pollution"
        className="w-full h-full object-cover mix-blend-overlay"
      />
    </div>
  );
}