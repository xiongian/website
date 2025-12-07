/*
  src/components/ProjectsSection.tsx

  Purpose:
  - Projects section with 3×2 grid of project cards
*/

import type { JSX } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export function ProjectsSection(): JSX.Element {
  return (
    <section id="projects-section" className="section">
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
