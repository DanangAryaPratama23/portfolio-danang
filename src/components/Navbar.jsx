import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {

  const [activeSection, setActiveSection] = useState('home')

  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    'home',
    'education',
    'skills',
    'experience',
    'projects',
  ]

  useEffect(() => {

    const handleScroll = () => {

      const sections = menuItems.map((item) =>
        document.getElementById(item)
      )

      sections.forEach((section) => {

        if (!section) return

        const top = section.offsetTop - 120
        const bottom = top + section.offsetHeight

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActiveSection(section.id)
        }

      })
    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener('scroll', handleScroll)

  }, [])

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-900">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-blue-400"
        >
          Dann
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">

          {menuItems.map((item) => (

            <a
              key={item}
              href={`#${item}`}
              className={`relative capitalize text-lg transition duration-300

              ${
                activeSection === item
                  ? 'text-blue-400'
                  : 'text-slate-300 hover:text-white'
              }
              `}
            >

              {item}

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-blue-400 transition-all duration-300

                ${
                  activeSection === item
                    ? 'w-full'
                    : 'w-0'
                }
                `}
              ></span>

            </a>

          ))}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
        >

          {
            menuOpen
              ? <FaTimes />
              : <FaBars />
          }

        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300

        ${
          menuOpen
            ? 'max-h-96 border-t border-slate-900'
            : 'max-h-0'
        }
        `}
      >

        <div className="px-6 py-6 flex flex-col gap-6 bg-slate-950/95 backdrop-blur-xl">

          {menuItems.map((item) => (

            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className={`capitalize text-lg transition duration-300

              ${
                activeSection === item
                  ? 'text-blue-400'
                  : 'text-slate-300'
              }
              `}
            >

              {item}

            </a>

          ))}

        </div>

      </div>

    </nav>
  )
}

export default Navbar