import axios from 'axios'

axios.defaults.baseURL = 'https://astra-price-log.herokuapp.com/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')