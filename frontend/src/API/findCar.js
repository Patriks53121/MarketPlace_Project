import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

async function FindCar(id) {
    try {
        const response = await apiClient.get(`/list/${id}`);
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export default FindCar;