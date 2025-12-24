import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section
      className="
        relative min-h-screen overflow-hidden
        bg-gradient-to-b from-purple-950 to-black
        flex flex-col xl:flex-row
        items-start xl:items-center
        justify-start
        px-4 sm:px-6 lg:px-24
      "
    >
      {/* RIGHT SECTION - SPLINE */}
      <div
        className="
          w-[250px] sm:w-[300px] md:w-[500px] lg:w-[600px] xl:w-[800px]
          h-[250px] sm:h-[300px] md:h-[500px] lg:h-[600px] xl:h-[800px]
          mb-6 xl:mb-0
          relative xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2
          pointer-events-auto
        "
        style={{ zIndex: 0 }}
      >
        <Spline
          scene="https://prod.spline.design/DZAjg0wBQbDKUUt8/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* LEFT SECTION - TEXT */}
      <div className="z-10 w-full xl:w-1/2 max-w-2xl text-left mt-12 sm:mt-16 xl:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 0.5 }}
          className="font-bold text-white mb-4 sm:mb-6 text-[clamp(2rem,5vw,4rem)] whitespace-nowrap"
        >
          Portfolio Student
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 0.8 }}
          className="text-purple-200 leading-relaxed text-[clamp(1rem,2.5vw,1.5rem)]"
        >
          Hi! I’m Tom, a web development student at EPITECH. I’m passionate about learning every day and turning ideas into real, user-friendly web projects. Always curious, I love taking on new challenges to grow as a developer.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
