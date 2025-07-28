import Link from 'next/link';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-black tracking-wide text-black">Contact</h1>
            <div>
              <Link
                href="tel:+4550708507"
                aria-label="contact phone"
                className="text-lg md:text-2xl text-gray-500"
              >
                +45 50708507
              </Link>
            </div>
            <div>
              <Link
                href="mailto:f@filippaah.com"
                aria-label="contact email"
                className="text-lg md:text-2xl text-gray-500"
              >
                f@filippaah.com
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-black tracking-wide text-black">(Personal)</h1>
            <div>
              <Link
                href="https://www.instagram.com/filippaastrup/"
                aria-label="Instagram Account"
                className="text-lg md:text-2xl text-gray-500"
              >
                @filippaastrup / Instagram
              </Link>
            </div>
            <div>
              <Link
                href="https://www.tiktok.com/@filippaastrup"
                aria-label="TikTok Account"
                className="text-lg md:text-2xl text-gray-500"
              >
                @filippaastrup / TikTok
              </Link>
            </div>
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