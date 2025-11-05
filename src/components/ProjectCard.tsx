/*
  src/components/ProjectCard.tsx

  Purpose:
  - Individual project card component (345×306px aspect ratio)
  - Displays project image, title, description, and tags
  - Handles hover glow effect
  - Clickable to open expanded modal
*/

import type { JSX } from 'react';
import type { Project } from '../types/project';
import githubIcon from '../assets/github.png';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project }: Omit<ProjectCardProps, 'onClick'>): JSX.Element {
  // Calculate visible tags and overflow
  const MAX_VISIBLE_TAGS = 5; // Adjust based on card width
  const visibleTags = project.tags.slice(0, MAX_VISIBLE_TAGS);
  const overflowCount = project.tags.length - MAX_VISIBLE_TAGS;

  const handleCardClick = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="project-card"
      style={{ 
        borderColor: project.borderColor,
        cursor: project.githubUrl ? 'pointer' : 'default'
      }}
      onClick={handleCardClick}
    >
      {/* Project Image */}
      <div className="project-card-image">
        <img src={project.image} alt={project.title} />
      </div>

      {/* Project Content */}
      <div className="project-card-content">
        {/* Title and GitHub Icon */}
        <div className="project-card-header">
          <h3 className="project-card-title">{project.title}</h3>
          {project.githubUrl && (
            <div className="project-card-github">
              <img src={githubIcon} alt="GitHub" />
            </div>
          )}
        </div>

        {/* Brief Description */}
        <p className="project-card-description">{project.description}</p>

        {/* Tags */}
        <div className="project-card-tags">
          {visibleTags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
          {overflowCount > 0 && (
            <span className="project-tag project-tag-overflow">+{overflowCount}</span>
          )}
        </div>
      </div>
    </div>
  );
}
