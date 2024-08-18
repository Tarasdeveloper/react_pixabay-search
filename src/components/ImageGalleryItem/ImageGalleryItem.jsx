import React from 'react';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <GalleryItem>
      <GalleryImage
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onClick(image.largeImageURL)}
      />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
