// sections/ExperienceSection.jsx
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Developer",
    company: "Freelance",
    period: "2024 - Present",
    description: "Création de sites web responsive et modernes pour des clients variés."
  },
  {
    title: "Stage Frontend",
    company: "Startup Tech",
    period: "2023 - 2024",
    description: "Participation au développement d'une application React avec animations et intégration API."
  },
  {
    title: "Projet étudiant",
    company: "EPITECH",
    period: "2022 - 2023",
    description: "Développement d'un projet full-stack en équipe, gestion Git et déploiement."
  }
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen bg-gradient-to-b from-black to-purple-950 flex flex-col items-center justify-start px-10 xl:px-24 overflow-hidden"
    >
      {/* Wrapper pour positionner le contenu à 80% de la hauteur */}
      <div className="flex flex-col items-center justify-start w-full z-10" style={{ paddingTop: '15vh' }}>
        <h2 className="text-white text-center text-4xl font-semibold mb-12">
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 bg-opacity-60 p-6 rounded-xl shadow-lg border border-purple-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
            >
              <h3 className="text-purple-400 text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{exp.company}</p>
              <p className="text-gray-400 text-xs mb-4">{exp.period}</p>
              <p className="text-gray-200">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Décor SVG */}
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-48 opacity-20 z-0"
      >
        <path d="M0,50 C480,200 960,0 1440,50 L1440,200 L0,200 Z" fill="purple" />
      </svg>
    </section>
  );
}
