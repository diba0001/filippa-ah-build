import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ImageGrid = () => {
  // Stylist portfolio projects with matching URLs
  const projects = [
    {
      id: 1,
      title: "Spring Editorial",
      subtitle: "Fresh Minimalism",
      imageSrc: "/images/spring-editorial.jpg",
      url: "/project/editorial-spring", // Matches the projectId from the detail page
      alt: "Spring Editorial - Fresh Minimalism",
      category: "Editorial"
    },
    {
      id: 2,
      title: "YAS CELEBRATION",
      subtitle: "Commercial Campaign",
      imageSrc: "/images/yas/YAS_CELEBRATION/DSCF6610.jpg",
      url: "/project/YAS-CELEBRATION",
      alt: "YAS CELEBRATION",
      category: "Commercial"
    },
    {
      id: 3,
      title: "YAS",
      subtitle: "Personal Styling",
      imageSrc: "/images/yas/250519_YAS_2DAGE20870.jpg",
      url: "/project/YAS",
      alt: "YAS",
      category: "Personal Styling"
    },
    {
      id: 4,
      title: "Summer Capsule",
      subtitle: "Sustainable Fashion",
      imageSrc: "/images/summer-capsule.jpg",
      url: "/project/summer-capsule",
      alt: "Summer Capsule - Sustainable Fashion",
      category: "Editorial"
    },
    {
      id: 5,
      title: "Red Carpet Ready",
      subtitle: "Event Styling",
      imageSrc: "/images/red-carpet.jpg",
      url: "/project/red-carpet",
      alt: "Red Carpet Ready - Event Styling",
      category: "Event Styling"
    },
    {
      id: 6,
      title: "Minimalist Chic",
      subtitle: "Brand Campaign",
      imageSrc: "/images/minimalist-chic.jpg",
      url: "/project/minimalist-chic",
      alt: "Minimalist Chic - Brand Campaign",
      category: "Commercial"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light text-black mb-4 tracking-tight">
          PORTFOLIO
        </h1>
        <p className="text-gray-600 font-light tracking-wide">
          Curated styling projects
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={project.url} 
            className="block group"
          >
            <div className="relative overflow-hidden">
              {/* Main Image */}
              <div className="aspect-[4/5] relative">
                <Image 
                  src={project.imageSrc}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="pt-6">
                {/* Category */}
                <p className="text-xs tracking-widest text-gray-500 uppercase mb-2 font-light">
                  {project.category}
                </p>
                
                {/* Title */}
                <h3 className="text-xl font-light text-black mb-1 tracking-tight group-hover:text-gray-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-sm text-gray-600 font-light">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-16 pt-16 border-t border-gray-100">
        <p className="text-gray-600 font-light mb-4">
          Interested in working together?
        </p>
        <Link 
          href="/contact" 
          className="inline-block text-black hover:text-gray-600 transition-colors font-light tracking-wider text-sm uppercase border-b border-black hover:border-gray-600 pb-1"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default ImageGrid;