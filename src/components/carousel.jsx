import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((old) => (old === 0 ? slides.length - 1 : old - 1));
  };

  const nextSlide = () => {
    setCurrent((old) => (old + 1) % slides.length);
  };

  const getOffset = (index) => {
    let offset = index - current;
    if (offset < -Math.floor(slides.length / 2)) offset += slides.length;
    if (offset > Math.floor(slides.length / 2)) offset -= slides.length;
    return offset;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Carousel Container */}
      <div
        style={{
          position: "relative",
          width: "70%",
          maxWidth: "650px",
          aspectRatio: "16/9",
          margin: "0 auto",
          perspective: "1200px",
          overflow: "visible",
        }}
      >
        <AnimatePresence initial={false}>
          {slides.map((slide, index) => {
            const offset = getOffset(index);
            if (Math.abs(offset) > 1) return null; // On ne montre que 3 slides max

            const isActive = offset === 0;
            const scale = isActive ? 1 : 0.65;
            const translateX = offset * 180;
            const rotateY = offset * -25;
            const zIndex = isActive ? 20 : 10;
            const opacity = isActive ? 1 : 0.8;

            return (
              <motion.div
                key={index}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  zIndex,
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: isActive ? "grab" : "pointer",
                  boxShadow: isActive
                    ? "0 30px 80px rgba(139,92,246,0.7), 0 0 40px rgba(139,92,246,0.4)"
                    : "0 10px 25px rgba(0,0,0,0.2)",
                }}
                animate={{
                  transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  filter: isActive ? "brightness(1)" : "brightness(0.75)",
                }}
                transition={{ type: "spring", stiffness: 60, damping: 20, mass: 1 }}
                whileHover={{
                  scale: isActive ? 1.05 : scale,
                  rotateY: isActive ? 0 : rotateY,
                  transition: { duration: 0.3 },
                }}
                onClick={() => setCurrent(index)}
                // **Activation du drag tactile**
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -50) nextSlide();
                  if (info.offset.x > 50) prevSlide();
                }}
              >
                <img
                  src={slide}
                  alt={`slide-${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "16px",
                    border: "2px solid #8b5cf6", // bordure violette
                  }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: "-50%", // plus d’écart
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "2rem",
            background: "rgba(0,0,0,0.4)",
            border: "none",
            cursor: "pointer",
            color: "white",
            zIndex: 30,
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px rgba(139,92,246,0.7)",
          }}
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: "-50%",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "2rem",
            background: "rgba(0,0,0,0.4)",
            border: "none",
            cursor: "pointer",
            color: "white",
            zIndex: 30,
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px rgba(139,92,246,0.7)",
          }}
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div
        style={{
          marginTop: "40px", // plus bas
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        {slides.map((_, idx) => (
          <motion.div
            key={idx}
            onClick={() => setCurrent(idx)}
            animate={{
              width: current === idx ? 16 : 10,
              height: current === idx ? 16 : 10,
              background: current === idx ? "#8b5cf6" : "rgba(255,255,255,0.5)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
