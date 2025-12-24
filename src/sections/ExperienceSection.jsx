// sections/ExperienceSection.jsx
import { motion } from "framer-motion";

const experiences = [
  { title: "Web Developer", company: "Freelance", period: "2024 - Present", description: "Création de sites web responsive et modernes pour des clients variés." },
  { title: "Stage Frontend", company: "Startup Tech", period: "2023 - 2024", description: "Participation au développement d'une application React avec animations et intégration API." },
  { title: "Projet étudiant", company: "EPITECH", period: "2022 - 2023", description: "Développement d'un projet full-stack en équipe, gestion Git et déploiement." },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen bg-gradient-to-b from-black to-purple-950 flex flex-col items-center px-6 sm:px-10 xl:px-24 py-20">
      <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 text-center">Experience</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl">
        {experiences.map((exp, i) => (
          <motion.div key={i} className="bg-gray-900/60 p-6 rounded-xl shadow-lg shadow-purple-900/30 border border-purple-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <h3 className="text-purple-400 text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-gray-300 text-sm mb-1">{exp.company}</p>
            <p className="text-gray-400 text-xs mb-4">{exp.period}</p>
            <p className="text-gray-200 text-sm leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
