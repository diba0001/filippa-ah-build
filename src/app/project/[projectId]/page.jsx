import Link from 'next/link';
import ProjectGallery from './ProjectGallery';
import { projectsData } from '../../data/projectsData';

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(projectsData).map(projectId => ({ projectId }));
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h1 className="text-lg font-light text-gray-700 mb-4">Project Not Found</h1>
          <p className="text-gray-700 mb-4">The requested project "{resolvedParams.projectId}" could not be found.</p>
          <Link href="/work" className="text-gray-700 hover:line-through font-light tracking-wide transition-all">← Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="px-6 py-8">
        <Link href="/work" className="inline-flex items-center text-gray-700 hover:line-through font-light text-xs uppercase transition-all">
          ← Back to Portfolio
        </Link>
      </header>

      <main id="main-content">
        <section className="px-6 py-16 text-center">
          <header>
          <h1 className="text-xs font-light tracking-widest text-gray-700 mb-1">{project.title}</h1>
          </header>
          <p className="text-xs tracking-widest text-gray-700 uppercase mb-1">{project.role}</p>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 leading-relaxed font-light text-xs italic">{project.description}</p>
          </div>
        </section>

        {/* Client-only gallery */}
        <ProjectGallery images={project.images} />
      </main>

      <footer className="px-6 py-16 text-center">
        <Link href="/work" className="inline-block text-black hover:line-through font-light tracking-wider text-xs uppercase border-b border-black pb-1 transition-all">
          View other Projects
        </Link>
      </footer>
    </div>
  );
}