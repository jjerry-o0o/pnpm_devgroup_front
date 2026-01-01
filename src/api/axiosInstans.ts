import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'http://localhost:8099/api',
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// TODO: 토큰 관련 로직 추후 추가...

export default axiosApi;