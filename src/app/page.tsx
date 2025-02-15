import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const projects = [
  {
    name: "AI Chatbot",
    description: "An AI-powered chatbot built with Next.js and OpenAI API. Features real-time interactions, API integration, and optimized performance.",
    link: "https://ai-chatbot-eight-sandy-70.vercel.app/",
  },
  {
    name: "Restaurant Landing Page",
    description: "A responsive restaurant-themed landing page built using Vite, React.js, and Tailwind CSS. Showcases modern UI/UX practices.",
    link: "https://gericht-restaurant-website-chi.vercel.app/",
  },
  {
    name: "Blog Website",
    description: "A full-stack blog platform with user authentication, PostgreSQL database, and secure image uploads using Multer.",
    link: "https://github.com/FroreVale/Blog-Website",
  },
];


export default function Home() {
  return (
    <>
      <header>
        <div className="w-full p-6 bg-[#fafafa] flex justify-center">
          <nav className="flex-1 max-w-[800px] flex justify-between items-center gap-8">
            <span className="font-bold text-3xl">Daniel</span>
            <div className="flex gap-8 text-lg">
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="w-full flex justify-center mt-24 px-6">
          <div className="flex flex-col items-center gap-8 max-w-xl">
            <h1 className="bg-yellow-300 text-white text-center text-5xl font-bold p-3 w-fit rounded-lg">
              hi, i&apos;m daniel
            </h1>
            <p className="text-center text-xl text-gray-800">
              I&apos;m a passionate software developer skilled in React, Next.js, and
              Tailwind CSS. I have experience building AI-powered chatbots,
              responsive landing pages, and secure full-stack applications.
              Currently, I&apos;m looking for internship opportunities to apply my
              skills and contribute to impactful projects.
            </p>
            <span className="text-3xl">:)</span>
            <div className="flex space-x-8">
              <a
                href="https://github.com/FroreVale"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub
                  size={36}
                  className="hover:text-gray-500 transition-colors"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/frorevale/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin
                  size={36}
                  className="hover:text-blue-500 transition-colors"
                />
              </a>
              <a href="mailto:your.email@example.com">
                <FiMail
                  size={36}
                  className="hover:text-red-500 transition-colors"
                />
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full flex justify-center mt-24 p-6">
          <div className="max-w-[1000px] w-full">
            <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 border rounded-lg shadow-lg hover:shadow-xl transition bg-white w-[320px] h-[320px] flex flex-col justify-center items-center text-center mx-auto"
                >
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 text-md mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-[#fafafa] mt-16 p-6 flex justify-center items-center gap-4">
  <p className="text-gray-700 text-md">Daniel Raj</p>
  <span>|</span>
  <a href="mailto:danielraj1159@gmail.com" className="text-blue-500 hover:underline text-md">
    Let’s chat
  </a>
</footer>
    </>
  );
}
