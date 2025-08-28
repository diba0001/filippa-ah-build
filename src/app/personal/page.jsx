"use client";
import React, { useState, useEffect } from 'react';

const PersonalPage = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Load photos from PERSONAL folder
    const loadPhotos = async () => {
      try {
        // Photo filenames with their full paths from public directory
        const photoFilenames = [
          'images/PERSONAL/P1.jpeg',
          'images/PERSONAL/P2.jpeg', 
          'images/PERSONAL/P3.jpeg',
          'images/PERSONAL/P4.jpeg',
          'images/PERSONAL/P5.jpeg',
          'images/PERSONAL/P6.jpeg',
          'images/PERSONAL/P7.jpeg',
          'images/PERSONAL/P8.jpeg',
          'images/PERSONAL/P9.jpeg', 
          'images/PERSONAL/P10.jpeg',
          'images/PERSONAL/P11.jpeg',
          'images/PERSONAL/P12.jpeg',
          'images/PERSONAL/P13.jpeg',
          'images/PERSONAL/P14.jpeg',
          'images/PERSONAL/P15.jpeg',
          'images/PERSONAL/P16.jpeg', 
          'images/PERSONAL/P17.jpeg',
          'images/PERSONAL/P18.jpeg',
          'images/PERSONAL/P19.jpeg',
          'images/PERSONAL/P20.jpeg',
          'images/PERSONAL/P21.jpeg',
          'images/PERSONAL/P22.jpeg',
          'images/PERSONAL/P23.jpeg',
          'images/PERSONAL/P24.jpeg'
        ];

        const photoData = photoFilenames.map((filename, index) => ({
          id: index + 1,
          src: `/${filename}`,
          alt: `Personal photo ${index + 1}`,
          filename: filename
        }));

        setPhotos(photoData);
      } catch (error) {
        console.error('Error loading photos:', error);
      }
    };

    loadPhotos();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="overflow-hidden shadow-md aspect-square"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src = `data:image/svg+xml;base64,${btoa(`
                  <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="400" fill="#f3f4f6"/>
                    <text x="200" y="200" font-family="Arial" font-size="16" fill="#9ca3af" text-anchor="middle">
                      Photo not found
                    </text>
                  </svg>
                `)}`;
              }}
            />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {photos.length === 0 && (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No photos found</h3>
          <p className="mt-1 text-sm text-gray-700">Make sure your photos are in the PERSONAL folder.</p>
        </div>
      )}
    </div>
  );
};

export default PersonalPage;