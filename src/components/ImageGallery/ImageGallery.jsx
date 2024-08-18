import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { ImgGallery } from './ImageGallery.styled';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ImgGallery>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
      ))}
    </ImgGallery>
  );
};

export default ImageGallery;
