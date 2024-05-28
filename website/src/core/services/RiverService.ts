import axios from 'axios';

const RIVER_API_ENDPOINT = 'http://localhost:7890/api/river';

class RiverService {
    getRiverListByName(riverName: string) {
        return axios.get(`${RIVER_API_ENDPOINT + '/search/' + riverName}`);
    }

    getRiverInfoByWikidataId(wikidataId: string) {
        return axios.get(`${RIVER_API_ENDPOINT + '/get/' + wikidataId}`);
    }

    getRiverGeoInfo(riverName: string) {
        return axios.get(`${RIVER_API_ENDPOINT + '/geo/info/' + riverName}`);
    }
}

export default new RiverService();
