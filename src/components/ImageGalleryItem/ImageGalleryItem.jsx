// import { Component } from 'react';
import PropTypes from 'prop-types';
import  Modal from '../Modal/Modal';
import styles from './ImageGalleryItem.module.css';

import { useState } from "react";

export default function ImageGalleryItem ({image}) {
   const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   console.log(useEffect);
  // }),[showModal];
// }

// export class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };


  //setshowModal = () => {
    // setShowModal (!showModal);
  //};

  // render() {
  //   const { image } = this.props;
    return (
      <>
        <li
          className={styles.gallery_item}
          id={image.id}
          onClick={setShowModal}
        >
          <img
            className={styles.galleryItem_image}
            src={image.webformatURL}
            alt="text"
          />
        </li>
       {showModal && (
          <Modal
            onClose={() =>{
              setShowModal(!showModal);
            }}
            imageURL={image.largeImageURL}
          ></Modal>
        )}
      </>
    );
  }
// }

ImageGalleryItem.propTypes = { 
  image: PropTypes.object.isRequired
};
