"use client";

import ProjectCard from "../../components/ProjectCard";

export default function Projects() {

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
          Projects
        </h1>

        <p className="text-xl">
          Here are some of my recent projects and work.
        </p>
      </section>

      {/* PROJECTS */}
      <section>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((project, i) => (
            <ProjectCard key={i} {...project}/>
          ))}

        </div>

      </section>

    </main>
  );
}
