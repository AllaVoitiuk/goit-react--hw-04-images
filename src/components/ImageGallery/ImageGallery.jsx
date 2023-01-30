// import { Component } from 'react';
// import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';
import  ImageGalleryItem  from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({images}) {
  // const images = this.props.images;

  return (
    <ul className={style.gallery}>
      {images &&
        images.map(image => {          
          return <ImageGalleryItem key={image.id} image={image} />;
        })}
    </ul>
  );
  
}

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.number,
//       webformatURL: PropTypes.string,
//       largeImageURL: PropTypes.string,
//     })
//   ).isRequired,
// };
