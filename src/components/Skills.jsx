import { motion } from 'framer-motion'
const skillsData = [
  {
    category: 'Front-End',

    skills: [
      {
        name: 'React',
        percentage: '90%',
        width: '90%',
      },

      {
        name: 'Tailwind CSS',
        percentage: '88%',
        width: '88%',
      },

      {
        name: 'Bootstrap',
        percentage: '90%',
        width: '90%',
      },
    ],
  },

  {
    category: 'Back-End',

    skills: [
      {
        name: 'Laravel',
        percentage: '95%',
        width: '95%',
      },

      {
        name: 'ASP.NET',
        percentage: '80%',
        width: '80%',
      },

      {
        name: 'Go',
        percentage: '70%',
        width: '70%',
      },
    ],
  },
{
    category: 'Mobile',

    skills: [
      {
        name: 'React Native',
        percentage: '85%',
        width: '85%',
      },

      {
        name: 'Kotlin',
        percentage: '85%',
        width: '85%',
      },

      {
        name: 'Flutter',
        percentage: '80%',
        width: '80%',
      },
    ],
  },
  {
    category: 'Database',

    skills: [
      {
        name: 'MySQL',
        percentage: '88%',
        width: '88%',
      },

      {
        name: 'PostgreSQL',
        percentage: '90%',
        width: '90%',
      },
    ],
  },

  {
    category: 'UI/UX',

    skills: [
      {
        name: 'Figma',
        percentage: '80%',
        width: '80%',
      },
    ],
  },

  {
    category: 'Editing',

    skills: [
      {
        name: 'Canva',
        percentage: '90%',
        width: '90%',
      },

      {
        name: 'Adobe Photoshop',
        percentage: '75%',
        width: '75%',
      },

      {
        name: 'Capcut',
        percentage: '90%',
        width: '90%',
      },
    ],
  },
  {
    category: 'Others',

    skills: [
      {
        name: 'English',
        percentage: '95%',
        width: '95%',
      },

      {
        name: 'Content Creation',
        percentage: '80%',
        width: '80%',
      },

      {
        name: 'Cooking',
        percentage: '85%',
        width: '85%',
      },
    ],
  },
]

function Skills() {
  return (

    <section
      id="skills"
      className="py-24 px-6 bg-slate-950 border-t border-slate-900"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            Skills
          </p>

        </div>

        {/* Skills Category */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillsData.map((category, index) => (

            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-8 hover:border-blue-400 transition duration-300"
            >

              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-8 text-blue-400">
                {category.category}
              </h3>

              {/* Skill Items */}
              <div className="space-y-6">

                {category.skills.map((skill, skillIndex) => (

                  <div key={skillIndex}>

                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-3">

                      <p className="text-slate-200 font-medium">
                        {skill.name}
                      </p>

                      <span className="text-blue-400 font-semibold">
                        {skill.percentage}
                      </span>

                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.width }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        ></motion.div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills