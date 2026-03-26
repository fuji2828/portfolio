'use client';

export default function Navbar() {
  const navLinks = [
    { label: 'Projects', href: '/' },
    { label: 'Photography', href: '/photography' },
    { label: 'Profile', href: '/profile' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          
          {/* Logo/Brand */}
          <div className="flex items-left gap-2">
            <a href="/" className="nav-brand text-lg sm:text-xl">
              Jeremy Fung
            </a>
          </div>

          {/* Navigation - Center */}
          <div className="flex gap-4 sm:gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm"
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