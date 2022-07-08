import axios from 'axios'

export const route = 'http://10.2.170.39:3030/api/'
export const eventsRoute = 'event'
export const partnersRoute = 'partners'

export const api = axios.create({
    baseURL: route,
    timeout: 1000,
  });