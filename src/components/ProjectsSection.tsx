/*
  src/components/ProjectsSection.tsx

  Purpose:
  - Projects section with 3×3 grid of project cards
  - Manages modal state for expanded project view
*/

import type { JSX } from 'react';
import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { projects } from '../data/projects';
import type { Project } from '../types/project';

export function ProjectsSection(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects-section" className="section">
        <div className="section-container">
          
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
}
