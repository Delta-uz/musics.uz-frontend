import axios from "axios";
import config from "../config";

const api = axios.create({
    baseURL: config.api.url + '/musics'
});

const musicsApi = {
    getAll: () => {
        return api.get('/');
    },
    getById: (id) => {
        return api.get('/' + id);
    },
    create: (music) => {
        return api.post('/', music);
    }
};

export default musicsApi;