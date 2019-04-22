import Axios from "axios";
import { notification } from "antd";

import { API_URL } from "../defaults";

import * as URLS from "./urls";

export { URLS };

const api = Axios.create({ baseURL : API_URL });

api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response && error.response.status === 500) {
        notification.error({
            message     : "Something happened",
            description : "There was an error connecting to the server, please try again later!",
        });
    }
    return Promise.reject(error);
});

export default api;