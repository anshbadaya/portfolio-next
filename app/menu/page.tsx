'use client'

import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faDiscord,
  faTwitter,
  faInstagram 
} from '@fortawesome/free-brands-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { useTheme } from '../hooks/useTheme'
import { Sun, Moon } from 'lucide-react'

// Types
interface SocialLink {
  platform: string
  href: string
  icon: IconDefinition
  ariaLabel: string
}

// Constants
const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Discord',
    href: '#',
    icon: faDiscord,
    ariaLabel: 'Join our Discord community'
  },
  {
    platform: 'Twitter',
    href: '#',
    icon: faTwitter,
    ariaLabel: 'Follow us on Twitter'
  },
  {
    platform: 'Instagram',
    href: '#',
    icon: faInstagram,
    ariaLabel: 'Follow us on Instagram'
  }
]

// Components
const BackgroundEffect: FC = () => (
  <div className="absolute inset-0" aria-hidden="true">
    <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob dark:opacity-20"></div>
    <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000 dark:opacity-20"></div>
    <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000 dark:opacity-20"></div>
    <div className="absolute -bottom-8 left-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob dark:opacity-20"></div>
    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000 dark:opacity-20"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 backdrop-blur-3xl dark:from-emerald-500/5 dark:to-emerald-500/5"></div>
  </div>
)

const Navigation: FC = () => {
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="flex justify-between items-center max-w-5xl mx-auto w-full" role="navigation">
      <Link 
        href="/" 
        className="text-2xl font-bold text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
        aria-label="Go to homepage"
      >
        A
      </Link>
      <div className="flex gap-4">
        <button 
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button 
          onClick={() => router.push('/')}
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>
    </nav>
  )
}

const SocialLinks: FC = () => (
  <div className="flex justify-center gap-6">
    {SOCIAL_LINKS.map((link) => (
      <a
        key={link.platform}
        href={link.href}
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
        aria-label={link.ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon 
          icon={link.icon}
          className="w-6 h-6"
        />
      </a>
    ))}
  </div>
)

// Main Component
const MenuPage: FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-[#051614] p-8 font-sans flex flex-col overflow-hidden transition-colors duration-200">
      <BackgroundEffect />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full">
          <SocialLinks />
        </main>
      </div>
    </div>
  )
}

export default MenuPage
