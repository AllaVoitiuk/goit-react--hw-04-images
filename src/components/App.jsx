import { useState, useEffect } from 'react';
// import axios from 'axios';
import  Searchbar  from './Searchbar/Searchbar';
import  ImageGallery  from './ImageGallery/ImageGallery';
import styles from './ImageGallery/ImageGallery.module.css';
import  Button  from './Button/Button';
import { Loader } from 'components/Loader/Loader';
import {FetchData} from './FetchData';
// const API_KEY = '31475177-5e18f0fae26a0bf9f0a41710d';

export function App () {
  const [images, setImages] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [loadMoreBtn, setLoadMoreBtn] = useState(false);
  const [status, setStatus] = useState('idle'); //Status.IDLE

  // state = {
  //   images: [],
  //   isLoading: false,
  //   searchValue: '',
  //   page: 1,
  //   loadMoreBtn: false,
  //   status: 'idle', //'idle', 'pending', 'resolved',
  // };

  const handleSearchSubmit = searchValue => {
    // if (prevSearchValue !== searchValue)
    setSearchValue( searchValue); //, page: 1, images: [] 
    setPage(1);
    setImages([]);
  };

  const LoadMore = e => {
    setPage(prevPage => prevPage + 1);
  };

  // const onLoadMoreBtn = loadMoreBtn => {
  //   console.log('onLoadMoreBtn: ' + loadMoreBtn);
  //   // this.setState({ loadMoreBtn });
  //   //setLoadMoreBtn()
  // };

  useEffect (() => {
    if (!searchValue) {
      return;
    }
    
    // if (searchValue !== prevSearchValue || page !== prevPage) {
      //this.setState({ status: 'pending' });
      setStatus('pending');
      let prevImages = images;
      FetchData(page, searchValue).then(newImages=>{
        console.log(newImages);

        if(newImages !== undefined){
          if (newImages.length < 12) {       
            setLoadMoreBtn (false);
          }
          else{
            setLoadMoreBtn (true);
          }      
          
          setImages (prevImages.concat(newImages));
        }
      });     
      
        setStatus ('resolved');
     
  },[page, searchValue])

  // componentDidUpdate(_, prevState) {
  //   const searchValue = this.state.searchValue;
  //   const page = this.state.page;

  //   if (searchValue !== prevState.searchValue || page !== prevState.page) {
  //     //this.setState({ status: 'pending' });
  //     fetchData(page, searchValue);
  //   }
  // }

  // const fetchData = async (page = 1, searchValue = '') => {
  //   // this.setState({ status: 'pending' });
  //   setStatus('pending');

  //   try {
  //     console.log(images);
  //     console.log('searchValue = ' + searchValue + ' page: ' + page);
  //     const response = await axios.get(
  //       `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=31475177-5e18f0fae26a0bf9f0a41710d&image_type=photo&orientation=horizontal&per_page=12`
  //     );
  //     let prevImages = images;
      
  //     let newImages = response.data.hits.map(image =>{
  //       const {id, webformatURL, largeImageURL} = image;
  //       return {id, webformatURL, largeImageURL}});

  //     if (newImages.length < 12) {       
  //       setLoadMoreBtn (false);
  //     }
  //     else{
  //       setLoadMoreBtn (true);
  //     }      
      
  //     setImages (prevImages.concat(newImages));
  //     setStatus ('resolved');       
      
  //   } catch (err) {
  //     console.log(err);
  //     setStatus('rejected');
  //     setLoadMoreBtn (false);
  //   }
  // };

    return (
    <div className={styles.app}>
      <Searchbar onSubmit={handleSearchSubmit} />

      {status === 'idle' && (
        <div className={styles.textBlock}> Enter images name</div>
      )}
      {status === 'rejected' && <h1>{"error.message"}</h1>}

      <ImageGallery images={images} />
      {status === 'pending' && <Loader />}
      {/*  */}
      {loadMoreBtn && <Button clickLoadMore={LoadMore} />}
    </div>
  );
  
}
