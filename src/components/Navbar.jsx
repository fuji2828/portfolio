'use client';

export default function Navbar() {
  const navLinks = [ 
    { label: 'Profile', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Photography', href: '/photography' },
  ];

  return (
    <nav className="sticky top-4 left-1/2 transform -translate-x-1/2 z-50 navbar-glass rounded-3xl w-fit">
      <div className="px-6 sm:px-8 py-4">
        <div className="flex justify-center items-center gap-6 sm:gap-10">

          {/* Navbar - Center */}
          <div className="flex gap-6 sm:gap-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-xs sm:text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}