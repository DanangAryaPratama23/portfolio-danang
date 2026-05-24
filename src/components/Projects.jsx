import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projectsData = [
  {
    title: 'ReadHub',
    description:
      'Website ini adalah sistem manajemen peminjaman buku sederhana. Fungsinya mencatat data anggota, koleksi buku, serta transaksi peminjaman dan pengembalian. Pada dashboard dapat dilihat ringkasan yang ada beserta grafiknya. Pada menu buku terdapat detail tentang buku beserta status ketersediaan apakah masih bisa dipinjam atau sedang dipinjam.',

    image:
      'src/assets/readhub.png',

    tech: ['Laravel', 'Bootstrap', 'MySQL'],


    demo: 'https://drive.google.com/file/d/1sB5m_f5Zv_nn1dOzyho0cpqVgwLRBveo/view',
  },

  {
    title: 'Historia',
    description:
      'Aplikasi Android kuis sejarah dengan sistem kategori negara dan periode sejarah. Terdapat juga fitur tambahan berupa notifikasi hari bersejarah',

    image:
      'src/assets/Historia.png',

    tech: ['Kotlin', 'SQLite', 'Android Studio'],

    github: 'https://github.com/',

    demo: 'https://drive.google.com/drive/folders/1PhMM316jFH8c_KUipWFazDpaqnbiklSm?usp=drive_link',
  },

  {
    title: 'BumiBaik',
    description:
      'BumiBaik memiliki tujuan mulia untuk membantu individu menghitung jejak karbon mereka melalui aplikasi BumiBaik dengan penjumlahan variabel biaya bensin, biaya gas LPG, dan biaya listrik bulanan individu, terlibat dalam program penanaman pohon, dan dengan sukarela mengadopsi pohon-pohon tersebut untuk menyerap emisi karbon, memastikan keseimbangan antara karbon yang dihasilkan dan diserap (karbon netral). Tidak hanya itu, sebagai perusahaan hijau (green company), BumiBaik berbagi informasi dan berusaha mendidik masyarakat tentang dampak emisi karbon pada lingkungan dan mengangkat kesadaran masyarakat terhadap masalah perubahan iklim yang dapat mengancam keberlangsungan hidup makhluk hidup.',

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