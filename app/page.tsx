'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Sun, Moon, Menu } from 'lucide-react'

export default function Home() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const pages = [
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
  ];

  const aiMlTech = [
    { name: 'TensorFlow', icon: 'TF', bgColor: 'bg-orange-600 text-white', status: 'learning' },
    { name: 'PyTorch', icon: 'PT', bgColor: 'bg-red-600 text-white', status: 'learning' },
    { name: 'Scikit-learn', icon: 'SK', bgColor: 'bg-blue-600 text-white', status: 'intermediate' },
    { name: 'NumPy', icon: 'NP', bgColor: 'bg-yellow-600 text-white', status: 'expert' },
    { name: 'Pandas', icon: 'PD', bgColor: 'bg-purple-600 text-white', status: 'expert' },
  ]

  const backendTech = [
    { name: 'Python', icon: 'Py', bgColor: 'bg-yellow-600 text-white', status: 'expert' },
    { name: 'Django', icon: 'Dj', bgColor: 'bg-green-700 text-white', status: 'intermediate' },
    { name: 'Node.js', icon: 'N', bgColor: 'bg-green-600 text-white', status: 'expert' },
    { name: 'Express', icon: 'Ex', bgColor: 'bg-gray-600 text-white', status: 'expert' },
    { name: 'MongoDB', icon: 'M', bgColor: 'bg-green-500 text-white', status: 'intermediate' },
    { name: 'PostgreSQL', icon: 'PG', bgColor: 'bg-blue-600 text-white', status: 'learning' }
  ]

  const devopsTech = [
    { name: 'AWS', icon: 'AWS', bgColor: 'bg-orange-500 text-white', status: 'intermediate' },
    { name: 'Jenkins', icon: 'J', bgColor: 'bg-red-500 text-white', status: 'learning' },
    { name: 'Docker', icon: 'D', bgColor: 'bg-blue-500 text-white', status: 'intermediate' },
    { name: 'Ubuntu', icon: 'U', bgColor: 'bg-orange-600 text-white', status: 'expert' },
    { name: 'Git', icon: 'G', bgColor: 'bg-red-600 text-white', status: 'expert' },
  ]

  const frontendTech = [
    { name: 'React', icon: '⚛️', bgColor: 'bg-[#087ea4] text-white', status: 'expert' },
    { name: 'Next.js', icon: 'N', bgColor: 'bg-black text-white', status: 'expert' },
    { name: 'TypeScript', icon: 'TS', bgColor: 'bg-blue-600 text-white', status: 'intermediate' },
    { name: 'Tailwind', icon: '🌊', bgColor: 'bg-[#38bdf8] text-white', status: 'expert' },
    { name: 'Material UI', icon: 'M', bgColor: 'bg-blue-600 text-white', status: 'intermediate' },
    { name: 'Redux', icon: 'R', bgColor: 'bg-purple-600 text-white', status: 'learning' }
  ]

  const TechSection = ({ title, items }: { title: string; items: typeof backendTech }) => (
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
                className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                  tech.status === 'expert' ? 'bg-green-500' :
                  tech.status === 'intermediate' ? 'bg-yellow-500' :
                  'bg-blue-500'
                }`}
                title={`${tech.status.charAt(0).toUpperCase() + tech.status.slice(1)} Level`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#051614] p-4 sm:p-8 font-sans transition-colors duration-200">
      {/* Navigation */}
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
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <Link 
            href="/menu" 
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1"
          >
            <Menu className="w-5 h-5" />
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-2 sm:px-0">
        {/* Hero Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-0 mb-12 sm:mb-20">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-2">
              Ansh <span className="text-emerald-600 dark:text-emerald-400">Badaya</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-900 dark:text-white mb-4">Software Engineer</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Leading software innovation at ActiveBuildings, where we revolutionize IoT-based air quality monitoring for
              <span className="text-emerald-600 dark:text-emerald-400">60+ global enterprises</span>, including
              <a href="https://www.activebuildings.io/for-communities" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline"> Balvi Fund (Ethereum)</a>
              <a href="https://www.activebuildings.io/for-businesses" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline"> Reliance Industries</a>, and
              <a href="https://www.activebuildings.io/for-communities" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline"> Indian Government Bodies</a>. Now expanding my expertise into AI solutions to drive next-generation business transformation.
            </p>
          </div>
          <div className="text-4xl sm:text-5xl order-first sm:order-last">👨‍💻</div>
        </div>

        {/* Pages Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-gray-500 uppercase text-sm tracking-wider mb-4 text-center sm:text-left">CONNECT</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pages.map((page) => (
              <a 
                href={page.href}
                key={page.title} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-[#0a1f1e] p-6 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-[#0c2322] transition-colors"
              >
                <h4 className="text-gray-900 dark:text-white text-lg mb-2">{page.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{page.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-gray-500 uppercase text-sm tracking-wider mb-4 text-center sm:text-left">TECHNOLOGIES</h3>
          
          {/* Legend */}
          <div className="flex gap-6 mb-6 justify-center sm:justify-start text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span>Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>Learning</span>
            </div>
          </div>
          
          {/* AI/ML */}
          <TechSection title="AI & Machine Learning" items={aiMlTech} />
          
          {/* Backend */}
          <TechSection title="Backend Development" items={backendTech} />
          
          {/* DevOps */}
          <TechSection title="DevOps & Infrastructure" items={devopsTech} />
          
          {/* Frontend */}
          <TechSection title="Frontend & UI" items={frontendTech} />
        </div>

        {/* Footer */}
        <footer className="text-gray-500 text-sm mt-12 sm:mt-20 pb-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0">
          <div>© 2024 Ansh Badaya</div>
          <div className="text-center sm:text-left">
            Built with{' '}
            <span className="text-emerald-600 dark:text-emerald-400">Next.js</span> &{' '}
            <span className="text-emerald-600 dark:text-emerald-400">Tailwind CSS</span>
          </div>
        </footer>
      </main>
    </div>
  )
}