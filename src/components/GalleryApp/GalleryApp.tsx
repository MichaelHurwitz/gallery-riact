import { useEffect, useState } from 'react';
import { Image } from '../../types';
import { fetchImages } from '../../unsplash'; // קריאה ל-API חיצוני
import GalleryGrid from '../GalleryGrid/GalleryGrid';
import AddImageForm from '../AddImageForm/AddImageForm';
import ImageDetails from '../ImageDetails/ImageDetails';
import './GalleryApp.css';

const GalleryApp = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchImages();
        setImages(data);
      } catch {
        setError('Failed to load images');
      }
    };
    loadImages();
  }, []);

  const handleLike = (imageId: string)=>{
    let tempArr = [...images];
    let changeObj = tempArr.find((img) => img.id === imageId);
    if (changeObj) changeObj.likes += 1;
    else return;
    setImages([...tempArr]);
  };


  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const addImage = (newImage: Image) => {
    setImages((prevImages) => [...prevImages, newImage]);
  };

  return (
    <div className="gallery-app">
      <header>
        <h1>My Gallery App</h1>
      </header>

      <AddImageForm addImage={addImage} />

      <main className="main">
        {error ? <p>{error}</p> : (
          <GalleryGrid
            images={images}
            handleLike={handleLike}
            handleImageClick={handleImageClick}
          />
        )}
        {selectedImage && (
          <ImageDetails
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            handleLike={handleLike}
          />
        )}
      </main>
    </div>
  );
};

export default GalleryApp;
