const experienceData = [
  {
    year: '2025 - ',

    company: 'Tagame Foundation',

    position: 'Pengajar',

    description:
      'Teaching Programming and UI/UX design at SMA PJ Global School',

    logo:
      'https://tagame.id/logos/logo-dark.png',
  },
  {
    year: '2026 - ',

    company: 'Pusat Bisnis Ubhinus',

    position: 'Backend Developer Intern',

    description:
      'Currently I am an intern at the Ubhinus Business Center as a back end developer and working on a ticket management website.',

    logo:
      'https://ubhinus.ac.id/wp-content/uploads/2025/03/main-logo.png',
  },

  {
    year: '2025 - 2026',

    company: 'PT Bingkai Karya Nusantara',

    position: 'Backend Developer Intern',

    description:
      'My team and I worked on rebuilding the BumiBaik application and website, a carbon footprint calculation and tree planting platform. For my job desk, I created a database and API. The framework that I use myself is Laravel 12 and a PostgreSQL database. Apart from the main job desk, I also participated several times with the creative team to create company content.',

    logo:
      'https://bingkaikarya.com/wp-content/uploads/2022/07/Bingkai-Karya-Logo-1-1-1024x1024.png',
  },

  
]

function Experience() {
  return (

    <section
      id="experience"
      className="py-24 px-6 bg-slate-950 border-t border-slate-900"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            Experience
          </p>

        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4">

          {experienceData.map((item, index) => (

            <div
              key={index}
              className="mb-12 ml-8"
            >

              {/* Dot */}
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 mt-2"></div>

              {/* Card */}
              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-8 hover:border-blue-400 transition duration-300">

                <div className="flex flex-col md:flex-row gap-6 items-start">

                  {/* Logo */}
                  <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center p-3 shrink-0">

                    <img
                      src={item.logo}
                      alt={item.company}
                      className="w-full h-full object-contain"
                    />

                  </div>

                  {/* Content */}
                  <div>

                    <p className="text-blue-400 font-semibold">
                      {item.year}
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                      {item.company}
                    </h3>

                    <h4 className="text-slate-300 mt-2">
                      {item.position}
                    </h4>

                    <p className="text-slate-400 mt-4 leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Experience