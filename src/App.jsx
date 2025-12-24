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
  const [scrollDir, setScrollDir] = useState("down");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSection = (sectionId) => {
    const index = sections.findIndex((s) => s.id === sectionId);
    if (index === -1 || isTransitioning) return;

    setScrollDir(index > currentSection ? "down" : "up");
    setIsTransitioning(true);
    setCurrentSection(index);

    setTimeout(() => setIsTransitioning(false), 900);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (isTransitioning) return;

      const direction = e.deltaY > 0 ? "down" : "up";
      setScrollDir(direction);

      let nextIndex = currentSection;
      if (direction === "down" && currentSection < sections.length - 1)
        nextIndex = currentSection + 1;
      else if (direction === "up" && currentSection > 0)
        nextIndex = currentSection - 1;

      if (nextIndex !== currentSection) {
        setIsTransitioning(true);
        setCurrentSection(nextIndex);
        setTimeout(() => setIsTransitioning(false), 900);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection, isTransitioning]);

  const variants = {
    initial: (dir) => ({
      y: dir === "down" ? 40 : -40,
      opacity: 0,
      filter: "blur(4px)",
      scale: 0.97,
      position: "absolute",
      width: "100%",
      height: "100%",
    }),
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] },
      position: "absolute",
      width: "100%",
      height: "100%",
    },
    exit: (dir) => ({
      y: dir === "down" ? -40 : 40,
      opacity: 0,
      filter: "blur(4px)",
      scale: 0.97,
      transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] },
      position: "absolute",
      width: "100%",
      height: "100%",
    }),
  };

  return (
    <>
      <Header goToSection={goToSection} />

      <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
        <AnimatePresence initial={false} custom={scrollDir}>
          <motion.div
            key={sections[currentSection].id}
            custom={scrollDir}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div style={{ position: "relative", zIndex: 10, height: "100%" }}>
              {sections[currentSection].component}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
