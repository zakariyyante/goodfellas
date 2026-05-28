"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-xl border-b border-primary/20 pinstripe-bg">
      <div className="container mx-auto px-4 h-28 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-72 h-20">
            <Image 
              src="/logo.png" 
              alt="Good Casino Fellas Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { name: 'The Base', href: '/' },
            { name: 'The List', href: '/#brands' },
            { name: 'The Guide', href: '/guide' },
            { name: 'The Family', href: '/about' },
            { name: 'Contact', href: '/contact' }
          ].map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-[11px] font-black uppercase tracking-[0.3em] text-accent/60 hover:text-primary transition-all duration-300 relative group/link"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-3 text-primary/60 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-8 flex flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden absolute top-28 left-0 w-full bg-black border-b border-primary/20 transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col p-10 gap-8">
          {[
            { name: 'The Base', href: '/' },
            { name: 'The List', href: '/#brands' },
            { name: 'The Guide', href: '/guide' },
            { name: 'The Family', href: '/about' },
            { name: 'Contact', href: '/contact' }
          ].map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-2xl font-black uppercase tracking-tighter text-accent/40 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
