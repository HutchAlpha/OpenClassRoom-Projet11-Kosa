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
            <button className="prev-button" onClick={prevImage}>&lt;</button>
            <button className="next-button" onClick={nextImage}>&gt;</button>
          </>
        )}
    </div>
    );
}

export default Carrousel;