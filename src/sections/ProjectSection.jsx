import { useEffect, useRef } from "react";
import Carousel from "../components/carousel";
import img1 from "../assets/images/img.jpg";
import img2 from "../assets/images/img.jpg";
import img3 from "../assets/images/img.jpg";
import img4 from "../assets/images/img.jpg";

const slides = [img1, img2, img3, img4];

export default function ProjectSection() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();

    // Créer les particules
    const numParticles = 60;
    particles.current = Array.from({ length: numParticles }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      color: `rgba(139, 92, 246, ${Math.random() * 0.6 + 0.3})`,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        // Mouvement
        p.x += p.dx;
        p.y += p.dy;

        // Rebondir aux bords
        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;

        // Dessiner particule avec ombre
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#a78bfa";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate();

    // Interaction souris
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      particles.current.forEach((p) => {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 60) {
          p.dx += dx * 0.0007;
          p.dy += dy * 0.0007;
        }
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", setCanvasSize);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section
      id="project"
      className="h-screen bg-gradient-to-b from-black via-purple-950 to-black flex flex-col items-center justify-start px-10 xl:px-24 relative overflow-hidden"
    >
      {/* Canvas des particules */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Titre */}
      <h2 className="text-white text-center pt-16 text-4xl font-semibold z-10">
        Projects
      </h2>

      {/* Carrousel */}
      <div className="w-full mt-12 relative z-10 shadow-2xl shadow-purple-700/50 rounded-xl">
        <Carousel slides={slides} />
      </div>
    </section>
  );
}
