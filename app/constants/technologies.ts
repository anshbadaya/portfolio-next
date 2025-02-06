// constants/technologies.ts
import { TechItem, PageItem } from '../types/tech'

export const PAGES: PageItem[] = [
  {
    title: 'Projects',
    description: 'From concept to production',
    href: '/projects'
  },
  {
    title: 'My Creative World',
    description: 'Insights on papers, discussions, and future technologies',
    href: '/research'
  },
  {
    title: 'Certifications',
    description: 'A showcase of professional achievements and learning',
    href: '/certifications'
  },
  {
    title: 'About Me',
    description: 'Explore my interests',
    href: '/about'
  },
  {
    title: 'General Blogs',
    description: 'Insights on technology and personal narratives',
    href: '/blog'
  },
  {
    title: "Let's Connect",
    description: "Discuss your next big idea with me!",
    href: '/contact',
    highlight: true
  }
]

export const AI_ML_TECH: TechItem[] = [
  { name: 'TensorFlow', icon: 'TF', bgColor: 'bg-orange-600 text-white', status: 'learning' },
  { name: 'PyTorch', icon: 'PT', bgColor: 'bg-red-600 text-white', status: 'learning' },
  { name: 'Scikit-learn', icon: 'SK', bgColor: 'bg-blue-600 text-white', status: 'intermediate' },
  { name: 'NumPy', icon: 'NP', bgColor: 'bg-yellow-600 text-white', status: 'expert' },
  { name: 'Pandas', icon: 'PD', bgColor: 'bg-purple-600 text-white', status: 'expert' }
]

export const BACKEND_TECH: TechItem[] = [
  { name: 'Python', icon: 'Py', bgColor: 'bg-yellow-600 text-white', status: 'expert' },
  { name: 'Django', icon: 'Dj', bgColor: 'bg-green-700 text-white', status: 'intermediate' },
  { name: 'Node.js', icon: 'N', bgColor: 'bg-green-600 text-white', status: 'expert' },
  { name: 'Express', icon: 'Ex', bgColor: 'bg-gray-600 text-white', status: 'expert' },
  { name: 'MongoDB', icon: 'M', bgColor: 'bg-green-500 text-white', status: 'intermediate' },
  { name: 'PostgreSQL', icon: 'PG', bgColor: 'bg-blue-600 text-white', status: 'learning' }
]

export const DEVOPS_TECH: TechItem[] = [
  { name: 'AWS', icon: 'AWS', bgColor: 'bg-orange-500 text-white', status: 'intermediate' },
  { name: 'Jenkins', icon: 'J', bgColor: 'bg-red-500 text-white', status: 'learning' },
  { name: 'Docker', icon: 'D', bgColor: 'bg-blue-500 text-white', status: 'intermediate' },
  { name: 'Ubuntu', icon: 'U', bgColor: 'bg-orange-600 text-white', status: 'expert' },
  { name: 'Git', icon: 'G', bgColor: 'bg-red-600 text-white', status: 'expert' }
]

export const FRONTEND_TECH: TechItem[] = [
  { name: 'React', icon: '⚛️', bgColor: 'bg-[#087ea4] text-white', status: 'expert' },
  { name: 'Next.js', icon: 'N', bgColor: 'bg-black text-white', status: 'expert' },
  { name: 'TypeScript', icon: 'TS', bgColor: 'bg-blue-600 text-white', status: 'intermediate' },
  { name: 'Tailwind', icon: '🌊', bgColor: 'bg-[#38bdf8] text-white', status: 'expert' },
  { name: 'Material UI', icon: 'M', bgColor: 'bg-blue-600 text-white', status: 'intermediate' },
  { name: 'Redux', icon: 'R', bgColor: 'bg-purple-600 text-white', status: 'learning' }
]