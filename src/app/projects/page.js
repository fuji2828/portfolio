"use client";

import ProjectCard from "../../components/ProjectCard";

export default function Projects() {

  const projects = [
    {
      title: "Campus Navigation Mobile App",
      description: "A mobile application designed to help students, staff, and visitors navigate Concordia University's campuses efficiently. The app was developed for the SOEN 390 Software Engineering course, where we worked in a team of 11 to create a comprehensive navigation solution.",
      points: [
        "Real-time directions across and between campuses",
        "Supports multiple modes of transport, including Concordia's shuttle bus ",
        "Accessibility-aware routing for indoor and outdoor navigation",
        "Google Maps API integration for directions",
        "Points of interest (elevators, washrooms, restaurants)",
        "SonarQube code quality monitoring"
      ],
      tech: "TypeScript • React Native • Expo • Google Maps API • SonarQube",
      image: "/projects/navigation.png",
      images: ["/projects/navigation.png", "/projects/navigation2.png", "/projects/navigation3.png", "/projects/navigation4.png", "/projects/navigation5.png", "/projects/navigation6.png"],
      year: 2026
    },
    {
      title: "AI Music Transcription Tool",
      description: "Sheet-Music-Transcriber is a Python-based tool that extracts the bass stem from MP3 audio files and converts it into quantized MIDI format. This allows users to generate sheet music (PDF or MusicXML) for the bass part of any song. The tool leverages state-of-the-art machine learning and audio analysis libraries for accurate source separation, pitch detection, and note quantization.",
      points: [
        "Extracts and isolates the bass track from any MP3 using Meta's Demucs AI model.",
        "Transcribes the bass stem into a quantized MIDI file using audio cleaning, filtering, and advanced pitch detection (librosa).",
        "Automatic tempo detection, or lets the user specify for accurate sheet music generation.",
        "Exports results in multiple formats: MIDI, printable PDF, and editable MusicXML (MuseScore integration)",
      ],
      tech: "Python • Machine Learning • Audio Signal Processing • Demucs • librosa",
      image: "/projects/sheet-music.png",
      images: ["/projects/sheet-music.png", "/projects/sheet-music-2.png"],
      year: 2026
    },
    {
      title: "Bike Sharing Application",
      description: "Built a full-stack bike sharing web app supporting 50+ users with real-time reservations and rental management. Developed a tier-based incentive system rewarding consistent usage with discounts and benefits, improving reliability and reducing missed reservations. Built operator tools for inventory monitoring and bike rebalancing, with backend tracking to prevent reservation abuse.",
      tech: "Springboot • React • JavaScript • HTML/CSS • Apache Maven",
      image: "/projects/bike.png",
      images: ["/projects/bike.png", "/projects/bike2.png", "/projects/bike3.png"],
      year: 2025
    },
    {
      title: "Peer Assessment Application",
      description: "Designed and implemented a MongoDB database schema capable of handling 1000+ users. Built 50+ custom UI components using React and Tailwind CSS. Improved backend API call response time by 50% with Express.js and Node.js, handling authentication, data management, and peer assessments. Implemented Jest unit tests for components and API integrations, achieving 80% code coverage.",
      tech: "MongoDB • Express • React • TailwindCSS • Node.js • Jest",
      image: "/projects/peer.png",
      images: ["/projects/peer.png", "/projects/peer2.png", "/projects/peer3.png"],
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
