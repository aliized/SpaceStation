import axios from 'axios';
import { SERVER_URL } from 'config';

const api = axios.create(
    {
        baseURL: SERVER_URL,
        //baseURL:'https://api.safinefazayi.ir/'
    }
)
export default api