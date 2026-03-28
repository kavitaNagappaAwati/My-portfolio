import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm a CSE &amp; Data Science engineering student at Acharya Institute of Technology (VTU, Bengaluru) with a CGPA of 8.6. I have hands-on experience in building, analyzing data, and deploying intelligent systems.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm skilled in Python, SQL, AI/ML, and data visualization. My experience spans geospatial analysis, predictive modeling, and I'm a strong problem solver — backed by a hackathon win at VOIS.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="text-primary" />
            Bengaluru, Karnataka, India
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-background rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <GraduationCap size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Education</h3>
                <p className="text-xs text-muted-foreground">2022 – 2026</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">B.E. in Computer Science Engineering &amp; Data Science</p>
            <p className="text-sm text-muted-foreground">Acharya Institute of Technology, VTU · CGPA: 8.6</p>
          </div>

          <div className="bg-background rounded-2xl p-6 shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Award size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">Certifications</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• AI Primer – Infosys Springboard</li>
              <li>• Python Basics – Infosys Springboard</li>
              <li>• Microsoft Power BI – Infosys Springboard</li>
              <li>• Tableau – Infosys Springboard</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
