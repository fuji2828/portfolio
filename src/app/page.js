"use client";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">

      <section className="mb-20 flex gap-12 items-center">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">
            Jeremy Fung
          </h1>

          <p className="text-xl">
            Software Engineering Student at Concordia University. 
          </p>

          <div className="mt-6 flex gap-4">
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
        <div className="flex-shrink-0">
          <div className="w-64 h-64">
            <img 
              src="/profile.jpg" 
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-gray-300"
            />
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6">
          About Me
        </h2>

        <p className="text-lg leading-relaxed">
          Hey! I'm Jeremy Fung, a software engineering student at Concordia University. I have a passion for building innovative applications and exploring new technologies. In my free time, I enjoy photography and sharing my work with others.
        </p>
      </section>

    </main>
  );
}
