import Axios from 'axios';

const Api = Axios.create({
    baseURL:"http://localhost:3300"
});  


export default Api;