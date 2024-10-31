import React from 'react';
import { Image } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import './GalleryGrid.css';

interface GalleryGridProps {
    images: Image[];
    handleLike: (imageId: string) => void;
    handleImageClick: (image: Image) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  images,
  handleLike,
  handleImageClick,
}) => {
  return (
    <div className='gallery-grid'>
      {images.map((image) => (
        <ImageCard
          image={image}
          key={image.id}
          handleLike={() => handleLike(image.id)}
          handleImageClick={handleImageClick}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
