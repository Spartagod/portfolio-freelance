import { useState, useEffect } from "react";
import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/2.jpg"
import img3 from "../assets/images/3.jpg"
import img4 from "../assets/images/4.jpg"
import { div } from "framer-motion/client";


const Carousel = () =>{
    const images = [img1, img2, img3, img4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() =>{
            setCurrentIndex(prevIndex =>
                prevIndex === images.length -1 ? 0 : prevIndex +1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full max-w-4xl mx-auto h-[400px]">
            <img
                src={images[currentIndex]}
                alt="Project"
                className="w-full h-full object-cover rounded-lg"
            />
</div>

    )

}

export default Carousel
