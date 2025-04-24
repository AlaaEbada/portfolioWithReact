import React from 'react';
import { Head } from '@inertiajs/react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head title="About" />
      <NavBar />

      <main className="container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
          
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-muted-foreground mb-6">
              I'm a passionate developer with experience in building modern web applications.
              My expertise includes React, Laravel, and various other technologies that help me create
              robust and user-friendly solutions.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">My Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary"></span>
                    React.js & Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary"></span>
                    JavaScript/TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary"></span>
                    UI/UX Design
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary"></span>
                    Laravel & PHP
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary"></span>
                    Node.js & Express
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary"></span>
                    Database Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary"></span>
                    RESTful APIs
                  </li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Work Experience</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-2 border-primary pl-4 py-1">
                <h3 className="text-xl font-semibold">Senior Web Developer</h3>
                <p className="text-muted-foreground">Tech Solutions Inc. • 2020 - Present</p>
                <p className="mt-2">
                  Leading development of web applications using React and Laravel.
                  Implemented modern UI designs and improved performance metrics by 40%.
                </p>
              </div>
              
              <div className="border-l-2 border-primary pl-4 py-1">
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <p className="text-muted-foreground">Creative Digital Agency • 2018 - 2020</p>
                <p className="mt-2">
                  Built responsive websites and interactive UIs using modern JavaScript frameworks.
                  Collaborated with design team to implement pixel-perfect interfaces.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
            
            <div className="border-l-2 border-primary pl-4 py-1 mb-8">
              <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
              <p className="text-muted-foreground">University of Technology • 2014 - 2018</p>
              <p className="mt-2">
                Graduated with honors. Specialized in web technologies and software engineering.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
