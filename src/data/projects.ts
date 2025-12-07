import type { Project } from '../types/project';
import fernandoImage from '../assets/fernando.png'; // Replace with actual project images
import rooftiltImage from '../assets/rooftilt.png';
import jigImage from '../assets/chassisjig.png';
import kartImage from '../assets/mariokart.png';
import connectfourImage from '../assets/connectfour.png'
import sprintrImage from '../assets/sprintr.png'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'FERNANDO',
    description: 'a posture-regulating robot',
    fullDescription: '',
    image: fernandoImage,
    githubUrl: 'https://github.com/xiongian/posture-checker-robot',
    tags: ['mediapipe', 'opencv', 'arduino', 'next.js'],
    borderColor: 'var(--g-border)',
  },
  {
    id: 'project-5',
    title: 'CONNECT FOUR',
    description: 'rebuilding a classic game',
    fullDescription: '',
    image: connectfourImage,
    githubUrl: 'https://github.com/xiongian/connect-four',
    tags: ['java', 'awt swing'],
    borderColor: 'var(--g-border)',
  },
  {
    id: 'project-4',
    title: 'PIPE FRAME KART',
    description: 'rebuilding my favourite mario kart',
    fullDescription: '',
    image: kartImage,
    githubUrl: 'https://github.com/xiongian/marioKart',
    tags: ['3d-printing', 'solidworks'],
    borderColor: 'var(--g-border)',
  },
  {
    id: 'project-2',
    title: 'ROOF TILT',
    description: '6-bar linkage to optimize solar EV charging',
    fullDescription: '',
    image: rooftiltImage, 
    githubUrl: '',
    tags: ['solidworks', 'ansys fea', 'nodal diagrams'],
    borderColor: 'var(--g-border)',
  },
  {
    id: 'project-3',
    title: 'CHASSIS JIG',
    description: 'custom car chassis welding jig',
    fullDescription: '',
    image: jigImage,
    githubUrl: '',
    tags: ['solidworks', 'laser-cutting', 'dfm', 'dfa'],
    borderColor: 'var(--g-border)',
  },
  {
    id: 'project-6',
    title: 'SPRINTR',
    description: 'low-cost sprint timing system',
    fullDescription: '',
    image: sprintrImage,
    githubUrl: '',
    tags: ['esp32', 'radio communication', '3d-printing'],
    borderColor: 'var(--g-border)', // Green
  }
];
