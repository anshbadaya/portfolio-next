'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faDiscord,
  faTwitter,
  faInstagram 
} from '@fortawesome/free-brands-svg-icons'

export default function MenuPage() {
  const router = useRouter()

  const menuItems = [
    {
      title: 'Blog',
      description: 'Lees wat ik met de wereld deel',
      href: '/blog'
    },
    {
      title: 'Portfolio',
      description: 'Projecten, ervaringen & kennis',
      href: '/portfolio'
    },
    {
      title: 'Spotify playlist',
      description: 'Mijn brandstof om te werken',
      href: '/spotify'
    },
    {
      title: "Let's talk",
      description: 'Open voor uitdagingen!',
      href: '/contact'
    }
  ]

  const socialLinks = [
    {
      platform: 'Discord',
      href: '#',
      icon: faDiscord
    },
    {
      platform: 'Twitter',
      href: '#',
      icon: faTwitter
    },
    {
      platform: 'Instagram',
      href: '#',
      icon: faInstagram
    }
  ]

  return (
    <div className="relative min-h-screen bg-[#051614] p-8 font-sans flex flex-col overflow-hidden">
      {/* Enhanced Blur Effect Background */}
      <div className="absolute inset-0">
        {/* Larger, more prominent blobs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
        
        {/* Additional ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 backdrop-blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="flex justify-between items-center max-w-5xl mx-auto w-full">
          <Link href="/" className="text-2xl font-bold text-white">
            A
          </Link>
          <div className="flex gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              ☀️
            </button>
            <button 
              onClick={() => router.push('/')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </nav>

        <main className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full">
          {/* Menu Items */}
          <div className="grid grid-cols-2 gap-4 mb-16">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-[#0a1f1e]/60 backdrop-blur-xl p-6 rounded-lg cursor-pointer hover:bg-[#0c2322]/80 transition-colors"
              >
                <h4 className="text-white text-lg mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.platform}
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
        </main>
      </div>
    </div>
  )
}