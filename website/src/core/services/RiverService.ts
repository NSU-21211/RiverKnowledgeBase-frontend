import axios from 'axios'

const RIVER_API_ENDPOINT = 'http://localhost:7875/api/river'

class RiverService {
	getRiverListByName(riverName: string) {
		return axios.get(`${RIVER_API_ENDPOINT + /search/ + riverName}`)
	}
}

export default new RiverService()
