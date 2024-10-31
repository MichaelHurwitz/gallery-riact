import React from "react";
import { Image } from "../../types";
import "./ImageCard.css";

interface ImageCardProps {
  image: Image;
  handleLike: (imageId: string) => void;
  handleImageClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  handleLike,
  handleImageClick,
}) => {
  return (
    <div
      className="image-card"
      onClick={() => handleImageClick(image)}
    >
      <div className="image-wrapper">
        <img
          className="image"
          src={image.urls.small}
          alt={image.alt_description}
          title={image.alt_description}
        />
      </div>
      <div className="image-details-div">
        <span className="user-name">{image.user.name}</span>
        <button
          className="like-button"
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            handleLike(image.id);
          }}
        >
          <span className="heart">❤️</span>
          <span className="likes-count">{image.likes}</span>
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
