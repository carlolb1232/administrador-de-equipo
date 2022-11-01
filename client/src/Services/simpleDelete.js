import axios from 'axios';

export const simpleDelete = (id) => {
  const response = axios.delete(`http://localhost:8000/api/players/${id}`)
  return response;
}