import axios from 'axios'

export const route = 'http://192.168.1.102:3030/api/'
export const eventsRoute = 'event'
export const partnersRoute = 'partners'

export const api = axios.create({
    baseURL: route,
    timeout: 2000,
  });