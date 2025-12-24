// sections/ContactSection.jsx
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resizeCanvas();

    const numParticles = 30;
    particles.current = Array.from({length:numParticles}).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random()*2+1,
      dx: (Math.random()-0.5)*0.3,
      dy: (Math.random()-0.5)*0.3,
      color: `rgba(139,92,246,${Math.random()*0.6+0.3})`,
    }));

    const animate = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.current.forEach(p => {
        p.x+=p.dx; p.y+=p.dy;
        if(p.x<0||p.x>canvas.width)p.dx*=-1;
        if(p.y<0||p.y>canvas.height)p.dy*=-1;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
        ctx.fillStyle=p.color;
        ctx.shadowBlur=6; ctx.shadowColor="#a78bfa"; ctx.fill();
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => { cancelAnimationFrame(animationRef.current); window.removeEventListener("resize", resizeCanvas); };
  }, []);

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 xl:px-24 py-24 bg-gradient-to-b from-black to-purple-950 overflow-hidden">
      <canvas ref={canvasRef} className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0" />
      <motion.h2 className="text-white z-10 font-semibold text-3xl sm:text-4xl lg:text-5xl mb-16" initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.8}}>Contact Me</motion.h2>

      <motion.form className="w-full max-w-xl z-10 flex flex-col space-y-5" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.8,delay:0.2}}>
        <input type="text" placeholder="Your Name" className="p-4 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600"/>
        <input type="email" placeholder="Your Email" className="p-4 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600"/>
        <textarea placeholder="Your Message" rows="5" className="p-4 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 resize-none"/>
        <button type="submit" className="bg-violet-600 hover:bg-violet-500 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-violet-600/50">Send</button>
      </motion.form>

      <motion.p className="text-white font-semibold text-xl sm:text-2xl lg:text-3xl mt-20 z-10" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:1,delay:0.4}}>
        tom.koulmann@epitech.eu
      </motion.p>
    </section>
  );
}
