import React, { useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

// Default projects data as fallback
const defaultProjects = [
    {
        id: 1,
        title: "Modern Dashboard",
        category: "Web App",
        description:
            "A modern dashboard design with advanced analytics and data visualization.",
        imageUrl:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        category: "Web Design",
        description:
            "A fully responsive e-commerce platform with animated product galleries.",
        imageUrl:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
    },
];

const Projects = ({ projects = defaultProjects }) => {
    const sectionRef = useRef(null);
    const projectsRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            rootMargin: "-50px 0px",
            threshold: 0.15,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fade-in");
                    entry.target.classList.remove("opacity-0");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (sectionRef.current) {
            const headingElement = sectionRef.current.querySelector("h2");
            if (headingElement) {
                headingElement.classList.add("opacity-0");
                observer.observe(headingElement);
            }
        }

        projectsRef.current.forEach((project) => {
            if (project) {
                project.classList.add("opacity-0");
                observer.observe(project);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="py-20 bg-secondary/30"
        >
            <div className="container mx-auto">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
                    <span className="text-gradient">Featured</span> Projects
                </h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
                    Explore some of my recent work and creative projects. Each
                    project showcases different skills and approaches to
                    problem-solving.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={(el) => (projectsRef.current[index] = el)}
                            className="portfolio-card group max-w-sm mx-auto w-full"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <Link
                                href={`/projects/${project.id}`}
                                className="block relative aspect-[3/2] overflow-hidden rounded-lg"
                            >
                                {/* Project Image */}
                                <img
                                    src={
                                        project.image?.startsWith("http")
                                            ? project.image
                                            : `/storage/${project.image}`
                                    }
                                    alt={project.title}
                                    className="portfolio-card-img object-cover w-full h-full"
                                />

                                {/* Overlay with content */}
                                <div className="portfolio-card-overlay">
                                    <div className="portfolio-card-content">
                                        <span className="text-xs font-medium text-primary mb-1 block">
                                            {project.status ||
                                                project.category ||
                                                "Project"}
                                        </span>
                                        <h3 className="text-lg font-bold mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground mb-3">
                                            {project.description}
                                        </p>
                                        <Link href={`/projects/${project.id}`}>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="pl-0 text-primary hover:text-primary/80 hover:bg-transparent text-sm"
                                            >
                                                View Project{" "}
                                                <ArrowUpRight className="ml-1 size-3" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/projects">
                        <Button
                            variant="outline"
                            className="rounded-full border-primary text-primary hover:bg-primary/10"
                        >
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
