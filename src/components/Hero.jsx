function Hero() {
return (
<section
id="home"
className="min-h-screen flex items-center justify-center px-6"
>
<div className="max-w-4xl text-center">
<p className="text-blue-400 font-semibold mb-4">
Hello World
</p>
<h1 className="text-5xl md:text-7xl font-bold leading-tight">
Saya
<span className="text-blue-400"> Danang Arya Pratama</span>
</h1>
<p className="mt-6 text-slate-400 text-lg md:text-xl leadingrelaxed">
Backend Developer, UI/UX Enthusiast, dan Web Developer
yang fokus membuat aplikasi modern dan responsif.
</p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justifycenter">
<a
href="#projects"
className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-2xl
font-semibold transition"
>
    Lihat Project
</a>
<a
href="#contact"
className="border border-slate-700 hover:border-blue-400 px-8
py-4 rounded-2xl font-semibold transition"
>
Contact Me
</a>
</div>
</div>
</section>
)
}
export default Hero