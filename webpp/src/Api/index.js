import axios from 'axios'
import getCookie from '../cookies/getCookies';

export const baseURL = 'http://localhost:3030/api/';
export const event = 'event'
export const partner = 'partners'

export const api = axios.create({
    headers: {
        'Authorization': `Bearer ${getCookie('token')}`
    },
    baseURL: baseURL,
    timeout: 2000,
})
