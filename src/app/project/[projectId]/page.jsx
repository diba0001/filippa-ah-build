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
      'YAS_WINTER_25': {
      title: "YAS WINTER 25 CAMPAIGN",
      role: "Art Direction",
      description: "Project in collaboration with: Matthew Minton, Vivi Søderholm, Sofie Liv Madsen",
      images: ["/images/YAS_WINTER_25_CAMPAIGN/W1.jpg", "/images/YAS_WINTER_25_CAMPAIGN/W2.jpg", "/images/YAS_WINTER_25_CAMPAIGN/W3.jpg", "/images/YAS_WINTER_25_CAMPAIGN/W4.jpg", "/images/YAS_WINTER_25_CAMPAIGN/W5.jpg"]},

       'VERO_MODA_COL.5_AW24': {
      title: "VERO MODA COL.5 AW24",
      role: "Art Direction",
      description: "Project in collaboration with: Jonas Lindhardt, Anders Witt, Sofie Liv Madsen, Kathie Lam",
      images: ["/images/VERO_MODA_COL_5/VM_1.jpg",
        "/images/VERO_MODA_COL_5/VM_2.jpg",
        "/images/VERO_MODA_COL_5/VM_3.jpg",
        "/images/VERO_MODA_COL_5/VM_4.jpg",
        "/images/VERO_MODA_COL_5/VM_5.jpg",
        "/images/VERO_MODA_COL_5/VM_6.jpg",
        "/images/VERO_MODA_COL_5/VM_7.jpg"
      ]},

       'YAS_SS5': {
      title: "YAS SS5",
      role: "Art Direction",
      description: "Project in collaboration with: Matthew Minton, Vivi Søderholm, Sofie Liv Madsen, Floor Verbruggen",
      images: ["/images/YAS_SS5/SS5_1.jpg",
"/images/YAS_SS5/SS5_2.jpg",
"/images/YAS_SS5/SS5_3.jpg",
"/images/YAS_SS5/SS5_4.jpg",
"/images/YAS_SS5/SS5_5.jpg",
"/images/YAS_SS5/SS5_6.jpg",
"/images/YAS_SS5/SS5_7.jpg",
"/images/YAS_SS5/SS5_8.jpg",
"/images/YAS_SS5/SS5_9.jpg",
"/images/YAS_SS5/SS5_10.jpg",
"/images/YAS_SS5/SS5_11.jpg",
"/images/YAS_SS5/SS5_12.jpg",
"/images/YAS_SS5/SS5_13.jpg",
"/images/YAS_SS5/SS5_14.jpg",
"/images/YAS_SS5/SS5_15.jpg",
"/images/YAS_SS5/SS5_16.jpg",
"/images/YAS_SS5/SS5_17.jpg",
"/images/YAS_SS5/SS5_18.jpg",
"/images/YAS_SS5/SS5_19.jpg",
"/images/YAS_SS5/SS5_20.jpg",
"/images/YAS_SS5/SS5_21.jpg"]},

      'MAMALICIOUS_SS6': {
      title: "MAMALICIOUS SUMMER CAMPAIGN SS6",
      role: "Art Direction & Styling",
      description: "Project in collaboration with: Anders Witt, Sofie Samuelsen, Mads Stig, Anne-Cecilie Gade, Nicole Rijsdijk",
      images: ["/images/MAMALICIOUS_SS6_2025/SS6_1.jpg",
"/images/MAMALICIOUS_SS6_2025/SS6_2.jpg",
"/images/MAMALICIOUS_SS6_2025/SS6_3.jpg",
"/images/MAMALICIOUS_SS6_2025/SS6_4.jpg",
"/images/MAMALICIOUS_SS6_2025/SS6_5.jpg",
"/images/MAMALICIOUS_SS6_2025/SS6_6.jpg",
"/images/MAMALICIOUS_SS6_2025/SS6_7.jpg"]},

       'YAS_SS6': {
      title: "YAS SUMMER COLLECTION SS6",
      role: "Art Direction",
      description: "Project in collaboration with: Christian Torp, Jan Bue Laumark, Vivi Søderholm, Maja Westergaard, Alberte Skovmose",
      images: ["/images/YAS_SS5/SS5_2.jpg",
"/images/YAS_SS6/SS6_1.jpg",
"/images/YAS_SS6/SS6_2.jpg",
"/images/YAS_SS6/SS6_3.jpg",
"/images/YAS_SS6/SS6_4.jpg",
"/images/YAS_SS6/SS6_5.jpg",
"/images/YAS_SS6/SS6_6.jpg",
"/images/YAS_SS6/SS6_7.jpg",
"/images/YAS_SS6/SS6_8.jpg",
"/images/YAS_SS6/SS6_9.jpg",
"/images/YAS_SS6/SS6_10.jpg",
"/images/YAS_SS6/SS6_11.jpg",
"/images/YAS_SS6/SS6_12.jpg",
"/images/YAS_SS6/SS6_13.jpg",
"/images/YAS_SS6/SS6_14.jpg"]},
      
       'YAS_A25': {
      title: "YAS AUTUMN 25 CAMPAIGN",
      role: "Art Direction",
      description: "Project in collaboration with: Christian Torp, Sofie Blicher",
      images: ["/images/YAS_AUTUMN_25_CAMPAIGN/A25_1.jpg",
"/images/YAS_AUTUMN_25_CAMPAIGN/A25_2.jpg",
"/images/YAS_AUTUMN_25_CAMPAIGN/A25_3.jpg",
"/images/YAS_AUTUMN_25_CAMPAIGN/A25_4.jpg",
"/images/YAS_AUTUMN_25_CAMPAIGN/A25_5.jpg",
"/images/YAS_AUTUMN_25_CAMPAIGN/A25_6.jpg",
"/images/YAS_AUTUMN_25_CAMPAIGN/A25_7.jpg",
"/images/YAS_AUTUMN_25_CAMPAIGN/A25_8.jpg",
"/images/YAS_AUTUMN_25_CAMPAIGN/A25_9.jpg",
"/images/YAS_AUTUMN_25_CAMPAIGN/A25_10.jpg"]},

       'YAS_AW2': {
      title: "YAS AUTUMN CAMPAIGN #AW2",
      role: "Art Direction & Styling",
      description: "Project in collaboration with: Christian Torp, Vivi Søderholm, Maja Westergaard, Amanda Casagrande",
      images: ["/images/YAS_AW2/AW2_1.jpg",
"/images/YAS_AW2/AW2_2.jpg",
"/images/YAS_AW2/AW2_3.jpg",
"/images/YAS_AW2/AW2_4.jpg",
"/images/YAS_AW2/AW2_5.jpg",
"/images/YAS_AW2/AW2_6.jpg",
"/images/YAS_AW2/AW2_7.jpg",
"/images/YAS_AW2/AW2_8.jpg"]},

       'IVY_CPH_AUTUMN_24': {
      title: "IVY CPH AUTUMN 24",
      role: "Art Direction & Styling",
      description: "Project in collaboration with: Matthew Minton, Josefine Gottwald Munk, Sanne Moth",
      images: ["/images/IVY_CPH_AUTUMN_24_CAMPAIGN/AW24_1.jpg",
"/images/IVY_CPH_AUTUMN_24_CAMPAIGN/AW24_2.jpg",
"/images/IVY_CPH_AUTUMN_24_CAMPAIGN/AW24_3.jpg",
"/images/IVY_CPH_AUTUMN_24_CAMPAIGN/AW24_4.jpg",
"/images/IVY_CPH_AUTUMN_24_CAMPAIGN/AW24_5.jpg",
"/images/IVY_CPH_AUTUMN_24_CAMPAIGN/AW24_6.jpg",
"/images/IVY_CPH_AUTUMN_24_CAMPAIGN/AW24_7.jpg"]},
    
       'IVY_CPH_SPRING_24': {
      title: "IVY CPH SPRING 24",
      role: "Art Direction & Styling",
      description: "Project in collaboration with: Filippa Trajkovski, Josefine Gottwald Munk, Karla Herold Lindqvist, Heidi Wessel",
      images: ["/images/IVY_CPH_SPRING_24_CAMPAIGN/SS24_1.jpg",
"/images/IVY_CPH_SPRING_24_CAMPAIGN/SS24_2.jpg",
"/images/IVY_CPH_SPRING_24_CAMPAIGN/SS24_3.jpeg",
"/images/IVY_CPH_SPRING_24_CAMPAIGN/SS24_4.jpg",
"/images/IVY_CPH_SPRING_24_CAMPAIGN/SS24_5.jpg",
"/images/IVY_CPH_SPRING_24_CAMPAIGN/SS24_6.jpg",
"/images/IVY_CPH_SPRING_24_CAMPAIGN/SS24_7.jpg",
"/images/IVY_CPH_SPRING_24_CAMPAIGN/SS24_8.jpg",
"/images/IVY_CPH_SPRING_24_CAMPAIGN/SS24_9.jpeg"]},

       'MAMALICIOUS_BLACK_FRIDAY_2024': {
      title: "MAMALICIOUS BLACK FRIDAY CAMPAIGN",
      role: "Art Direction Styling",
      description: "Project in collaboration with: Anders Witt, Sofie Samuelsen, Mille Erikstrup, Anne-Cecilie Gade, Nicoline Edinger",
      images: ["/images/MAMALICIOUS_BLACK_FRIDAY_2024/BF_1.jpg",
"/images/MAMALICIOUS_BLACK_FRIDAY_2024/BF_2.jpg",
"/images/MAMALICIOUS_BLACK_FRIDAY_2024/BF_3.jpg",
"/images/MAMALICIOUS_BLACK_FRIDAY_2024/BF_4.jpg",
"/images/MAMALICIOUS_BLACK_FRIDAY_2024/BF_5.jpg",
"/images/MAMALICIOUS_BLACK_FRIDAY_2024/BF_6.jpg",
"/images/MAMALICIOUS_BLACK_FRIDAY_2024/BF_7.jpg",
"/images/MAMALICIOUS_BLACK_FRIDAY_2024/BF_8.jpg",
"/images/MAMALICIOUS_BLACK_FRIDAY_2024/BF_9.jpg",
"/images/MAMALICIOUS_BLACK_FRIDAY_2024/BF_10.jpg",
"/images/MAMALICIOUS_BLACK_FRIDAY_2024/BF_11.jpg"]},

        'MAMALICIOUS_AUTUMN_CAMPAIGN_AW1': {
      title: "MAMALICIOUS AUTUMN CAMPAIGN #AW1",
      role: "Art Direction",
      description: "Project in collaboration with: Anders Witt, Sofie Samuelsen, Mille Erikstrup, Anne-Cecilie Gade",
      images: ["/images/MAMALICIOUS_AW1_2024/AW1_1.jpg",
"/images/MAMALICIOUS_AW1_2024/AW1_2.jpg",
"/images/MAMALICIOUS_AW1_2024/AW1_3.jpg",
"/images/MAMALICIOUS_AW1_2024/AW1_4.jpg",
"/images/MAMALICIOUS_AW1_2024/AW1_5.jpg",
"/images/MAMALICIOUS_AW1_2024/AW1_6.jpg",
"/images/MAMALICIOUS_AW1_2024/AW1_7.jpg",
"/images/MAMALICIOUS_AW1_2024/AW1_8.jpg",
"/images/MAMALICIOUS_AW1_2024/AW1_9.jpg"]},

        'MAMALICIOUS_AUTUMN_CAMPAIGN_AW2': {
      title: "MAMALICIOUS AUTUMN CAMPAIGN #AW2",
      role: "Art Direction",
      description: "Project in collaboration with: Anders Witt, Sofie Samuelsen, Mads Stig, Anne-Cecilie Gade, Nicole Rijsdijk",
      images: ["/images/MAMALICIOUS_AW2_2024/AW2_1.jpg",
"/images/MAMALICIOUS_AW2_2024/AW2_2.jpg",
"/images/MAMALICIOUS_AW2_2024/AW2_3.jpg",
"/images/MAMALICIOUS_AW2_2024/AW2_4.jpg",
"/images/MAMALICIOUS_AW2_2024/AW2_5.jpg",
"/images/MAMALICIOUS_AW2_2024/AW2_6.jpg",
"/images/MAMALICIOUS_AW2_2024/AW2_7.jpg"]},

        'PLENTY&_CAMPAIGN': {
      title: "PLENTY& CAMPAIGN",
      role: "Art Direction",
      description: "Project in collaboration with: Martin Bendix, Sofie Liv Madsen, Mads Stig",
      images: ["/images/PLENTY&_CAMPAIGN/PLENTY&_1.jpg",
"/images/PLENTY&_CAMPAIGN/PLENTY&_2.jpg",
"/images/PLENTY&_CAMPAIGN/PLENTY&_3.jpg",
"/images/PLENTY&_CAMPAIGN/PLENTY&_4.jpg",
"/images/PLENTY&_CAMPAIGN/PLENTY&_5.jpg",
"/images/PLENTY&_CAMPAIGN/PLENTY&_6.jpg",
"/images/PLENTY&_CAMPAIGN/PLENTY&_7.jpg",
"/images/PLENTY&_CAMPAIGN/PLENTY&_8.jpg",
"/images/PLENTY&_CAMPAIGN/PLENTY&_9.jpg"
]},

    'YAS-CELEBRATION': {
      title: "YAS CELEBRATION",
      role: "Art Direction & Styling",
      description: "Project in collaboration with: Christian Torp, Jan Bue Laumark, Vivi Søderholm, Maja Westergaard, Caroline Forsling",
      images: ["/images/YAS_CELEBRATION/DSCF6257.jpg", "/images/YAS_CELEBRATION/DSCF6612.jpg", "/images/YAS_CELEBRATION/DSCF6425.jpg", "/images/YAS_CELEBRATION/DSCF6520.jpg", "/images/YAS_CELEBRATION/DSCF6527.jpg", "/images/YAS_CELEBRATION/DSCF6561.jpg", "/images/YAS_CELEBRATION/DSCF6610.jpg", "/images/YAS_CELEBRATION/DSCF6301.jpg"]
    },
    'YAS': {
      title: "YAS AW1",
      role: "Art Direction",
      description: "Project in collaboration with: Christian Torp, Jan Bue Laumark, Vivi Søderholm, Maja Westergaard, Caroline Forsling",
      images: [
        "/images/YAS_AW1/250519_YAS_2DAGE21458.jpg",
        "/images/YAS_AW1/250519_YAS_2DAGE20407.jpg",
        "/images/YAS_AW1/250519_YAS_2DAGE20870.jpg",
        "/images/YAS_AW1/250519_YAS_2DAGE20105-1.jpg",
        "/images/YAS_AW1/250519_YAS_2DAGE20443.jpg",
        "/images/YAS_AW1/250519_YAS_2DAGE20893.jpg",
        "/images/YAS_AW1/250519_YAS_2DAGE21395.jpg"
      ]
    },
        'YAS_SS4': {
      title: "YAS SS4",
      role: "Art Direction & Styling",
      description: "A complete wardrobe transformation focusing on powerful, professional pieces...",
      images: [
        "/images/YAS_SS4/SS4_1.jpg",
        "/images/YAS_SS4/SS4_2.jpg",
       "/images/YAS_SS4/SS4_3.jpg",
        "/images/YAS_SS4/SS4_4.jpg",
        "/images/YAS_SS4/SS4_5.jpg",
        "/images/YAS_SS4/SS4_6.jpg",
        "/images/YAS_SS4/SS4_7.jpg",
        "/images/YAS_SS4/SS4_8.jpg",
        "/images/YAS_SS4/SS4_9.jpg",
        "/images/YAS_SS4/SS4_10.jpg",
        "/images/YAS_SS4/SS4_11.jpg",
        "/images/YAS_SS4/SS4_12.jpg",
        "/images/YAS_SS4/SS4_13.jpg",
      ]
    },
            'YAS_SS5': {
      title: "YAS SS5",
      role: "Art Direction",
      description: "Project in collaboration with: Matthew Minton, Vivi Søderholm, Sofie Liv Madsen, Floor Verbruggen",
      images: [
        "/images/YAS_SS5/SS5_1.jpg",
        "/images/YAS_SS5/SS5_2.jpg",
       "/images/YAS_SS5/SS5_3.jpg",
        "/images/YAS_SS5/SS5_4.jpg",
        "/images/YAS_SS5/SS5_5.jpg",
        "/images/YAS_SS5/SS5_6.jpg",
        "/images/YAS_SS5/SS5_7.jpg",
        "/images/YAS_SS5/SS5_8.jpg",
        "/images/YAS_SS5/SS5_9.jpg",
        "/images/YAS_SS5/SS5_10.jpg",
        "/images/YAS_SS5/SS5_11.jpg",
        "/images/YAS_SS5/SS5_12.jpg",
        "/images/YAS_SS5/SS5_13.jpg",
         "/images/YAS_SS5/SS5_14.jpg",
        "/images/YAS_SS5/SS5_15.jpg",
        "/images/YAS_SS5/SS5_16.jpg",
        "/images/YAS_SS5/SS5_17.jpg",
        "/images/YAS_SS5/SS5_18.jpg",
        "/images/YAS_SS5/SS5_19.jpg",
        "/images/YAS_SS5/SS5_20.jpg",
        "/images/YAS_SS5/SS5_21.jpg",
      ]
    }
    ,
            'YAS_SS6': {
      title: "Executive Wardrobe",
      role: "Personal Styling Session",
      description: "A complete wardrobe transformation focusing on powerful, professional pieces...",
      images: [
        "/images/YAS_SS6/SS6_1.jpg",
        "/images/YAS_SS6/SS6_2.jpg",
       "/images/YAS_SS6/SS6_3.jpg",
        "/images/YAS_SS6/SS6_4.jpg",
        "/images/YAS_SS6/SS6_5.jpg",
        "/images/YAS_SS6/SS6_6.jpg",
        "/images/YAS_SS6/SS6_7.jpg",
        "/images/YAS_SS6/SS6_8.jpg",
        "/images/YAS_SS6/SS6_9.jpg",
        "/images/YAS_SS6/SS6_10.jpg",
        "/images/YAS_SS6/SS6_11.jpg",
        "/images/YAS_SS6/SS6_12.jpg",
        "/images/YAS_SS6/SS6_13.jpg"
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
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">{project.role}</p>
          <h1 className="text-lg md:text-2xl font-light text-black mb-2">{project.title}</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed font-light text-sm italic">{project.description}</p>
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
              <div className="text-gray-600 text-sm">Loading gallery...</div>
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