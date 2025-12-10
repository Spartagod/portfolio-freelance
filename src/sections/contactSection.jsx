import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Création des particules
    const numParticles = 30;
    particles.current = [];
    for (let i = 0; i < numParticles; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        color: `rgba(139, 92, 246, ${Math.random() * 0.6 + 0.3})`,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;

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

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      particles.current.forEach((p) => {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 50) {
          p.dx += dx * 0.0005;
          p.dy += dy * 0.0005;
        }
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    });

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-start px-10 xl:px-24 py-24 bg-gradient-to-b from-black to-purple-950 overflow-hidden"
    >
      {/* Canvas des particules */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      ></canvas>

      {/* Titre */}
      <motion.h2
        className="text-white text-4xl font-semibold mb-12 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      {/* Formulaire */}
      <motion.form
        className="w-full max-w-xl flex flex-col z-10 space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600"
        />
        <textarea
          placeholder="Your Message"
          rows="6"
          className="p-4 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600"
        ></textarea>
        <button
          type="submit"
          className="bg-violet-600 hover:bg-violet-500 transition-colors duration-300 text-white font-semibold py-3 rounded-lg"
        >
          Send
        </button>
      </motion.form>
    </section>
  );
}
