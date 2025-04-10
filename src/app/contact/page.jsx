import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-full md:w-1/2 space-y-2">
          <h1 className="text-3xl font-black tracking-wide text-black">Reach me at</h1>
          <div>
       <a
              href="tel:+4512345678"
              aria-label="contact phone"
              className="text-3xl text-gray-500"
            >
              +4512345678
            </a>
            </div>
            <div>
              <a
              href="mailto:example@example.com"
              aria-label="contact email"
              className="text-3xl text-gray-500"
            >
              filippa@email.com
            </a>
          </div>
        </div>
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

export default ContactPage;