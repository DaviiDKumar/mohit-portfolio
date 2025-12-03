// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., Formspree, EmailJS)
        alert("Message sent! (This is a demo)");
    };

    return (
        <section id="contact" className="relative w-full py-24 px-6 md:px-12 bg-slate-50 overflow-hidden">

            {/* Background Decorative Blobs (Consistent with Experience Section) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >

                    {/* LEFT COLUMN: Text & Info */}
                    <div className="space-y-8 lg:pt-10">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
                                Let's <span className="text-blue-600">Connect</span>
                            </h2>
                            <p className="mt-4 text-slate-600 text-lg leading-relaxed max-w-lg">
                                I am always open to discussing new research collaborations, scientific inquiries, or opportunities in the field of Oncology and Life Sciences.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Email Block */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-blue-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Email Me</p>
                                    <a href="mailto:contact@example.com" className="text-lg font-medium text-slate-800 hover:text-blue-600 transition-colors">
                                        mohit9636464644@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Location Block */}
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-blue-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Location</p>
                                    <p className="text-lg font-medium text-slate-800">
                                        Jaipur, Rajasthan
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6">
                            <h3 className="text-sm font-bold text-slate-800 mb-4">Follow My Work</h3>
                            <div className="flex gap-4">
                                <SocialButton href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} color="hover:bg-blue-700" />
                                <SocialButton href="https://twitter.com" icon={<Twitter className="w-5 h-5" />} color="hover:bg-sky-500" />
                                <SocialButton href="https://instagram.com" icon={<Instagram className="w-5 h-5" />} color="hover:bg-pink-600" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Dr. Strange"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="I'd like to discuss your research on..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-slate-400 resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}

// Helper Component for Social Buttons
const SocialButton = ({ href, icon, color }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`p-3 bg-slate-100 text-slate-600 rounded-full transition-all duration-300 hover:text-white hover:scale-110 ${color}`}
    >
        {icon}
    </a>
);