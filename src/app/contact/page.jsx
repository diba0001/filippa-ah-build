import Link from 'next/link';
import React from 'react';

const ContactPage = () => {
  return (
    <section className="fixed inset-0 flex items-center justify-center px-4 overflow-hidden pointer-events-none">
      <div className="flex flex-col items-center justify-center text-center gap-6 pointer-events-auto">
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <h1 className="text-xs font-thin tracking-wide text-gray-700">Contact</h1>
            <div>
              <Link
                href="tel:+4550708507"
                aria-label="contact phone"
                className="text-xs text-black"
              >
                +45 50708507
              </Link>
            </div>
            <div>
              <Link
                href="mailto:f@filippaah.com"
                aria-label="contact email"
                className="text-xs text-black"
              >
                f@filippaah.com
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xs font-thin tracking-wide text-gray-700">(Personal)</h1>
            <div>
              <Link
                href="https://www.instagram.com/filippaastrup/"
                aria-label="Instagram Account"
                className="text-xs text-black"
              >
                @filippaastrup / Instagram
              </Link>
            </div>
            <div>
              <Link
                href="https://www.tiktok.com/@filippaastrup"
                aria-label="TikTok Account"
                className="text-xs text-black"
              >
                @filippaastrup / TikTok
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactPage;