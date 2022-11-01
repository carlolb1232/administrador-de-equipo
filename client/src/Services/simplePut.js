import axios from 'axios';

export const simplePut = (id, object) =>{
  const response = axios.put(`http://localhost:8000/api/players/${id}`, object)
  return response;
}