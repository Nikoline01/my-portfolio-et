import { useState, useEffect } from "react";

export default function AboutItem() {
  const images = [
    "./img/miget.JPG",
    "/img/migto.JPG",
    "/img/migtrer.JPG",
    "/img/migfire.JPG",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="about">
      <h1>ABOUT</h1>
      <div className="info">
        <p>
          Hello! I am Nikoline Holm, a 3rd semester multimediadesign student at
          Business Academy Aarhus. I am passionate about my education because,
          it allows me to combine creativity with technical skills. Outside of
          my studies I love to travel and explore new places, and I enjoy
          capturing special moments through a camera. Feel free to explore my
          portfolio and browse through my previous work.
        </p>
        <div className="profile-photo">
          <img
            src={images[currentImageIndex]}
            alt={`profil-billede-${currentImageIndex + 1}`}
          />
        </div>
      </div>
    </div>
  );
}
