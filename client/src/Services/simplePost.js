import axios from 'axios';

export const simplePost = (object) => {
  const response = axios.post(`http://localhost:8000/api/players/`,object);
  return response;
}