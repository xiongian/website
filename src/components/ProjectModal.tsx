/*
  src/components/ProjectModal.tsx

  Purpose:
  - Expanded project modal (centered overlay)
  - Shows full project details with description
  - Click anywhere to close
  - Fade-in animation
*/

import type { JSX } from 'react';
import { useEffect } from 'react';
import type { Project } from '../types/project';
import githubIcon from '../assets/github.png';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps): JSX.Element | null {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (project) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal"
        style={{ borderColor: project.borderColor }}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking modal content
      >
        {/* Project Image */}
        <div className="project-modal-image">
          <img src={project.image} alt={project.title} />
        </div>

        {/* Project Content */}
        <div className="project-modal-content">
          {/* Title and GitHub Icon */}
          <div className="project-modal-header">
            <h3 className="project-modal-title">{project.title}</h3>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-modal-github"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>

          {/* Brief Description */}
          <p className="project-modal-brief">{project.description}</p>

          {/* Tags */}
          <div className="project-modal-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="project-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Full Description */}
          <div className="project-modal-description">
            <p>{project.fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
