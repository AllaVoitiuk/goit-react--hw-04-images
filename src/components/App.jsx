import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import styles from './ImageGallery/ImageGallery.module.css';
import Button from './Button/Button';
import { Loader } from 'components/Loader/Loader';
import { FetchData } from './FetchData';
// const API_KEY = '31475177-5e18f0fae26a0bf9f0a41710d';

export function App() {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [status, setStatus] = useState('idle'); //Status.IDLE

  const handleSearchSubmit = searchValue => {
    setSearchValue(searchValue); //, page: 1, images: []
    setPage(1);
    setImages([]);
  };

  const LoadMore = e => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (!searchValue) {
      return;
    }

    setStatus('pending');
    let prevImages = images;

    FetchData(page, searchValue).then(newImages => {
      console.log(newImages);

      if (newImages !== undefined) {
        if (newImages.length < 12) {
          setLoadMoreBtn(false);
        } else {
          setLoadMoreBtn(true);
        }

        setImages(prevImages.concat(newImages));
      }
    });

    setStatus('resolved');
    // eslint-disable-next-line
  }, [page, searchValue]);

  return (
    <div className={styles.app}>
      <Searchbar onSubmit={handleSearchSubmit} />

      {status === 'idle' && (
        <div className={styles.textBlock}> Enter images name</div>
      )}
      {status === 'rejected' && <h1>{'error.message'}</h1>}

      <ImageGallery images={images} />
      {status === 'pending' && <Loader />}
      {/*  */}
      {loadMoreBtn && <Button clickLoadMore={LoadMore} />}
    </div>
  );
}
