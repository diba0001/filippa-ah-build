import React from 'react';

const ImageGrid = () => {
  // Create an array of 9 items for our 3x3 grid
  const gridItems = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    url: `/subpage-${index + 1}`,
    alt: `Project ${index + 1}`
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridItems.map((item) => (
          <a key={item.id} href={item.url} className="block aspect-square bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
            {/* Placeholder div instead of potentially problematic image */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Image {item.id}
            </div>
          </a>
        ))}
      </div>
      <div>
      </div>
    </div>
  );
};

export default ImageGrid;