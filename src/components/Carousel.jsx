import { useState } from "react";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((old) => (old === 0 ? slides.length - 1 : old - 1));
  const nextSlide = () => setCurrent((old) => (old + 1) % slides.length);

  // Swipe tactile
  let startX = 0;
  const handleTouchStart = (e) => startX = e.touches[0].clientX;
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();
    else if (endX - startX > 50) prevSlide();
  };

  return (
    <div
      className="relative w-full aspect-video flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ perspective: "1200px" }}
    >
      {slides.map((slide, index) => {
        let offset = index - current;
        if (offset < -Math.floor(slides.length / 2)) offset += slides.length;
        if (offset > Math.floor(slides.length / 2)) offset -= slides.length;

        const isActive = offset === 0;
        const scale = isActive ? 1 : 0.7;
        const translateX = offset * 40;
        const rotateY = offset * -25;
        const zIndex = isActive ? 10 : 0;
        const opacity = Math.abs(offset) > 1 ? 0 : 1;

        return (
          <div
            key={index}
            className="absolute w-3/4 h-3/4 rounded-xl overflow-hidden transition-all duration-700 ease-out"
            style={{
              transform: `translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
              zIndex,
              opacity,
              boxShadow: isActive ? "0 15px 40px rgba(0,0,0,0.6)" : "none",
            }}
          >
            <img src={slide} alt={`slide-${index}`} className="w-full h-full object-cover rounded-xl" />
          </div>
        );
      })}

      <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-2xl bg-black/30 w-12 h-12 rounded-full">‹</button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-2xl bg-black/30 w-12 h-12 rounded-full">›</button>
    </div>
  );
}
