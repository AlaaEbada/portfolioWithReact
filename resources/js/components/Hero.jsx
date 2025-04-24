import React, { useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);
    const scrollIndicatorRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            rootMargin: "0px",
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Add reveal animation by adding spans to each text node
        const addRevealAnimation = (element) => {
            if (!element) return;
            const text = element.innerText;
            element.innerHTML = "";

            text.split(" ").forEach((word, wordIndex) => {
                const wordSpan = document.createElement("span");
                wordSpan.style.display = "inline-block";
                wordSpan.style.marginRight = "0.25rem";

                word.split("").forEach((char, charIndex) => {
                    const charSpan = document.createElement("span");
                    charSpan.innerText = char;
                    charSpan.style.display = "inline-block";
                    charSpan.style.transitionDelay = `${
                        wordIndex * 0.05 + charIndex * 0.025
                    }s`;
                    wordSpan.appendChild(charSpan);
                });

                element.appendChild(wordSpan);
            });
        };

        if (titleRef.current) {
            addRevealAnimation(titleRef.current);
            observer.observe(titleRef.current);
        }

        if (subtitleRef.current) observer.observe(subtitleRef.current);
        if (buttonsRef.current) observer.observe(buttonsRef.current);
        if (scrollIndicatorRef.current)
            observer.observe(scrollIndicatorRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-10 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {/* Background Image with Blur */}
                <div
                    className="absolute inset-0 bg-fixed bg-center bg-cover blur-md"
                    style={{
                        backgroundImage: "url('/images/hero-background.webp')",
                    }}
                />
                {/* Overlay to enhance contrast with blurred background */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Animated Gradient Background */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.15),transparent_50%)] animate-[float_20s_ease_infinite]"></div>
            </div>

            <div className="container mx-auto flex flex-col items-center text-center z-10">
                {/* Animated Title */}
                <h1
                    ref={titleRef}
                    className="reveal-text font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight md:leading-tight mb-6"
                >
                    Creative <span className="text-gradient">Portfolio</span>{" "}
                    with Beautiful Animations
                </h1>

                {/* Subtitle with fade-in animation */}
                <p
                    ref={subtitleRef}
                    className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in animation-delay-300"
                >
                    Showcase your work with elegance and style. This portfolio
                    template includes stunning animations and a modern design to
                    highlight your creativity and skills.
                </p>

                {/* Call to action buttons */}
                <div
                    ref={buttonsRef}
                    className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-in animation-delay-500"
                >
                    <a href="#projects" className="rounded-full">
                        <Button size="lg" className="rounded-full">
                            View Projects
                        </Button>
                    </a>

                    <Link href="/contact" className="rounded-full ">
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full border-primary text-primary hover:bg-primary/10"
                        >
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollIndicatorRef}
                className="absolute bottom-8 inset-x-0 flex justify-center opacity-0 animate-fade-in animation-delay-1000"
            >
                <a
                    href="#projects"
                    className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
                >
                    <span className="text-sm mb-2">Scroll to explore</span>
                    <ChevronDown className="animate-bounce" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
