import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "OOP", "REST APIs"],
  },
  {
    title: "ML / AI",
    skills: ["NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "Predictive Modelling"],
  },
  {
    title: "Data & Visualization",
    skills: ["MySQL", "MongoDB", "Power BI", "Tableau", "ETL Pipelines", "GeoPandas"],
  },
  {
    title: "Big Data",
    skills: ["HDFS", "MapReduce", "Hive", "Spark MLlib"],
  },
  {
    title: "Tools & Frameworks",
    skills: ["Flask", "Git", "VS Code", "Raspberry Pi"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hero transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-4 text-gradient">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
