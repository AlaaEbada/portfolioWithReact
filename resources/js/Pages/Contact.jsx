import React from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Contact = () => {
    const { flash, errors: pageErrors } = usePage().props;
    console.log('Page errors:', pageErrors);

    // Create form state using Inertia's useForm hook
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    console.log('Form errors:', errors);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form data before validation:', data);
        
        // Client-side validation
        const newErrors = {};
        
        if (!data.name.trim()) newErrors.name = 'Please enter your name';
        else if (data.name.length < 2) newErrors.name = 'Name must be at least 2 characters';
        else if (data.name.length > 100) newErrors.name = 'Name cannot exceed 100 characters';
        else if (!/^[\p{L}\s\-]+$/u.test(data.name)) newErrors.name = 'Name can only contain letters and spaces';
        
        if (!data.email.trim()) newErrors.email = 'Please enter your email address';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Please enter a valid email address';
        else if (data.email.length > 100) newErrors.email = 'Email cannot exceed 100 characters';
        
        if (!data.subject.trim()) newErrors.subject = 'Please enter a subject';
        else if (data.subject.length < 5) newErrors.subject = 'Subject must be at least 5 characters';
        else if (data.subject.length > 120) newErrors.subject = 'Subject cannot exceed 120 characters';
        
        if (!data.message.trim()) newErrors.message = 'Please enter your message';
        else if (data.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
        else if (data.message.length > 2000) newErrors.message = 'Message cannot exceed 2000 characters';
        
        if (Object.keys(newErrors).length > 0) {
            console.log('Client-side validation errors:', newErrors);
            reset({ ...data }, { errors: newErrors });
            return;
        }
        
        console.log('Submitting form...');
        post("/contact", {
            onError: (errors) => {
                console.log('Server-side validation errors:', errors);
            }
        });
    };
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Head title="Contact" />
            <NavBar />

            <main className="container mx-auto py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Get In Touch
                    </h1>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Have a question or want to work together? Feel free to
                        reach out using the form below or through any of my
                        contact details.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-card rounded-lg p-6 shadow-sm">
                                <h2 className="text-xl font-semibold mb-6">
                                    Contact Information
                                </h2>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            <Mail className="text-primary size-5" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <a
                                                href="mailto:contact@example.com"
                                                className="text-primary hover:underline"
                                            >
                                                contact@example.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            <Phone className="text-primary size-5" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Phone</p>
                                            <a
                                                href="tel:+1234567890"
                                                className="text-primary hover:underline"
                                            >
                                                +1 (234) 567-890
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            <MapPin className="text-primary size-5" />
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Location
                                            </p>
                                            <p className="text-muted-foreground">
                                                San Francisco, California
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card rounded-lg p-6 shadow-sm">
                                <h2 className="text-xl font-semibold mb-4">
                                    Availability
                                </h2>
                                <p className="text-muted-foreground mb-4">
                                    I'm currently available for freelance work
                                    and full-time positions.
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Response time:{" "}
                                    <span className="text-primary font-medium">
                                        within 24 hours
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="bg-card rounded-lg p-6 shadow-sm">
                                <h2 className="text-xl font-semibold mb-6">
                                    Send Me a Message
                                </h2>

                                <form
                                    className="space-y-4"
                                    onSubmit={handleSubmit}
                                >
                                    {flash?.success && (
                                        <div className="p-4 mb-4 bg-green-100 border border-green-200 text-green-700 rounded-md">
                                            {flash.success}
                                        </div>
                                    )}

                                    {Object.keys(errors).length > 0 && (
                                        <div className="p-4 mb-4 bg-red-100 border border-red-200 text-red-700 rounded-md">
                                            <h3 className="font-medium mb-2">Please fix these errors:</h3>
                                            <ul className="list-disc pl-5 space-y-1">
                                                {Object.entries(errors).map(([field, message]) => (
                                                    <li key={field}>{message}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-medium"
                                            >
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                className={`w-full p-3 rounded-md border ${
                                                    errors.name
                                                        ? "border-red-500"
                                                        : "border-border"
                                                } bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50`}
                                                placeholder="Your name"
                                                value={data.name}
                                                required
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.name && (
                                                <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                    <AlertCircle className="size-4" />
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-medium"
                                            >
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                className={`w-full p-3 rounded-md border ${
                                                    errors.email
                                                        ? "border-red-500"
                                                        : "border-border"
                                                } bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50`}
                                                placeholder="Your email"
                                                value={data.email}
                                                required
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.email && (
                                                <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                    <AlertCircle className="size-4" />
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="subject"
                                            className="text-sm font-medium"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            id="subject"
                                            type="text"
                                            className={`w-full p-3 rounded-md border ${
                                                errors.subject
                                                    ? "border-red-500"
                                                    : "border-border"
                                            } bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50`}
                                            placeholder="Subject"
                                            value={data.subject}
                                            required
                                            onChange={(e) =>
                                                setData(
                                                    "subject",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.subject && (
                                            <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                <AlertCircle className="size-4" />
                                                {errors.subject}
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="message"
                                            className="text-sm font-medium"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            className={`w-full p-3 rounded-md border ${
                                                errors.message
                                                    ? "border-red-500"
                                                    : "border-border"
                                            } bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[150px]`}
                                            placeholder="Your message"
                                            value={data.message}
                                            required
                                            onChange={(e) =>
                                                setData(
                                                    "message",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        {errors.message && (
                                            <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                                <AlertCircle className="size-4" />
                                                {errors.message}
                                            </div>
                                        )}
                                    </div>

                                    <Button
                                        className="w-full md:w-auto"
                                        size="lg"
                                        type="submit"
                                        disabled={processing}
                                    >
                                        {processing
                                            ? "Sending..."
                                            : "Send Message"}{" "}
                                        <Send className="ml-2 size-4" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
