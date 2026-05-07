"use client";

import Skills from "@/components/Skills";
import PassionCard from "@/components/PassionCard";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">

      <section className="mb-10 flex flex-col-reverse md:flex-row gap-6 md:gap-12 items-center">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jeremy Fung
          </h1>

          <p className="text-lg md:text-xl">
            Software Engineering Student at Concordia University. 
          </p>

          <div className="mt-6 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
            <a href="https://github.com/fuji2828" className="social-link-btn bg-green-forest text-beige px-4 py-2 rounded-lg flex items-center justify-center" style={{backgroundColor: '#2d6a4f', color: '#f5f1e8'}}>
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/fungjeremy10/" className="social-link-btn bg-green-forest text-beige px-4 py-2 rounded-lg flex items-center justify-center" style={{backgroundColor: '#2d6a4f', color: '#f5f1e8'}}>
              LinkedIn
            </a>

            <a href="/Jeremy_Fung_CV.pdf" className="social-link-btn bg-green-forest text-beige px-4 py-2 rounded-lg flex items-center justify-center" style={{backgroundColor: '#2d6a4f', color: '#f5f1e8'}}>
              Resume
            </a>
          </div>
        </div>

        {/* PROFILE PICTURE */}
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <img 
              src="/profile.jpg" 
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-gray-300"
            />
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">
          About Me
        </h2>
        <div className="bg-white rounded-2xl shadow-md p-8">
          <p className="text-lg leading-relaxed text-gray-900">
            Hey! I'm Jeremy Fung, a software engineering student at Concordia University. I have a passion for building innovative applications and exploring new technologies. In my free time, I enjoy photography and sharing my work with others.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <Skills />

      {/* PASSIONS */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">
          Passions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <PassionCard 
            title="Photography" 
            image="/passions/photography.jpg"
            description="From landscapes to portraits, I love exploring different perspectives and lighting techniques to tell compelling visual stories."
          />
          <PassionCard 
            title="Ski/Snowboarding" 
            image="/passions/ski.jpg"
            description="There's nothing like plowing through fresh powder. Whether skiing or snowboarding, I enjoy pushing my limits and experiencing the thrill of the mountain."
          />
          <PassionCard 
            title="Bouldering" 
            image="/passions/bouldering.jpg"
            description="Bouldering challenges both my body and mind. I love solving problems on the wall, connecting with the climbing community, and working towards new goals with every session."
          />
          <PassionCard
            title="Travel"
            image="/passions/travel.jpg"
            description="Exploring new places and experiencing different cultures fuels my sense of adventure. Every trip teaches me something new and creates unforgettable memories."
          />
          <PassionCard
            title="Gaming"
            image="/passions/gaming.jpg"
            description="Gaming is both a passion and a way to unwind. I enjoy immersive story-driven games and competitive challenges that test my skills and strategic thinking."
          />

          <div className="w-full max-w-md">
            <iframe
              style={{borderRadius: "12px"}}
              src="https://open.spotify.com/embed/playlist/1N4o8jETvlMjYdfGgMH2zX?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

    </main>
  );
}
