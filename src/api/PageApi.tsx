import axios from 'axios';
const PageAPI = (pageNo ) => {
  console.log(pageNo, 'pageNo')

  try {
    const response = axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`);
    console.log(response, 'res');
    return response;
  } catch (error) {
    console.log('Error:', error);
  }
}
export default PageAPI;