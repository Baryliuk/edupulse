import axios from "axios";
import type { Course } from "../types/course";

const apiClient = axios.create({
    baseURL: 'https://697f569dd1548030ab65c59d.mockapi.io/courses',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getCourses = async (): Promise<Course[]> => {
    const response = await apiClient.get<Course[]>('/');
    return response.data;
}
