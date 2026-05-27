import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'
import profile from '../assets/profile.png'
function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#020617] text-white flex items-center overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

              Danang

              <span className="block text-blue-400 mt-2">
                Arya Pratama
              </span>

            </h1>

            {/* Subtitle */}
            <h2 className="mt-6 text-lg md:text-2xl font-semibold text-slate-200">
              Student • Web Developer • Instructor
            </h2>

            {/* Description */}
            <p className="mt-8 text-slate-400 text-base md:text-lg leading-8 max-w-2xl mx-auto lg:mx-0">
              I am an active 6th-semester Informatics  student at Universitas Bhineka Nusantara Malang. I have strong problem-solving  skills, with the ability to analyze issues 
systematically and find efficient solutions.  I enjoy learning new things, am highly adaptable, and can work effectively both independently and as part of a team.
            </p>

            <p className="mt-5 text-slate-400 text-base md:text-lg leading-8 max-w-2xl mx-auto lg:mx-0">
              
Basically my background is IT, but I also  have various interests such as sports, culinary, history, and digital content
            </p>

            {/* Social Media */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">

              {/* Instagram */}
              <a
                href="https://instagram.com/danang.arya.pratama"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-slate-700
                hover:border-pink-500 transition duration-300
                flex items-center justify-center
                hover:-translate-y-1"
              >
                <FaInstagram size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/danang-arya-pratama-38839a37a"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-slate-700
                hover:border-blue-500 transition duration-300
                flex items-center justify-center
                hover:-translate-y-1"
              >
                <FaLinkedin size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:danang.pratama.132@gmail.com"
                className="w-12 h-12 rounded-xl border border-slate-700
                hover:border-cyan-400 transition duration-300
                flex items-center justify-center
                hover:-translate-y-1"
              >
                <FaEnvelope size={20} />
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">

            <div className="relative">

              {/* Soft Glow */}
              <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full scale-110"></div>

              {/* Image Container */}
              <div
                className="relative
                w-[260px] h-[260px]
                md:w-[340px] md:h-[340px]
                lg:w-[430px] lg:h-[430px]
                flex items-center justify-center"
              >

                {/* Animated Border */}
                <div
                  className="absolute inset-0 rounded-full animate-spin-slow
                  bg-[conic-gradient(#38bdf8_0deg,#38bdf8_60deg,transparent_60deg,transparent_150deg,#38bdf8_150deg,#38bdf8_220deg,transparent_220deg)]"
                ></div>

                {/* Inner Background */}
                <div className="absolute inset-[6px] rounded-full bg-[#020617]"></div>

                {/* Static Border */}
                <div className="absolute inset-[12px] rounded-full border-[5px] border-slate-800"></div>

                {/* Image */}
                <img
                  src={profile}
                  alt="profile"
                  className="relative z-10
                  w-[225px] h-[225px]
                  md:w-[300px] md:h-[300px]
                  lg:w-[385px] lg:h-[385px]
                  rounded-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes spinSlow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .animate-spin-slow {
            animation: spinSlow 7s linear infinite;
          }
        `}
      </style>

    </section>
  )
}

export default Home