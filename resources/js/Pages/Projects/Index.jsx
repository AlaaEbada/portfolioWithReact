import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const ProjectsIndex = ({ projects = [] }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head title="All Projects" />
      <NavBar />

      <main className="container mx-auto py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="mb-8 pl-0 flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-4" />
              Back to Home
            </Button>
          </Link>

          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">All Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through all my projects. Each one represents different skills and challenges I've tackled.
            </p>
          </div>

          {/* Projects Grid */}
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project) => (
                <div key={project.id} className="group rounded-lg overflow-hidden shadow-md bg-card hover:shadow-lg transition-all duration-300">
                  {/* Project Image */}
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={project.image?.startsWith('http') ? project.image : `/storage/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {project.status || 'Project'}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-1 text-xs font-medium bg-amber-500/10 text-amber-500 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <Link href={`/projects/${project.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="pl-0 text-primary hover:text-primary/80 hover:bg-transparent text-sm"
                      >
                        View Details <ArrowUpRight className="ml-1 size-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsIndex;
