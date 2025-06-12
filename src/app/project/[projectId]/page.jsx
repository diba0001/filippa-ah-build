'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectPage = ({ params }) => {
  const resolvedParams = React.use(params);
  const projectId = resolvedParams.projectId;
  const [imageErrors, setImageErrors] = useState(new Set());
  
  // Stylist project data
  const projectsData = {
    'editorial-spring': {
      title: "Spring Editorial",
      subtitle: "Fresh Minimalism",
      description: "A contemporary take on spring essentials, blending soft textures with structured silhouettes. This editorial explores the balance between comfort and sophistication, featuring organic cotton pieces and sustainable fashion choices.",
      images: [
        "/images/spring-1.jpg",
        "/images/spring-2.jpg",
        "/images/spring-3.jpg"
      ]
    },
    'commercial-shoot': {
      title: "Urban Nights",
      subtitle: "Commercial Campaign",
      description: "Bold evening looks that transition from day to night effortlessly. This commercial shoot showcases versatile pieces that embody confidence and modern femininity, perfect for the contemporary woman who values both style and functionality.",
      images: [
        "/images/urban-1.jpg",
        "/images/urban-2.jpg"
      ]
    },
    'personal-styling': {
      title: "Executive Wardrobe",
      subtitle: "Personal Styling Session",
      description: "A complete wardrobe transformation focusing on powerful, professional pieces that command attention in the boardroom. Each outfit is carefully curated to reflect personal style while maintaining executive presence.",
      images: [
        "/images/yas/250519_YAS_2DAGE21297.jpg",
        "/images/yas/250519_YAS_2DAGE21458.jpg",
        "/images/yas/250519_YAS_2DAGE20407.jpg",
        "/images/yas/250519_YAS_2DAGE20870.jpg"
      ]
    }
  };

  const project = projectsData[projectId];

  const handleImageError = (imagePath, index) => {
    setImageErrors(prev => new Set([...prev, index]));
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-4" aria-describedby="error-description">
            <span id="error-description">The requested project "{projectId}" could not be found.</span>
          </p>
          <Link 
            href="/work" 
            className="text-black hover:text-gray-600 font-light tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded px-2 py-1"
            aria-label="Return to portfolio page"
          >
            ← BACK TO PORTFOLIO
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Skip to main content link for screen readers */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>

        {/* Header with Back Button */}
        <header className="px-6 py-8 border-b border-gray-100">
          <nav aria-label="Breadcrumb navigation">
            <Link 
              href="/work" 
              className="inline-flex items-center text-black hover:text-gray-600 transition-colors font-light tracking-wider text-sm uppercase focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Return to portfolio"
            >
              <svg 
                className="w-4 h-4 mr-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main id="main-content">
          {/* Project Header */}
          <section className="px-6 py-16 text-center border-b border-gray-100">
            <p className="text-sm tracking-widest text-gray-500 uppercase mb-4" role="doc-subtitle">
              {project.subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-black mb-8 tracking-tight">
              {project.title}
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                {project.description}
              </p>
            </div>
          </section>

          {/* Image Gallery */}
          <section aria-label={`${project.title} image gallery`} className="py-16">
            <h2 className="sr-only">Project Images</h2>
            {project.images.map((image, index) => (
              <article key={index} className="mb-16 last:mb-0">
                {/* Alternating layout for visual interest */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`relative ${index % 2 === 0 ? 'ml-6' : 'mr-6'} w-full max-w-4xl`}>
                    {imageErrors.has(index) ? (
                      // Fallback for broken images
                      <div 
                        className="relative w-full h-96 md:h-[32rem] bg-gray-100 flex items-center justify-center"
                        role="img"
                        aria-label={`Image ${index + 1} failed to load`}
                      >
                        <div className="text-center text-gray-400">
                          <div className="text-4xl mb-2" aria-hidden="true">📷</div>
                          <p className="text-sm">Image unavailable</p>
                        </div>
                      </div>
                    ) : (
                      <figure className="relative w-full h-96 md:h-[32rem]">
                        <Image 
                          src={image} 
                          alt={`${project.title}, look ${index + 1} - Professional styling photograph showcasing ${project.subtitle.toLowerCase()}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1024px"
                          className="object-cover"
                          unoptimized={true}
                          onError={() => handleImageError(image, index)}
                          priority={index < 2} // Prioritize loading first 2 images
                        />
                        <figcaption className="sr-only">
                          Image {index + 1} of {project.images.length} from the {project.title} collection
                        </figcaption>
                      </figure>
                    )}
                    
                    {/* Image Number */}
                    <div 
                      className={`absolute -bottom-8 ${index % 2 === 0 ? 'left-0' : 'right-0'}`}
                      aria-label={`Image ${index + 1} of ${project.images.length}`}
                    >
                      <span className="text-xs tracking-widest text-gray-400 font-light" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>

        {/* Footer */}
        <footer className="px-6 py-16 border-t border-gray-100 text-center">
          <nav aria-label="Portfolio navigation">
            <Link 
              href="/work" 
              className="inline-block text-black hover:text-gray-600 transition-colors font-light tracking-wider text-sm uppercase border-b border-black hover:border-gray-600 pb-1 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded"
              aria-label="View more styling projects"
            >
              View More Projects
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default ProjectPage;