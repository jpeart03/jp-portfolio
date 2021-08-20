import { useState } from "preact/hooks";
import "./styles.scss";
import chevron from "../../../public/assets/chev.png";

const ImageSlider = ({ images }) => {
  const touchTrigger = 50;
  const maxImagesIndex = images.length - 1;
  const [imageIndex, setImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handlePrevImg = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(maxImagesIndex);
    }
  };

  const handleNextImg = () => {
    if (imageIndex < maxImagesIndex) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };

  const handleSquareClick = (idx) => {
    setImageIndex(idx);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.changedTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchEnd !== 0) {
      if (touchStart - touchEnd > touchTrigger) {
        handleNextImg();
      }
      if (touchStart - touchEnd < touchTrigger * -1) {
        handlePrevImg();
      }
    }
    // resetting touch state to prevent previous event carry over
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="slider-image">
      <img
        className="feature-image"
        src={images[imageIndex]}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      {images.length > 1 && (
        <div>
          <div className="slider-image__action-left" onClick={handlePrevImg}>
            <img src={chevron} />
          </div>
          <div className="slider-image__action-right" onClick={handleNextImg}>
            <img src={chevron} />
          </div>
          <div className="slider-image__indicators">
            {images.map((_, idx) => (
              <div
                onClick={() => handleSquareClick(idx)}
                className={`image-indicator ${
                  idx === imageIndex ? "active" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
