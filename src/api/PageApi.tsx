import axios from 'axios';
import { PageContext } from '../App';
import { useContext } from 'react';
const PageAPI = () => {
    const {pageNo} =  useContext(PageContext);
    try {
    const response = axios.get(`https://fakestoreapi.in/api/products?page=${pageNo}&limit=50`);
    console.log(response);
    return response;
  } catch (error) {
    console.log('Error:',error);
  }
}
export default PageAPI;