import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import { resumeUrl } from "@/lib/resume";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
    {/* Background blobs */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-semibold mb-2">Hello, I'm</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          <span className="text-gradient">Kavita</span>{" "}
          <span className="text-foreground">Nagappa Awati</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-6 max-w-lg">
          CSE &amp; Data Science student · 1x Hackathon Winner · Passionate about AI/ML, Data Analytics &amp; building intelligent systems.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href={resumeUrl}
            download="Kavita_Nagappa_Awati_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-hero text-primary-foreground px-7 py-3 rounded-xl font-semibold shadow-hero hover:opacity-90 transition-opacity"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border-2 border-primary text-primary px-7 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Contact Me
          </a>
        </div>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={22} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={22} />
          </a>
          <a href="mailto:awatikavita8@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={22} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-hero p-1">
            <img
              src={profileImg}
              alt="Kavita Nagappa Awati"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-card shadow-card rounded-2xl px-4 py-2 animate-float">
            <span className="text-sm font-semibold text-foreground">🏆 Hackathon Winner</span>
          </div>
        </div>
      </motion.div>
    </div>

    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
      <ArrowDown size={24} />
    </a>
  </section>
);

export default HeroSection;
