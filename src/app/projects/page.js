"use client";

import ProjectCard from "../../components/ProjectCard";

export default function Projects() {

  const projects = [
    {
      title: "Campus Navigation Mobile App",
      description: "Designed and implemented an interactive mobile navigation system with accessibility-focused UI mockups. Architected 10+ reusable React components with responsive layouts and gesture handling. Engineered SVG overlay routing system using react-native-svg for optimized indoor/outdoor navigation visualization with 80% reduced rendering complexity. Maintained code quality standards using SonarQube and fixed performance issues.",
      tech: "TypeScript • React Native • Expo • SVG",
      image: "/projects/navigation.png",
      images: ["/projects/navigation.png", "/projects/navigation-2.png", "/projects/navigation-3.png"],
      year: 2026
    },
    {
      title: "AI Music Transcription Tool",
      description: "Built an end-to-end Python pipeline in 24 hours that converts MP3/WAV audio into sheet music, from stem separation to PDF export. Integrated ML-based source separation (Demucs) with audio analysis (librosa) to transcribe music without original stems. Implemented beat-aligned rhythm quantization and automated MIDI, MusicXML, and PDF generation via MuseScore CLI.",
      tech: "Python • Machine Learning • Audio Signal Processing • Demucs • librosa",
      image: "/projects/sheet-music.png",
      images: ["/projects/sheet-music.png", "/projects/sheet-music-2.png"],
      year: 2026
    },
    {
      title: "Bike Sharing Application",
      description: "Built a full-stack bike sharing web app supporting 50+ users with real-time reservations and rental management. Developed a tier-based incentive system rewarding consistent usage with discounts and benefits, improving reliability and reducing missed reservations. Built operator tools for inventory monitoring and bike rebalancing, with backend tracking to prevent reservation abuse.",
      tech: "Springboot • React • JavaScript • HTML/CSS • Apache Maven",
      image: "/projects/bike-sharing.png",
      images: ["/projects/bike-sharing.png", "/projects/bike-sharing-2.png", "/projects/bike-sharing-3.png"],
      year: 2025
    },
    {
      title: "Peer Assessment Application",
      description: "Designed and implemented a MongoDB database schema capable of handling 1000+ users. Built 50+ custom UI components using React and Tailwind CSS. Improved backend API call response time by 50% with Express.js and Node.js, handling authentication, data management, and peer assessments. Implemented Jest unit tests for components and API integrations, achieving 80% code coverage.",
      tech: "MongoDB • Express • React • TailwindCSS • Node.js • Jest",
      image: "/projects/peer-assessment.png",
      images: ["/projects/peer-assessment.png", "/projects/peer-assessment-2.png", "/projects/peer-assessment-3.png"],
      year: 2024
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

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project, i) => (
            <ProjectCard key={i} {...project}/>
          ))}

        </div>

      </section>

    </main>
  );
}
