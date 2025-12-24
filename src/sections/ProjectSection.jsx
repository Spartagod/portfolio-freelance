import Carousel from "../components/carousel";
import img1 from "../assets/images/img.jpg";
import img2 from "../assets/images/img.jpg";
import img3 from "../assets/images/img.jpg";
import img4 from "../assets/images/img.jpg";

const slides = [img1, img2, img3, img4];

export default function ProjectSection() {
  return (
    <section
      id="project"
      className="h-screen relative bg-gradient-to-b from-black via-purple-950 to-black flex flex-col items-center justify-start px-4 sm:px-10 xl:px-24 overflow-hidden"
    >
      {/* Lignes violettes dynamiques */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "2px",
              height: `${20 + Math.random() * 100}px`,
              backgroundColor: "#8b5cf6",
              opacity: 0.2 + Math.random() * 0.4,
              animation: `floatUp ${2 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(100vh); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateY(-20vh); opacity: 0; }
          }
        `}
      </style>

      {/* Espace en haut pour descendre tout le bloc */}
      <div className="h-20 sm:h-24 lg:h-32"></div>

      {/* Titre */}
      <div className="h-32 sm:h-32 lg:h-40 flex items-center w-full">
        <h2 className="text-white text-center text-4xl md:text-5xl font-semibold w-full relative z-10">
          Projects
        </h2>
      </div>

      {/* Rectangle unique avec bordure violette et intérieur gris foncé */}
      <div
        className="w-full max-w-6xl relative z-10 rounded-xl overflow-hidden flex justify-center
                   px-2 sm:px-4 lg:px-4
                   py-2 sm:py-4 lg:py-20
                   min-h-[300px] sm:min-h-[400px] lg:min-h-[450px]"
        style={{
          border: "4px solid #8b5cf6",
          boxShadow:
            "0 10px 30px rgba(139,92,246,0.5), 0 0 60px rgba(139,92,246,0.3)",
          backgroundColor: "#1f1f2e",
        }}
      >
        <div className="w-full max-w-[650px]">
          <Carousel slides={slides} />
        </div>
      </div>
    </section>
  );
}
