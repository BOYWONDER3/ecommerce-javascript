import axios from 'axios'


const apiInstance = axios.create({ baseUrl: "https://localhost:3000",})

export async function getItems() {
    const res = await apiInstance.get('/items')
    return res.data
}