import Vue from "vue";
import axios from "axios";

Vue.use(axios);

const BASE_URL= 'https://termezmuseum.daac.uz/api/v1';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

Vue.prototype.$api = instance

export default instance