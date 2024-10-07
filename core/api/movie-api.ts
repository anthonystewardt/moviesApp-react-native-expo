import axios from 'axios';
import Constants from 'expo-constants';

export const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    language: 'es-ES',
    api_key: "8de0f604ebee904c52ef16be52e8ccee",
  },
});