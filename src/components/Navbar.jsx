'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'motion/react';

export default function Navbar() {
  const navLinks = [
    { label: 'Profile', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Photography', href: '/photography' },
  ];

  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(null);

  // The oval sits on whatever you're pointing at, and falls back to the current page.
  const activeHref = navLinks.find((link) => link.href === pathname)?.href;
  const target = hovered ?? activeHref;

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 navbar-glass rounded-full w-fit">
      <div className="px-2 py-2">
        <div className="flex justify-center items-center">

          {/* Navbar - Center */}
          <div
            className="flex gap-1 sm:gap-2 items-center"
            onMouseLeave={() => setHovered(null)}
            onBlur={() => setHovered(null)}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.href === activeHref ? 'page' : undefined}
                onMouseEnter={() => setHovered(link.href)}
                onFocus={() => setHovered(link.href)}
                className={`nav-link relative rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium ${
                  link.href === activeHref ? 'nav-link-active' : ''
                }`}
              >
                {link.href === target && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav-pill absolute inset-0 rounded-full"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 380, damping: 32, mass: 0.8 }
                    }
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
