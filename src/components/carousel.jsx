import { useState } from "react";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((old) => (old === 0 ? slides.length - 1 : old - 1));
  };

  const nextSlide = () => {
    setCurrent((old) => (old + 1) % slides.length);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "900px",
        height: "500px",
        margin: "0 auto",
        perspective: "1200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {slides.map((slide, index) => {
        let offset = index - current;
        if (offset < -Math.floor(slides.length / 2)) offset += slides.length;
        if (offset > Math.floor(slides.length / 2)) offset -= slides.length;

        const isActive = offset === 0;
        const scale = isActive ? 1 : 0.7;
        const translateX = offset * 200;
        const rotateY = offset * -30;
        const zIndex = isActive ? 10 : 0;
        const opacity = Math.abs(offset) > 1 ? 0 : 1;

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              width: "70%",
              height: "70%",
              transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
              transition: "all 0.7s ease",
              zIndex,
              opacity,
              boxShadow: isActive ? "0 15px 40px rgba(0,0,0,0.6)" : "none",
              borderRadius: "12px",
            }}
          >
            <img
              src={slide}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
        );
      })}

      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: "-80px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "50px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "white",
          zIndex: 20,
        }}
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "-80px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "50px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "white",
          zIndex: 20,
        }}
      >
        ›
      </button>
    </div>
  );
}
