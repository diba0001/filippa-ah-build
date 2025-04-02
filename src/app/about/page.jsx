import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Text Content on Left */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl font-light tracking-wide">About</h1>
          
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at 
            vestibulum magna. Sed eget dignissim nisi, eu finibus tortor. 
            Sed ultrices nisi in nulla commodo, sed convallis ligula tincidunt.
          </p>
          
       <h1 className="text-3xl font-light tracking-wide">Services</h1>
          
          <p className="text-gray-700 leading-relaxed">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
            posuere cubilia curae; Pellentesque at quam eget magna vulputate 
            vulputate eu in nisl.
          </p>
        </div>
        
        {/* Image on Right */}
        <div className="w-full md:w-1/2">
          <div className="aspect-[3/4] bg-gray-200 w-full">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Profile Image
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;