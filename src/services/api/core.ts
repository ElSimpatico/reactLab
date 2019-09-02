/** Third-party imports */
import Axios from 'axios';

export default Axios.create({
    baseURL: `${process.env.HOST}:${process.env.PORT}/api/rest`,
    responseType: 'json'
});
