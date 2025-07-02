'use client'

import { FC } from 'react'
import Link from 'next/link'
import { Sun, Moon, Menu } from 'lucide-react'
import { useTheme } from './hooks/useTheme'
import { 
  PAGES, 
  AI_ML_TECH, 
  BACKEND_TECH, 
  DEVOPS_TECH, 
  FRONTEND_TECH 
} from './constants/technologies'
import { TechItem } from './types/tech'

interface TechSectionProps {
  title: string
  items: TechItem[]
}

const STATUS_COLORS = {
  expert: 'bg-green-500',
  intermediate: 'bg-yellow-500',
  learning: 'bg-blue-500'
} as const

const Navigation: FC = () => {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <nav className="flex justify-between items-center mb-8 sm:mb-12 max-w-5xl mx-auto">
      <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
        AB
      </Link>
      <div className="flex gap-4 items-center">
        <button 
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <Link 
          href="/menu" 
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </Link>
      </div>
    </nav>
  )
}

const HeroSection: FC = () => (
  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-0 mb-12 sm:mb-20">
    <div className="text-center sm:text-left">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-2">
        Ansh <span className="text-emerald-600 dark:text-emerald-400">Badaya</span>
      </h1>
      <h2 className="text-xl sm:text-2xl text-gray-900 dark:text-white mb-4">Software Engineer</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-xl">
        Working at ActiveBuildings, where we revolutionize IoT-based air quality monitoring for
        <span className="text-emerald-600 dark:text-emerald-400">60+ global enterprises</span>, including
        <ExternalLink href="https://www.activebuildings.io/for-communities" text=" Balvi Fund (Ethereum)" />
        <ExternalLink href="https://www.activebuildings.io/for-businesses" text=" Reliance Industries" />, and
        <ExternalLink href="https://www.activebuildings.io/for-communities" text=" Indian Government Bodies" />. 
        Now expanding my expertise into AI solutions and building applications as a hobby.
      </p>
    </div>
    <div className="text-4xl sm:text-5xl order-first sm:order-last" role="img" aria-label="Developer emoji">👨‍💻</div>
  </div>
)

const ExternalLink: FC<{ href: string; text: string }> = ({ href, text }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-emerald-600 dark:text-emerald-400 hover:underline"
  >
    {text}
  </a>
)

const PagesSection: FC = () => (
  <div className="mb-12 sm:mb-16">
    <h3 className="text-gray-500 uppercase text-sm tracking-wider mb-4 text-center sm:text-left">CONNECT</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {PAGES.map((page) => (
        <Link 
          href={page.href}
          key={page.title}
          className="bg-gray-100 dark:bg-[#0a1f1e] p-6 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-[#0c2322] transition-colors"
        >
          <h4 className="text-gray-900 dark:text-white text-lg mb-2">{page.title}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{page.description}</p>
        </Link>
      ))}
    </div>
  </div>
)

const TechSection: FC<TechSectionProps> = ({ title, items }) => (
  <div className="mb-8">
    <h4 className="text-gray-600 dark:text-gray-400 mb-4">{title}</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((tech) => (
        <div 
          key={tech.name} 
          className="bg-gray-100 dark:bg-[#0a1f1e] p-4 rounded-lg flex items-center gap-3 hover:bg-gray-200 dark:hover:bg-[#0c2322] transition-colors relative"
        >
          <div className={`${tech.bgColor} w-6 h-6 flex items-center justify-center rounded text-sm font-medium`}>
            {tech.icon}
          </div>
          <span className="text-gray-900 dark:text-white">{tech.name}</span>
          {tech.status && (
            <div 
              className={`absolute top-2 right-2 w-2 h-2 rounded-full ${STATUS_COLORS[tech.status]}`}
              title={`${tech.status.charAt(0).toUpperCase() + tech.status.slice(1)} Level`}
            />
          )}
        </div>
      ))}
    </div>
  </div>
)

const TechnologyLegend: FC = () => (
  <div className="flex gap-6 mb-6 justify-center sm:justify-start text-sm text-gray-600 dark:text-gray-400">
    {Object.entries(STATUS_COLORS).map(([status, color]) => (
      <div key={status} className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${color}`} />
        <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
      </div>
    ))}
  </div>
)

const Footer: FC = () => (
  <footer className="text-gray-500 text-sm mt-12 sm:mt-20 pb-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0">
    <div>© {new Date().getFullYear()} Ansh Badaya</div>
    <div className="text-center sm:text-left">
      Built with{' '}
      <span className="text-emerald-600 dark:text-emerald-400">Next.js</span> &{' '}
      <span className="text-emerald-600 dark:text-emerald-400">Tailwind CSS</span>
    </div>
  </footer>
)

const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#051614] p-4 sm:p-8 font-sans transition-colors duration-200">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-2 sm:px-0">
        <HeroSection />
        <PagesSection />
        
        <div className="mb-12 sm:mb-16">
          <h3 className="text-gray-500 uppercase text-sm tracking-wider mb-4 text-center sm:text-left">
            TECHNOLOGIES
          </h3>
          <TechnologyLegend />
          <TechSection title="AI & Machine Learning" items={AI_ML_TECH} />
          <TechSection title="Backend Development" items={BACKEND_TECH} />
          <TechSection title="DevOps & Infrastructure" items={DEVOPS_TECH} />
          <TechSection title="Frontend & UI" items={FRONTEND_TECH} />
        </div>
        
        <Footer />
      </main>
    </div>
  )
}

export default HomePage
