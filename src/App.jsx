import { motion } from "framer-motion";
import Header from "./components/header";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />

      {/* Séparateur vague croisée */}
      <div style={{ position: "relative", width: "100%", height: "150px", overflow: "hidden" }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          {/* Ligne 1 */}
          <motion.path
            d="M0,50 C360,80 1080,20 1440,50"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="transparent"
            animate={{ d: [
              "M0,50 C360,80 1080,20 1440,50",
              "M0,50 C360,60 1080,40 1440,50",
              "M0,50 C360,80 1080,20 1440,50"
            ]}}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Ligne 2 */}
          <motion.path
            d="M0,60 C360,30 1080,90 1440,60"
            stroke="#c084fc"
            strokeWidth="2"
            fill="transparent"
            animate={{ d: [
              "M0,60 C360,30 1080,90 1440,60",
              "M0,60 C360,50 1080,70 1440,60",
              "M0,60 C360,30 1080,90 1440,60"
            ]}}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Ligne 3 */}
          <motion.path
            d="M0,40 C360,60 1080,10 1440,40"
            stroke="#a78bfa"
            strokeWidth="2"
            fill="transparent"
            animate={{ d: [
              "M0,40 C360,60 1080,10 1440,40",
              "M0,40 C360,50 1080,30 1440,40",
              "M0,40 C360,60 1080,10 1440,40"
            ]}}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <ProjectSection />
    </>
  );
}
