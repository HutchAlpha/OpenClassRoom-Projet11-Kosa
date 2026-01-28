import React from 'react';

//!Gestion des images
function Carrousel({ images }) {
      const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    
      const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      }
      
      const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    
    return (
    <div className="ImgPresentationDetail">
        <img src={images[currentImageIndex]} alt="Background" className="BackgroundImg" />
        {images.length > 1 && (
          <>
            <button className="prev-button" onClick={prevImage}>
              <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
              </svg>
            </button>
            <button className="next-button" onClick={nextImage}>
              <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
              </svg>
            </button>
            <span className="carousel-counter">{currentImageIndex + 1}/{images.length}</span>
          </>
        )}
    </div>
    );
}

export default Carrousel;