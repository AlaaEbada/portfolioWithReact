import { useEffect, useRef } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const socialsRef = useRef(null);

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
        }
      });
    }, observerOptions);

    if (headingRef.current) {
      headingRef.current.classList.add("opacity-0");
      observer.observe(headingRef.current);
    }

    if (formRef.current) {
      formRef.current.classList.add("opacity-0");
      observer.observe(formRef.current);
    }

    if (socialsRef.current) {
      socialsRef.current.classList.add("opacity-0");
      observer.observe(socialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <h2 ref={headingRef} className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <form
            ref={formRef}
            className="lg:col-span-3 space-y-6 p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-xl font-bold mb-4">Send a Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input required
                  id="name"
                  placeholder="Your name"
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input required
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input required
                id="subject"
                placeholder="What is this regarding?"
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea required
                id="message"
                placeholder="Type your message here..."
                rows={5}
                className="bg-background/50 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-full"
            >
              Send Message
            </Button>
          </form>

          {/* Contact Info */}
          <div ref={socialsRef} className="lg:col-span-2 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  Reach out through email or connect on these platforms.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center group p-3 rounded-lg hover:bg-card/50 transition-colors"
                >
                  <div className="mr-4 p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">hello@example.com</p>
                  </div>
                </a>

                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <Github size={20} />, label: "GitHub", href: "#" },
                    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
                    { icon: <Twitter size={20} />, label: "Twitter", href: "#" }
                  ].map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center justify-center p-3 rounded-full bg-card/50 border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                      style={{ animationDelay: `${index * 100 + 300}ms` }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
