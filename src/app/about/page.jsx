import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">          
          <p className="text-gray-700 leading-relaxed text-md">
            Filippa is a Danish art director specializing in visual brand development. With a strong focus on fashion and lifestyle,
she creates refined visual concepts rooted in a Scandinavian, feminine, and timeless aesthetic.
<br />Her work begins with a deep understanding of the client's universe and the potential to evolve it. Through concept
development, mood-boarding, and creative direction, she leads teams to bring ideas to life across both digital and
physical platforms.
<br /> <br />
Drawing inspiration from her surroundings, travels, and personal life, she creates visual identities that feel both
contemporary and emotionally resonant — always with clarity, elegance, and intention at the core.
<br />Filippa offers tailored art direction services for both individual projects and full brand refinement. She works closely
with clients to develop clear visual concepts and guide creative teams, ensuring a cohesive and impactful brand
presence across digital and physical platforms.
<br /> <br />
Having collaborated with niche companies as well as global commercial brands, she brings a broad business
understanding that bridges the creative and strategic dimensions. This unique perspective allows her to deliver visual
solutions that are not only beautiful but also aligned with long-term brand goals.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative aspect-[3/4]">
          <Image 
            src="/images/filippa.jpeg" 
            alt="Filippa - Danish Art Director"
            fill
            className="object-cover rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;