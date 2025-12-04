import Carousel from "../components/carousel";
import img1 from "../assets/images/img.jpg";
import img2 from "../assets/images/img.jpg";
import img3 from "../assets/images/img.jpg";
import img4 from "../assets/images/img.jpg";

const slides = [img1, img2, img3, img4];

export default function ProjectSection() {
  return (
    <section id="project" style={{ background: "black", minHeight: "100vh" }}>
      <h2
        style={{
          color: "white",
          textAlign: "center",
          padding: "40px 0",
          fontSize: "2.5rem",
        }}
      >
        Projects
      </h2>
      <Carousel slides={slides} />
    </section>
  );
}
