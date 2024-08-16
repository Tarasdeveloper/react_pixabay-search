import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '38007224-36f28fb0d2ff305028ad64684';
const options = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal',
});

export const apiService = async (searchValue, page, per_page) => {
  const { data } = await axios.get(
    `${BASE_URL}/?q=${searchValue}&page=${page}&key=${API_KEY}&per_page=${per_page}&${options}`
  );
  return data;
};

// 'https://pixabay.com/api/?key=38007224-36f28fb0d2ff305028ad64684&q=yellow+flowers&image_type=photo'
