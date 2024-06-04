/**
 * axios setup to use mock service
 */

import axios from 'axios';

const axiosServices = axios.create();

axiosServices.defaults.baseURL = process.env.REACT_APP_BACKEND_URL

export default axiosServices;
