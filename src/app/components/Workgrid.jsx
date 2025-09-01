import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ImageGrid = () => {
  const projects = [
         {
      id: 16,
      title: "YAS WINTER 25 CAMPAIGN",
      role: "Art Direction",
      imageSrc: "/images/YAS_WINTER_25_CAMPAIGN/W1.jpg",
      url: "/project/YAS_WINTER_25",
      alt: "YAS WINTER 25 CAMPAIGN",
      category: "Art Direction"
    },
    {
      id: 2,
      title: "YAS CELEBRATION",
      role: "Art Direction",
      imageSrc: "/images/YAS_CELEBRATION/DSCF6527.jpg",
      url: "/project/YAS-CELEBRATION",
      alt: "YAS CELEBRATION",
      category: "Art Direction"
    },
         {
      id: 14,
      title: "VERO MODA COL.5 AW24",
      role: "Art Direction",
      imageSrc: "/images/VERO_MODA_COL_5/VM_5.jpg",
      url: "/project/VERO_MODA_COL.5_AW24",
      alt: "VERO MODA COL.5 AW24",
      category: "Art Direction"
    },
    {
      id: 4,
      title: "YAS SUMMER COLLECTION SS5",
      role: "Art Direction",
      imageSrc: "/images/YAS_SS5/SS5_5.jpg",
      url: "/project/YAS_SS5",
      alt: "YAS SS5",
      category: "Art Direction"
    },
    {
      id: 3,
      title: "YAS AUTUMN CAMPAIGN #AW1",
      role: "Art Direction",
      imageSrc: "/images/YAS_AW1/250519_YAS_2DAGE20870.jpg",
      url: "/project/YAS",
      alt: "YAS",
      category: "Art Direction"
    },
          {
      id: 13,
      title: "MAMALICIOUS SUMMER CAMPAIGN SS6",
      role: "Art Direction & styling",
      imageSrc: "/images/MAMALICIOUS_SS6_2025/SS6_2.jpg",
      url: "/project/MAMALICIOUS_SS6",
      alt: "MAMALICIOUS SUMMER CAMPAIGN SS6",
      category: "Art Direction & styling"
    }
    ,
    {
      id: 5,
      title: "YAS SUMMER COLLECTION SS6",
      role: "Art Direction",
      imageSrc: "/images/YAS_SS6/SS6_1.jpg",
      url: "/project/YAS_SS6",
      alt: "YAS SS6",
      category: "Art Direction & Styling"
    },
    {
      id: 6,
      title: "YAS AUTUMN 25",
      role: "Art Direction",
      imageSrc: "/images/YAS_AUTUMN_25_CAMPAIGN/A25_9.jpg",
      url: "/project/YAS_A25",
      alt: "YAS A25",
      category: "Art Direction & Styling"
    },
     {
      id: 7,
      title: "YAS AUTUMN CAMPAIGN #AW2",
      role: "Art Direction",
      imageSrc: "/images/YAS_AW2/AW2_7.jpg",
      url: "/project/YAS_AW2",
      alt: "YAS A25 AW2",
      category: "Art Direction & Styling"
    },
         {
      id: 8,
      title: "IVY CPH AUTUMN 24 CAMPAIGN",
      role: "Art Direction",
      imageSrc: "/images/IVY_CPH_AUTUMN_24_CAMPAIGN/AW24_2.jpg",
      url: "/project/IVY_CPH_AUTUMN_24",
      alt: "IVY CPH AUTUMN 24 CAMPAIGN",
      category: "Art Direction & Styling"
    },
         {
      id: 9,
      title: "IVY CPH SPRING 24 CAMPAIGN",
      role: "Art Direction",
      imageSrc: "/images/IVY_CPH_SPRING_24_CAMPAIGN/SS24_1.jpg",
      url: "/project/IVY_CPH_SPRING_24",
      alt: "IVY CPH SPRING 24 CAMPAIGN",
      category: "Art Direction & Styling"
    },
     {
      id: 1,
      title: "YAS SS4",
      role: "Art Direction",
      imageSrc: "/images/YAS_SS4/SS4_5.jpg",
      url: "/project/YAS_SS4",
      alt: "Spring Editorial - Fresh Minimalism",
      category: "Art Direction"
    },
         {
      id: 10,
      title: "MAMALICIOUS BLACK FRIDAY CAMPAIGN",
      role: "Art Direction",
      imageSrc: "/images/MAMALICIOUS_BLACK_FRIDAY_2024/BF_10.jpg",
      url: "/project/MAMALICIOUS_BLACK_FRIDAY_2024",
      alt: "MAMALICIOUS BLACK FRIDAY CAMPAIGN",
      category: "Art Direction & Styling"
    },
         {
      id: 11,
      title: "MAMALICIOUS AUTUMN CAMPAIGN #AW1",
      role: "Art Direction",
      imageSrc: "/images/MAMALICIOUS_AW1_2024/AW1_9.jpg",
      url: "/project/MAMALICIOUS_AUTUMN_CAMPAIGN_AW1",
      alt: "MAMALICIOUS AUTUMN CAMPAIGN #AW1",
      category: "Art Direction & Styling"
    },
         {
      id: 12,
      title: "MAMALICIOUS AUTUMN CAMPAIGN #AW2",
      role: "Art Direction",
      imageSrc: "/images/MAMALICIOUS_AW2/AW2_2.jpg",
      url: "/project/MAMALICIOUS_AUTUMN_CAMPAIGN_AW2",
      alt: "MAMALICIOUS AUTUMN CAMPAIGN #AW2",
      category: "Art Direction"
    }
    ,
         {
      id: 15,
      title: "PLENTY& CAMPAIGN",
      role: "Art Direction",
      imageSrc: "/images/PLENTY_CAMPAIGN/PLENTY_1.jpg",
      url: "/project/PLENTY_CAMPAIGN",
      alt: "PLENTY& CAMPAIGN",
      category: "Art Direction"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={project.url} 
            className="block group"
          >
            <div className="relative overflow-hidden">

              <div className="aspect-[4/5] relative">
                <Image 
                  src={project.imageSrc}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 md:group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
              <div className="pt-2">
                <p className="text-[10px] tracking-widest text-gray-700 uppercase font-light flex items-center justify-center mt-1">
                  {project.category}
                </p>
                <h3 className="text-[10px] font-light tracking-widest text-gray-700 mb-2 group-hover:text-gray-700 transition-colors duration-300 flex items-center justify-center">
                  {project.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;