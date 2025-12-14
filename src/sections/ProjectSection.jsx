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
      className="h-screen bg-gradient-to-b from-black via-purple-950 to-black flex flex-col items-center justify-center px-10 xl:px-24 overflow-hidden"
    >
      {/* Titre */}
      <h2 className="text-white text-center text-4xl font-semibold mb-12">
        Projects
      </h2>

      {/* Carrousel */}
      <div className="w-full relative z-10 shadow-2xl shadow-purple-700/50 rounded-xl">
        <Carousel slides={slides} />
      </div>
    </section>
  );
}
