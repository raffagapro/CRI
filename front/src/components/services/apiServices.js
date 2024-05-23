import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const apiService = axios.create({
    baseURL
});

export const userServices = async (url, userData) =>{
    try {
        const response = await apiService.post(url, userData);
        return response.data;
    } catch (error) {
        alert(error.message);
    }
}

export const getAppointments = async(userId) =>{
    try {
        const response = await apiService.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        alert(error.response.data.message);
    }
}

export const cancellAppointment = async(id) =>{
    try {
        const response = await apiService.put(`/appointment/cancelar/${id}`);
        return response.data;
    } catch (error) {
        alert(error.response.data.message);
    }
}