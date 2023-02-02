import axios from 'axios';

export const FetchData = async (page = 1, searchValue = '') => {
  try {
    //console.log('searchValue = ' + searchValue + ' page: ' + page);
    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=31475177-5e18f0fae26a0bf9f0a41710d&image_type=photo&orientation=horizontal&per_page=12`
    );

    let newImages;
    newImages = response.data.hits.map(image => {
      const { id, webformatURL, largeImageURL } = image;
      return { id, webformatURL, largeImageURL };
    });

    //console.log(newImages);
    return newImages;
  } catch (err) {
    console.log(err);

    return undefined;
  }
};
