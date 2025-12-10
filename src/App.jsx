import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/header";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import ExperienceSection from "./sections/experienceSection";
import ContactSection from "./sections/contactSection";

const sections = [
  { id: "hero", component: <HeroSection /> },
  { id: "project", component: <ProjectSection /> },
  { id: "experience", component: <ExperienceSection /> },
  { id: "contact", component: <ContactSection /> },
];

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleWheel = (e) => {
      if (!ticking) {
        if (e.deltaY > 0) {
          // Scroll vers le bas
          setCurrentSection((prev) =>
            prev < sections.length - 1 ? prev + 1 : prev
          );
        } else if (e.deltaY < 0) {
          // Scroll vers le haut
          setCurrentSection((prev) => (prev > 0 ? prev - 1 : prev));
        }
        ticking = true;
        setTimeout(() => (ticking = false), 800);
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <>
      <Header />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={sections[currentSection].id}
            initial={{ y: currentSection > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{
              y: currentSection < sections.length - 1 ? "-100%" : "100%",
              opacity: 0,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ height: "100vh" }}
          >
            {sections[currentSection].component}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
