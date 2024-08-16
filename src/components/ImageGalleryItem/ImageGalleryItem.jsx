import React from 'react';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image }) => {
  return (
    <GalleryItem>
      <GalleryImage src={image.webformatURL} alt={image.tags} />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
