"use client";

import ProjectCard from "../../components/ProjectCard";

export default function Home() {

  const projects = [
    {
      title: "Campus Navigation App",
      description: "Indoor navigation for Concordia buildings",
      tech: "React Native • TypeScript • Tailwind CSS",
      image: "/projects/navigation.png"
    },
    {
      title: "Sheet Music Transcriber",
      description: "Turn MP3 files into sheet music",
      tech: "Python • HTML • CSS",
      image: "/projects/sheet-music.png"
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">

      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-4">
          Jeremy Fung
        </h1>

        <p className="text-xl text-gray-600">
          Software Engineering Student at Concordia University. 
        </p>

        <div className="mt-6 flex gap-4">
          <a href="https://github.com/fuji2828" className="bg-black text-white px-4 py-2 rounded-lg">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/fungjeremy10/" className="bg-black text-white px-4 py-2 rounded-lg">
            LinkedIn
          </a>

          <a href="/Jeremy_Fung_CV.pdf" className="border px-4 py-2 rounded-lg">
            Resume
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section>

        <h2 className="text-3xl font-semibold mb-8">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project, i) => (
            <ProjectCard key={i} {...project}/>
          ))}

        </div>

      </section>

    </main>
  );
}