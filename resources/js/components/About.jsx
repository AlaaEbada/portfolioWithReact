import { useEffect, useRef } from "react";
import { Briefcase, Code, Book, Lightbulb } from "lucide-react";

const skillsList = [
  { icon: <Code size={20} />, name: "Web Development", level: 90 },
  { icon: <Briefcase size={20} />, name: "UI/UX Design", level: 85 },
  { icon: <Book size={20} />, name: "Animation", level: 80 },
  { icon: <Lightbulb size={20} />, name: "Creative Problem Solving", level: 95 },
];

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const bioRef = useRef(null);
  const skillsRef = useRef(null);
  const skillBarsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-100px 0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);

          // For skill bars, animate them when they become visible
          if (entry.target.classList.contains("skill-container")) {
            const bars = entry.target.querySelectorAll(".skill-progress-fill");
            bars.forEach((bar, index) => {
              if (bar instanceof HTMLElement) {
                setTimeout(() => {
                  bar.style.width = bar.dataset.level + "%";
                }, 300 + index * 100);
              }
            });
          }
        }
      });
    }, observerOptions);

    if (headingRef.current) {
      headingRef.current.classList.add("opacity-0");
      observer.observe(headingRef.current);
    }

    if (bioRef.current) {
      bioRef.current.classList.add("opacity-0");
      observer.observe(bioRef.current);
    }

    if (skillsRef.current) {
      skillsRef.current.classList.add("opacity-0", "skill-container");
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20">
      <div className="container mx-auto">
        <h2 ref={headingRef} className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Bio Section */}
          <div ref={bioRef} className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Creative Designer & Developer</h3>
            <p className="text-muted-foreground">
              I craft modern digital experiences with a focus on animation and interactivity. 
              With over 5 years of experience in creating engaging web applications and 
              user interfaces, I bring a unique blend of technical expertise and creative vision.
            </p>
            <p className="text-muted-foreground">
              My approach centers on creating work that not only looks beautiful but also 
              delivers exceptional user experiences. I believe in the power of thoughtful 
              animation to enhance engagement and communicate complex ideas simply.
            </p>
            <p className="text-muted-foreground">
              When I'm not designing or coding, you'll find me exploring new technologies, 
              contributing to open source projects, or seeking inspiration from art and nature.
            </p>
          </div>

          {/* Skills Section */}
          <div ref={skillsRef} className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>

            <div className="space-y-6">
              {skillsList.map((skill, index) => (
                <div 
                  key={skill.name} 
                  ref={(el) => (skillBarsRef.current[index] = el)}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-md text-primary">
                        {skill.icon}
                      </span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="skill-progress-fill h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: "0%" }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
