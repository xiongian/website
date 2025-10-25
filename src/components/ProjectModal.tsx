/*
  src/components/ProjectModal.tsx

  Purpose:
  - Expanded project modal displaying full project details
  - 40vw × 85vh modal with scrollable content
  - Maintains same design as project cards
  - Click outside to close with fade transition
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
  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (project) {
      document.addEventListener('keydown', handleEscape);
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
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Section - Maintains 345:306 aspect ratio */}
        <div className="project-modal-image">
          <img src={project.image} alt={project.title} />
        </div>

        {/* Content Section - Same styling as card */}
        <div className="project-modal-content">
          {/* Title + GitHub Icon Row */}
          <div className="project-modal-header">
            <h3 className="project-modal-title">{project.title}</h3>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-modal-github"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>

          {/* Brief Description */}
          <p className="project-modal-description">{project.description}</p>

          {/* Tags Row */}
          <div className="project-modal-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="project-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Extended Description */}
          <div className="project-modal-extended">
            <p>{project.fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
