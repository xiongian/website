/*
  src/data/projects.ts

  Purpose:
  - Project data array
  - POPULATE THIS FILE with your actual project data
  
  Instructions:
  - Replace placeholder data with real project information
  - Update image paths to point to your project images in src/assets/
  - Customize borderColor per project ('#244A00' for green, '#FFC36E' for yellow, etc.)
  - Add as many tags as needed - overflow will be handled automatically
*/

import type { Project } from '../types/project';
import fernandoImage from '../assets/fernando.png'; // Replace with actual project images

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'FERNANDO',
    description: 'A brief one-line description of this project',
    fullDescription: 'This is the full expanded description that appears when the project card is clicked. You can write multiple sentences here explaining the project in detail, its purpose, technologies used, challenges overcome, and outcomes achieved.',
    image: fernandoImage, // Replace with your project image
    githubUrl: 'https://github.com/xiongian/project-1',
    tags: ['Mediapipe'],
    borderColor: '#244A00', // Green
  },
  {
    id: 'project-2',
    title: 'Project Two',
    description: 'Another brief description here',
    fullDescription: 'Full description for project two goes here.',
    image: fernandoImage, // Replace
    githubUrl: 'https://github.com/xiongian/project-2',
    tags: ['Python', 'Machine Learning'],
    borderColor: '#244A00', // Green
  },
  {
    id: 'project-3',
    title: 'Project Three',
    description: 'Third project description',
    fullDescription: 'Full description for project three.',
    image: fernandoImage, // Replace
    githubUrl: 'https://github.com/xiongian/project-3',
    tags: ['Node.js', 'Express'],
    borderColor: '#244A00', // Green
  },
  {
    id: 'project-4',
    title: 'Project Four',
    description: 'Fourth project description',
    fullDescription: 'Full description for project four.',
    image: fernandoImage,
    githubUrl: 'https://github.com/xiongian/project-4',
    tags: ['React Native'],
    borderColor: '#244A00', // Green
  },
  {
    id: 'project-5',
    title: 'Project Five',
    description: 'Fifth project description',
    fullDescription: 'Full description for project five.',
    image: fernandoImage,
    githubUrl: 'https://github.com/xiongian/project-5',
    tags: ['Vue', 'Firebase'],
    borderColor: '#244A00', // Green
  },
  {
    id: 'project-6',
    title: 'Project Six',
    description: 'Sixth project description',
    fullDescription: 'Full description for project six.',
    image: fernandoImage,
    githubUrl: 'https://github.com/xiongian/project-6',
    tags: ['Docker', 'Kubernetes'],
    borderColor: '#244A00', // Green
  },
];
