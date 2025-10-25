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

export function ProjectCard({ project, onClick }: ProjectCardProps): JSX.Element {
  // Calculate visible tags and overflow
  const MAX_VISIBLE_TAGS = 4; // Adjust based on card width
  const visibleTags = project.tags.slice(0, MAX_VISIBLE_TAGS);
  const overflowCount = project.tags.length - MAX_VISIBLE_TAGS;

  return (
    <div
      className="project-card"
      style={{ borderColor: project.borderColor }}
      onClick={onClick}
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
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-github"
              onClick={(e) => e.stopPropagation()} // Prevent card click when clicking GitHub
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
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
