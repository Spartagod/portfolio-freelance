import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-purple-950 to-black flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-10 lg:px-24 relative overflow-hidden">
      
      {/* Texte */}
      <div className="z-40 w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 0.5, duration: 1.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-white"
        >
          Portfolio Student
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 0.8, duration: 1.5 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-200 px-2"
        >
          Hi! I’m Tom, a web development student at EPITECH. I’m passionate about learning every day and turning ideas into real, user-friendly web projects. Always curious, I love taking on new challenges to grow as a developer.
        </motion.p>
      </div>

      {/* Spline 3D */}
      <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-full flex justify-center items-center">
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/DZAjg0wBQbDKUUt8/scene.splinecode"
        />
      </div>
    </section>
  );
};

export default HeroSection;
