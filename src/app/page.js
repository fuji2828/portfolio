"use client";

import Skills from "@/components/Skills";
import PassionCard from "@/components/PassionCard";

export default function Home() {
  return (
    <main className="pb-10">

      <div className="hero-skyline w-full px-6 md:px-10 pb-16 md:pb-24 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <section
            id="hero"
            className="flex w-full flex-col-reverse md:flex-row items-center md:justify-between herocard-glass rounded-2xl px-24 py-10"
          >
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
        </div>
      </div>

      {/* ABOUT ME */}
      <section id="about" className="mt-20 mb-12 max-w-6xl mx-auto px-6">
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
      <section className="mb-12 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Passions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <PassionCard 
            title="Photography" 
            image="/passions/photography.jpg"
            description="I picked up photography in high school on an old Samsung phone and it quickly became a passion. I love capturing moments and sharing my perspective with others. Currently I shoot on a Sony A6400 with the kit lens. I'm always looking to expand my skills and explore new techniques."
          />
          <PassionCard 
            title="Ski/Snowboarding" 
            image="/passions/ski.jpg"
            description="I started skiing at 10 years old and haven't stopped since. There's nothing like plowing through fresh powder, especially with how little we get on the east coast. Each year I always try to learn something new and push my limits on the mountain. I'm also getting into snowboarding and loving the new challenges it brings."
          />
          <PassionCard 
            title="Bouldering" 
            image="/passions/bouldering.jpg"
            description="Bouldering is my go-to indoor activity for staying active and challenging myself. I love the problem-solving aspect of it and the vibe at climbing gyms. It's a great way to build strength and mental focus while having fun. (That's definitely a real V12)"
          />
          <PassionCard
            title="Travel"
            image="/passions/travel.jpg"
            description="I love exploring new cities, exploring different cultures and trying new foods. I love seeing how different places and people can be. Whether it's a weekend road trip or an international adventure, I'm always up for discovering something new. Plus there's always great photo opportunities."
          />
          <PassionCard
            title="Gaming"
            image="/passions/gaming.jpg"
            description="Gaming has been a part of my life since I was a kid. From the Wii, to the PS3, to my phone and finally to my own custom-built PC, I've enjoyed competitive shooters, open-world RPGs, and strategy games. It's a great way to unwind and connect with friends, and I also appreciate the artistry and storytelling that goes into each game. Fun fact: I was a top 300 Canadian Clash Royale player at my peak!"
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
