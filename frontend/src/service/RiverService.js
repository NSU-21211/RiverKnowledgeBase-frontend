import axios from 'axios'

const RIVER_API_URL = 'http://localhost:7875/api'

class RiverService {
    getRivers() {
        return axios.get(`${RIVER_API_URL}/river/`)
    }

    searchRiver(name) {
        return axios.get(`${RIVER_API_URL}/river/search/${name}`);
    }

    getRiver(name) {
        return axios.get(`${RIVER_API_URL}/river/get/${name}`);
    }
}

export default new RiverService()