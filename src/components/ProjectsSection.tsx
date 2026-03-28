import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "IoT Marine Sound Analysis",
    desc: "Deep learning model using ResNet50 & Mel-Spectrograms for marine mammal detection, deployed on Raspberry Pi 3B for real-time edge processing.",
    tech: ["Python", "TensorFlow", "ResNet50", "Raspberry Pi", "Librosa"],
  },
  {
    title: "Urban Noise Pollution Mapping",
    desc: "Large-scale urban noise data processing using HDFS, MapReduce, Hive & Spark MLlib to identify and predict high-noise zones.",
    tech: ["HDFS", "MapReduce", "Hive", "MongoDB", "Spark MLlib"],
  },
  {
    title: "Telecom Customer Churn Prediction",
    desc: "ML model predicting customer churn using feature engineering, Random Forest classification & visual dashboards for insights.",
    tech: ["Python", "Scikit-learn", "EDA", "Random Forest"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-hero transition-all hover:-translate-y-1"
          >
            <div className="h-2 bg-gradient-hero" />
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <ExternalLink size={18} className="text-muted-foreground shrink-0 mt-1" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
