import React, { useEffect, useRef } from "react";
import { Image } from "../../types";
import "./ImageDetails.css";

interface ImageDetailsProps {
  image: Image;
  onClose: () => void;
  handleLike: (imageId: string) => void;
}

const ImageDetails: React.FC<ImageDetailsProps> = ({
  image,
  onClose,
  handleLike,
}) => {
  const imageRef = useRef<HTMLDivElement | null>(null);

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  const clickOutside = (e: MouseEvent) => {
    if (imageRef.current && !imageRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <div className="image-details">
      <div className="modal" ref={imageRef}>
        <div className="content">
          <img
            className="image"
            src={image.urls.regular}
            alt={image.alt_description}
          />
          <div className="info">
            <h2>{image.user.name}</h2>
            <p>{image.description}</p>
            <p>{image.alt_description}</p>
            <button
              className="like-button"
              onClick={() => handleLike(image.id)}
            >
              ❤️ {image.likes} likes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
