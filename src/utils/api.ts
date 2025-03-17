import axios from 'axios';
import { PointsResponse, UsePointsRequest} from '../types';
import { API_BASE_URL } from './constants/constants';


export const fetchPoints = async (userId: string): Promise<PointsResponse> => {
    const response = await axios.get(`${API_BASE_URL}/points/${userId}`);
    return response.data;
};

export const usePoints = async (userId: string, pointsToUse: number): Promise<UsePointsRequest> => {
    const response = await axios.post(`${API_BASE_URL}/points/${userId}/use`, {
        pointsToUse,
    });
    return response.data;
};