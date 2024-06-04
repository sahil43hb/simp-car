/**
 * Adaptor for axios
 */

import AxiosMockAdapter from 'axios-mock-adapter';
import axios from './axios';
console.log('1234556')
const services = new AxiosMockAdapter(axios, { delayResponse: 0 });
export default services;
