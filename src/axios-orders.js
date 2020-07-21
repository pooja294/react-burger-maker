import axios from 'axios';


const instance = axios.create({
 baseURL: 'https://react-burger-project-79e0f.firebaseio.com/'
});


export default instance;