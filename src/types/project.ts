/*
  src/types/project.ts

  Purpose:
  - TypeScript type definitions for project data structure
  - Makes it easy to populate project data later
*/

export interface Project {
  id: string;
  title: string;
  description: string; // 1-line brief description
  fullDescription: string; // Full description shown in expanded view
  image: string; // Path to project image
  githubUrl: string;
  tags: string[]; // Array of technology tags
  borderColor: string; // Border color (e.g., '#244A00' green or '#FFC36E' yellow)
}
