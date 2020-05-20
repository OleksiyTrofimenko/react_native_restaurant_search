import axios from 'axios';

export const getPlaceholderJSON = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/2'
  );
};

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer FctO4E6H6uPPc3EMGXjl6q7mbLClKp-jXBQIzWPiroVZTpxZClcbQdUzBVohnUnrFHVK2oRStfbMWbMEklvppy5bW9m_I8d69djbb1d3V-uUVerjkAtWOR1CvCjFXnYx',
  },
});

// example of file usage
// yelp.get('/search');
