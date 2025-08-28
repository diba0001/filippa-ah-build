'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectGallery({ images }) {
  const scrollWrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [imageErrors, setImageErrors] = useState(new Set());
  const [isScrollTriggerReady, setIsScrollTriggerReady] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImagesLoaded(prev => {
      const newCount = prev + 1;
      if (newCount + imageErrors.size >= images.length) setIsScrollTriggerReady(true);
      return newCount;
    });
  }, [imageErrors.size, images.length]);

  const handleImageError = useCallback((_, index) => {
    setImageErrors(prev => {
      const newErrors = new Set([...prev, index]);
      if (imagesLoaded + newErrors.size >= images.length) setIsScrollTriggerReady(true);
      return newErrors;
    });
  }, [imagesLoaded, images.length]);

  useEffect(() => {
    if (!scrollWrapperRef.current || !sectionRef.current || !isScrollTriggerReady) return;

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
          invalidateOnRefresh: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isScrollTriggerReady]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-white text-black">
      <div ref={scrollWrapperRef} className="flex h-full">
        {images.map((src, index) => (
          <article key={index} className="flex-shrink-0 h-full flex items-center relative">
            <div className="h-full relative">
              {imageErrors.has(index) ? (
                <div className="h-full bg-gray-700 flex items-center justify-center px-8">
                  <p className="text-gray-300">Image unavailable</p>
                </div>
              ) : (
                <Image
                  src={src}
                  alt={`Project image ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  unoptimized
                  className="h-full w-auto object-contain"
                  onLoad={handleImageLoad}
                  onError={e => handleImageError(e, index)}
                  priority={index < 3}
                />
              )}
            </div>
          </article>
        ))}
      </div>

      {!isScrollTriggerReady && (
        <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <div className="text-gray-700 text-sm">Loading gallery...</div>
        </div>
      )}
    </section>
  );
}
