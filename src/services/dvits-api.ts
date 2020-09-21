import axios from 'axios'
import {IDvit} from "../redux/interfaces/dvits-state";


export class DvitsApi {
    fetchDvits = async (): Promise<Array<IDvit>> => {
        const res = await axios.get('/dvits')
        return res.data
    }
    fetchDvit = async (id: string): Promise<IDvit> => {
        const res = await axios.get(`/dvits?_id=${id}`)
        return res.data[0]
    }
}