import axios from "axios";
import { Image } from "./types";

const API_KEY: string = '0xLaDUOY9i6FKLKOFOb_D0iWMpN7LNncHm46KXg3t_Q';
const BASE_URL: string = 'https://api.unsplash.com'


export const fetchImages = async (): Promise<Image[]> => {
    try{
        const res = await axios.get(`${BASE_URL}/photos`, {
            params: {
                client_id :API_KEY
            }
        });
        return res.data
    } catch(e) {
        throw new Error("fetch failed")
    }
}