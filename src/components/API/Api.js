import axios from 'axios';
const URL = 'https://dummyjson.com/posts';
export const limit = 10;

export const apiNews = page => axios.get(`${URL}?limit=${limit}&skip=${page}`);

export const apiItemNews = newsID => axios.get(`${URL}/${newsID}`);

export const apiSearchNews = query => axios.get(`${URL}/search?q=${query}`);
