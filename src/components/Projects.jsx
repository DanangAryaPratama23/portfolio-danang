import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import readhub from '../assets/Readhub.png'
import historia from '../assets/Historia.png'
const projectsData = [
  {
    title: 'ReadHub',
    description:
      'This website is a simple book lending management system. Its function is to record member data, book collections, as well as loan and return transactions along with fines for late returns.',

    image:
      readhub,

    tech: ['Laravel', 'Bootstrap', 'MySQL'],


    demo: 'https://drive.google.com/file/d/1sB5m_f5Zv_nn1dOzyho0cpqVgwLRBveo/view',
  },

  {
    title: 'historia',
    description:
      'History quiz Android app with a system of country categories and historical periods. There is also an additional feature in the form of historic day notifications',

    image:
      historia,

    tech: ['Kotlin', 'SQLite', 'Android Studio'],

    github: 'https://github.com/',

    demo: 'https://drive.google.com/drive/folders/1PhMM316jFH8c_KUipWFazDpaqnbiklSm?usp=drive_link',
  },

  {
    title: 'BumiBaik',
    description:
      'BumiBaik has the noble goal of helping individuals calculate their carbon footprint through the BumiBaik application by summing up individual variables of petrol costs, LPG gas costs, and monthly electricity costs, engaging in tree planting programs, and voluntarily adopting these trees to absorb carbon emissions, ensuring a balance between carbon produced and absorbed (carbon neutral). Not only that, as a green company, BumiBaik shares information and tries to educate the public about the impact of carbon emissions on the environment and raises public awareness of the problem of climate change which can threaten the survival of living things.',

    image:
      'https://bumibaik.com/landing/images/home/bumibaik.jpg',

    tech: ['Laravel', 'Redis', 'Midtrans'],

    github: 'https://github.com/',

    demo: 'https://bumibaik.com/',
  },
]

function Projects() {
  return (

    <section
      id="projects"
      className="py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            Projects
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projectsData.map((project, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-400 hover:-translate-y-2 transition duration-300"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-3">

                  {project.tech.map((tech, techIndex) => (

                    <span
                      key={techIndex}
                      className="bg-slate-800 px-4 py-2 rounded-xl text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-2xl transition duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {/* Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-2xl transition duration-300"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects