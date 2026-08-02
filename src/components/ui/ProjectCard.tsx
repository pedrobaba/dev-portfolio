import { ExternalLink, Github, Star } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-cream shadow-md ring-1 ring-plum/5 transition-all duration-300 hover:shadow-xl hover:ring-teal/20 dark:bg-[#241d2c] dark:ring-cream/5 dark:hover:ring-teal/30">
      <div className="relative h-48 overflow-hidden bg-plum/10 dark:bg-cream/5">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-plum/30 dark:text-cream/30">
            <span className="text-sm">No image</span>
          </div>
        )}
        {project.featured && (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-teal/90 px-2.5 py-1 text-xs font-semibold text-cream backdrop-blur-sm">
            <Star className="h-3 w-3 fill-cream" />
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold text-plum dark:text-cream">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-plum/60 dark:text-cream/60">
          {project.description}
        </p>

        {project.tech_stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech_stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-blush/10 px-2.5 py-1 text-xs font-medium text-blush dark:bg-blush/15"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center gap-3">
          {project.project_url && (
            <a
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-teal/70"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-plum/60 transition-colors hover:text-plum dark:text-cream/60 dark:hover:text-cream"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
