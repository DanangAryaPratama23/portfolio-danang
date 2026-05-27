const educationData = [
  {
    year: '2023-2027',

    school: 'Universitas Bhinneka Nusantara',

    major: 'Informatika',

    description:
      'I have been majoring in Informatics at Ubhinus Malang since 2023. I learn about web development, mobile development, desktop developmwnt, data analyst, machine learning, etc. Alongside academic learning, I also take part in several organization activities.',

    logo:
      'https://ubhinus.ac.id/wp-content/uploads/2025/03/main-logo.png',
  },

  {
    year: '2020 - 2023',

    school: 'SMAN 1 Pagak',

    major: 'IPS',

    description:
      'I have studied at SMAN 1 Pagak majoring in Social. I studied economics, history, sociology, geography and various general subjects.',

    logo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCI1bdjhBYm7QQcXzLBHxLauCl_wKn1Mx1Iw&s',
  },
]

function Education() {
  return (

    <section
      id="education"
      className="py-24 px-6 bg-slate-950 border-t border-slate-900"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            Education
          </p>

        </div>

        {/* Timeline */}
        <div className="relative border-l border-slate-800 ml-4">

          {educationData.map((item, index) => (

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
                      alt={item.school}
                      className="w-full h-full object-contain"
                    />

                  </div>

                  {/* Content */}
                  <div>

                    <p className="text-blue-400 font-semibold">
                      {item.year}
                    </p>

                    <h3 className="text-2xl font-bold mt-2">
                      {item.school}
                    </h3>

                    <h4 className="text-slate-300 mt-2">
                      {item.major}
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

export default Education