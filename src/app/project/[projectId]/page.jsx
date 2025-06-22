'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);

const ProjectPage = ({ params }) => {
  const scrollWrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const [imageErrors, setImageErrors] = useState(new Set());
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isScrollTriggerReady, setIsScrollTriggerReady] = useState(false);

  const projectId = params.projectId;

  const projectsData = {
    'editorial-spring': {
      title: "Spring Editorial",
      subtitle: "Fresh Minimalism",
      description: "A contemporary take on spring essentials, blending soft textures with structured silhouettes...",
      images: ["/images/spring-1.jpg", "/images/spring-2.jpg", "/images/spring-3.jpg"]
    },
    'commercial-shoot': {
      title: "Urban Nights",
      subtitle: "Commercial Campaign",
      description: "Bold evening looks that transition from day to night effortlessly...",
      images: ["/images/urban-1.jpg", "/images/urban-2.jpg"]
    },
    'personal-styling': {
      title: "Executive Wardrobe",
      subtitle: "Personal Styling Session",
      description: "A complete wardrobe transformation focusing on powerful, professional pieces...",
      images: [
        "/images/yas/250519_YAS_2DAGE21297.jpg",
        "/images/yas/250519_YAS_2DAGE21458.jpg",
        "/images/yas/250519_YAS_2DAGE20407.jpg",
        "/images/yas/250519_YAS_2DAGE20870.jpg",
        "/images/yas/250519_YAS_2DAGE20105-1.jpg",
        "/images/yas/250519_YAS_2DAGE20339.jpg",
        "/images/yas/250519_YAS_2DAGE20443.jpg",
        "/images/yas/250519_YAS_2DAGE20503-1.jpg",
        "/images/yas/250519_YAS_2DAGE20838.jpg",
        "/images/yas/250519_YAS_2DAGE20893.jpg",
        "/images/yas/250519_YAS_2DAGE21395.jpg"
      ]
    }
  };

  const project = projectsData[projectId];

  // Handle image load completion
  const handleImageLoad = useCallback(() => {
    setImagesLoaded(prev => {
      const newCount = prev + 1;
      // Check if all images (including error ones) are processed
      if (newCount + imageErrors.size >= project?.images.length) {
        setIsScrollTriggerReady(true);
      }
      return newCount;
    });
  }, [imageErrors.size, project?.images.length]);

  const handleImageError = useCallback((imagePath, index) => {
    setImageErrors(prev => {
      const newErrors = new Set([...prev, index]);
      // Check if all images (including loaded ones) are processed
      if (imagesLoaded + newErrors.size >= project?.images.length) {
        setIsScrollTriggerReady(true);
      }
      return newErrors;
    });
  }, [imagesLoaded, project?.images.length]);

  // Setup ScrollTrigger after images are loaded
  useEffect(() => {
    if (!scrollWrapperRef.current || !sectionRef.current || !isScrollTriggerReady || !project) return;

    // Small delay to ensure DOM is fully updated
    const timer = setTimeout(() => {
      ScrollTrigger.refresh(); // Refresh first to clear any existing calculations
      
      const totalWidth = scrollWrapperRef.current.scrollWidth;
      const horizontalScrollLength = totalWidth - window.innerWidth;

      const ctx = gsap.context(() => {
        gsap.to(scrollWrapperRef.current, {
          x: -horizontalScrollLength,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true, // Recalculate on window resize
            onRefresh: () => {
              // Recalculate dimensions on refresh
              const newTotalWidth = scrollWrapperRef.current.scrollWidth;
              const newHorizontalScrollLength = newTotalWidth - window.innerWidth;
              gsap.set(scrollWrapperRef.current, { x: 0 }); // Reset position
            }
          }
        });
      }, sectionRef);

      return () => {
        ctx.revert();
        clearTimeout(timer);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [isScrollTriggerReady, project]);

  // Cleanup ScrollTrigger on route change
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projectId]);

  // Reset state when project changes
  useEffect(() => {
    setImagesLoaded(0);
    setImageErrors(new Set());
    setIsScrollTriggerReady(false);
    ScrollTrigger.refresh();
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-4">The requested project "{projectId}" could not be found.</p>
          <Link href="/work" className="text-black hover:text-gray-600 font-light tracking-wide transition-colors">← BACK TO PORTFOLIO</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="px-6 py-8">
        <Link href="/work" className="inline-flex items-center text-black hover:text-gray-600 font-light text-sm uppercase">
          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>
      </header>

      <main id="main-content">
        {/* Project intro */}
        <section className="px-6 py-16 text-center">
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">{project.subtitle}</p>
          <h1 className="text-4xl md:text-6xl font-light text-black mb-8">{project.title}</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed font-light text-lg">{project.description}</p>
          </div>
        </section>

        {/* Horizontal scroll gallery */}
        <section ref={sectionRef} className="relative h-screen overflow-hidden bg-white text-black">
          <div ref={scrollWrapperRef} className="flex h-full">
            {project.images.map((img, index) => (
              <article key={index} className="flex-shrink-0 h-full flex items-center relative">
                <div className="h-full relative">
                  {imageErrors.has(index) ? (
                    <div className="h-full bg-gray-700 flex items-center justify-center px-8">
                      <p className="text-gray-300">Image unavailable</p>
                    </div>
                  ) : (
                    <Image
                      src={img}
                      alt={`Project image ${index + 1}`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      unoptimized
                      className="h-full w-auto object-contain"
                      onLoad={handleImageLoad}
                      onError={() => handleImageError(img, index)}
                      priority={index < 3} // Prioritize first 3 images
                    />
                  )}
                </div>
              </article>
            ))}
          </div>
          
          {/* Loading indicator */}
          {!isScrollTriggerReady && (
            <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
              <div className="text-gray-600">Loading gallery...</div>
            </div>
          )}
        </section>
      </main>

      <footer className="px-6 py-16 text-center">
        <Link href="/work" className="inline-block text-black hover:text-gray-600 font-light tracking-wider text-sm uppercase border-b border-black hover:border-gray-600 pb-1">
          View other Projects
        </Link>
      </footer>
    </div>
  );
};

export default ProjectPage;