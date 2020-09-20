import axios from 'axios'
import {ITrend} from "../redux/interfaces/trends-state"



export class TrendsApi {
    fetchTrends = async (): Promise<Array<ITrend>> => {
        const res = await axios.get('/trends')
        return res.data
    }

}