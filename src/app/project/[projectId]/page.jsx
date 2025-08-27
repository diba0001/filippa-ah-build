import Link from 'next/link';
import ProjectGallery from './ProjectGallery';
import { projectsData } from '../../data/projectsData';

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(projectsData).map(projectId => ({ projectId }));
}

export default function ProjectPage({ params }) {
  const project = projectsData[params.projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-4">The requested project "{params.projectId}" could not be found.</p>
          <Link href="/work" className="text-black hover:text-gray-600 font-light tracking-wide transition-colors">← Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="px-6 py-8">
        <Link href="/work" className="inline-flex items-center text-black hover:text-gray-600 font-light text-sm uppercase">
          ← Back to Portfolio
        </Link>
      </header>

      <main id="main-content">
        <section className="px-6 py-16 text-center">
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">{project.role}</p>
          <h1 className="text-lg md:text-2xl font-light text-black mb-2">{project.title}</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed font-light text-sm italic">{project.description}</p>
          </div>
        </section>

        {/* Client-only gallery */}
        <ProjectGallery images={project.images} />
      </main>

      <footer className="px-6 py-16 text-center">
        <Link href="/work" className="inline-block text-black hover:text-gray-600 font-light tracking-wider text-sm uppercase border-b border-black hover:border-gray-600 pb-1">
          View other Projects
        </Link>
      </footer>
    </div>
  );
}
