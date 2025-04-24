import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '../../components/ui/button';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const ProjectShow = ({ project, debug, error }) => {
  // Debugging section - remove in production
  if (debug) {
    console.log('Debug info:', debug);
  }

  // Handle error state
  if (error || !project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Head title="Project Not Found" />
        <NavBar />

        <main className="container mx-auto py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-8 text-muted-foreground">The project you're looking for doesn't exist or has been removed.</p>
            <Link href="/projects">
              <Button variant="default">View All Projects</Button>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head title={project.title} />
      <NavBar />

      <main className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/projects">
            <Button variant="ghost" className="mb-8 pl-0 flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-4" />
              Back to Projects
            </Button>
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                {project.status || 'Project'}
              </span>
              {project.featured && (
                <span className="px-3 py-1 text-xs font-medium bg-amber-500/10 text-amber-500 rounded-full">
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          </div>

          {/* Project Image */}
          {project.image && (
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
              <img
                src={project.image?.startsWith('http') ? project.image : `/storage/${project.image}`}
                alt={project.title}
                className="w-full object-cover h-auto max-h-[500px]"
              />
            </div>
          )}

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Project Description</h2>
              <div className="prose prose-gray max-w-none dark:prose-invert">
                <p className="text-muted-foreground whitespace-pre-line">{project.description}</p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>

                <div className="space-y-4">
                  {project.url && (
                    <div>
                      <p className="text-sm font-medium mb-1">Project URL</p>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1 text-sm"
                      >
                        Visit Site <ExternalLink className="size-3" />
                      </a>
                    </div>
                  )}

                  {project.github_url && (
                    <div>
                      <p className="text-sm font-medium mb-1">GitHub Repository</p>
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1 text-sm"
                      >
                        View Code <Github className="size-3" />
                      </a>
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-medium mb-1">Status</p>
                    <span className={`text-sm ${project.status === 'completed' ? 'text-green-500' :
                      project.status === 'on-hold' ? 'text-amber-500' : 'text-blue-500'}`}>
                      {project.status ? project.status.charAt(0).toUpperCase() + project.status.slice(1) : 'Active'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button (Bottom) */}
          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" className="rounded-full">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectShow;
