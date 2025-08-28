"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HomepageImage = ({ 
  images = [
    "/images/GIFF/GIFF1.jpg",
    "/images/GIFF/GIFF2.jpg",
    "/images/GIFF/GIFF3.jpg",
    "/images/GIFF/GIFF4.jpg",
    "/images/GIFF/GIFF5.jpg",
    "/images/GIFF/GIFF6.jpg",
    "/images/GIFF/GIFF7.jpg",
    "/images/GIFF/GIFF8.jpg",
    "/images/GIFF/GIFF9.jpg",
    "/images/GIFF/GIFF10.jpg",
    "/images/GIFF/GIFF11.jpg",
    "/images/GIFF/GIFF12.jpg",
    "/images/GIFF/GIFF13.jpg",
    "/images/GIFF/GIFF14.jpg"
  ],
  alt = "Visual storytelling image", 
  title = "VISUAL STORYTELLING AND ART DIRECTIONING",
  flickerSpeed = 900 // milliseconds between image changes
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, flickerSpeed);

    return () => clearInterval(interval);
  }, [images.length, flickerSpeed]);

  const currentImage = images[currentImageIndex];

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-full max-w-4xl px-4">
        <div className="w-full h-[80vh] relative overflow-hidden">
          {currentImage ? (
            <Image
              src={currentImage}
              alt={`${alt} ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-700">
              <p>No images have been provided</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomepageImage;