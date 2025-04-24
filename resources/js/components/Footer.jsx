import React from 'react';
import { Link } from '@inertiajs/react';
import { Github, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Column */}
        <div className="flex flex-col">
          <Link href="/" className="text-2xl font-bold mb-4">
            <span className="text-gradient">Alaa Ebada</span>
          </Link>
          <p className="text-muted-foreground mb-4">
            Laravel developer specializing in Livewire, Alpine.js, and Tailwind CSS.
            Creating educational content for developers through courses and videos.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube size={20} />
            </a>
            <a href="mailto:contact@alaaebada.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Tech Stack Column */}
        <div>
          <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-card text-foreground rounded-full px-3 py-1 text-sm">Laravel</span>
            <span className="bg-card text-foreground rounded-full px-3 py-1 text-sm">Livewire</span>
            <span className="bg-card text-foreground rounded-full px-3 py-1 text-sm">Alpine.js</span>
            <span className="bg-card text-foreground rounded-full px-3 py-1 text-sm">Tailwind CSS</span>
            <span className="bg-card text-foreground rounded-full px-3 py-1 text-sm">PHP</span>
            <span className="bg-card text-foreground rounded-full px-3 py-1 text-sm">MySQL</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Alaa Ebada. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;

