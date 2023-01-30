import axios from 'axios';
//images,  setStatus, setImages, setLoadMoreBtn,
export const FetchData = async ( page = 1, searchValue = '') => {
    // const [status, setStatus] = useState('idle'); //Status.IDLE
    // let images;
    // this.setState({ status: 'pending' });
    // setStatus('pending');
    
    try {    
      console.log('searchValue = ' + searchValue + ' page: ' + page);
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=31475177-5e18f0fae26a0bf9f0a41710d&image_type=photo&orientation=horizontal&per_page=12`
      );
    //   let prevImages = images;
    let newImages;
    newImages = response.data.hits.map(image =>{
        const {id, webformatURL, largeImageURL} = image;
        return {id, webformatURL, largeImageURL}});
        
        console.log(newImages);
        return newImages;

    //   if (newImages.length < 12) {       
    //     setLoadMoreBtn (false);
    //   }
    //   else{
    //     setLoadMoreBtn (true);
    //   }      
      
    //   setImages (prevImages.concat(newImages));
    //   setStatus ('resolved');       
      
    } catch (err) {
      console.log(err);

      return undefined;
    //   setStatus('rejected');
    //   setLoadMoreBtn (false);
    }
    
  };