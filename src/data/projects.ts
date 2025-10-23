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
import rooftiltImage from '../assets/rooftilt.png';
import jigImage from '../assets/chassisjig.png';
import kartImage from '../assets/mariokart.png';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'FERNANDO',
    description: 'posture-regulating robot',
    fullDescription: 'This is the full expanded description that appears when the project card is clicked. You can write multiple sentences here explaining the project in detail, its purpose, technologies used, challenges overcome, and outcomes achieved.',
    image: fernandoImage, // Replace with your project image
    githubUrl: 'https://github.com/enxilium/posture-checker-robot',
    tags: ['mediapipe', 'opencv', 'arduino', 'python', 'next.js'],
    borderColor: '#244A00', // Green
  },
  {
    id: 'project-2',
    title: 'ROOF TILT',
    description: '6-bar linkage to optimize solar EV charging',
    fullDescription: 'Full description for project two goes here.',
    image: rooftiltImage, // Replace
    githubUrl: 'https://github.com/xiongian/project-2',
    tags: ['solidworks', 'ansys fea', 'nodal diagrams'],
    borderColor: '#244A00', // Green
  },
  {
    id: 'project-3',
    title: 'CHASSIS JIG',
    description: 'custom welding jig',
    fullDescription: 'Full description for project three.',
    image: jigImage, // Replace
    githubUrl: 'https://github.com/xiongian/project-3',
    tags: ['solidworks', 'laser-cutting', 'dfm', 'dfa'],
    borderColor: '#244A00', // Green
  },
  {
    id: 'project-4',
    title: 'SPRINTR',
    description: 'low-cost sprint timing system',
    fullDescription: 'Full description for project four.',
    image: fernandoImage,
    githubUrl: 'https://github.com/xiongian/project-4',
    tags: ['esp32', 'radio communication'],
    borderColor: '#244A00', // Green
  },
  {
    id: 'project-5',
    title: 'CONNECT FOUR',
    description: 'rebuilding a classic game',
    fullDescription: 'Full description for project five.',
    image: fernandoImage,
    githubUrl: 'https://github.com/xiongian/project-5',
    tags: ['Vue', 'Firebase'],
    borderColor: '#244A00', // Green
  },
  {
    id: 'project-6',
    title: 'PIPE FRAME KART',
    description: 'rebuilding my favourite mario kart',
    fullDescription: 'Full description for project six.',
    image: kartImage,
    githubUrl: 'https://github.com/xiongian/project-6',
    tags: ['Docker', 'Kubernetes'],
    borderColor: '#244A00', // Green
  },
];
