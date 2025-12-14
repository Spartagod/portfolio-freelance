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

  // ----------- Navigation depuis Header -----------
  const goToSection = (sectionId) => {
    const index = sections.findIndex((s) => s.id === sectionId);
    if (index === -1 || isTransitioning) return;

    setScrollDir(index > currentSection ? "down" : "up");
    setIsTransitioning(true);
    setCurrentSection(index);

    setTimeout(() => setIsTransitioning(false), 900);
  };

  // ----------- Navigation avec scroll -----------
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

  // ----------- Animations Framer Motion -----------
  const variants = {
    initial: (dir) => ({
      y: dir === "down" ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.9, ease: "easeInOut" },
    },
    exit: (dir) => ({
      y: dir === "down" ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.9, ease: "easeInOut" },
    }),
  };

  const contentVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* On passe la fonction au Header */}
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
            style={{
              height: "100vh",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <motion.div
              variants={contentVariants}
              initial="initial"
              animate="animate"
              className="h-full"
            >
              {sections[currentSection].component}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
