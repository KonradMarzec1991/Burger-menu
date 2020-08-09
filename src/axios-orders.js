import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-new-b13ad.firebaseio.com/'
});

export default instance;