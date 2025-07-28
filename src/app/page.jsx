import React from 'react';
import Image from 'next/image';

const HomepageImage = ({ 
  src = "/images/yas/250519_YAS_2DAGE21458.jpg",
  alt = "Visual storytelling image", 
  title = "VISUAL STORYTELLING AND ART DIRECTIONING" 
}) => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-full max-w-4xl px-4">
        <div className="aspect-video bg-gray-200 w-full relative overflow-hidden">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <p>No image provided</p>
            </div>
          )}
        </div>
        <div className='flex items-center justify-center text-center mt-2'>
        {/*   <h1 className='text-black font-thin text-3xl'>{title}</h1> */}
        </div>
      </div>
    </div>
  );
};

export default HomepageImage;