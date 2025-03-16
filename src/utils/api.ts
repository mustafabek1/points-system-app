import axios from 'axios';
import { PointsResponse} from '../types';

export const fetchPoints = async (userId: string): Promise<PointsResponse> => {
    const response = await axios.get(`http://localhost:3001/api/points/${userId}`);
    return response.data;
};

export const usePoints = async (userId: string, pointsToUse: number): Promise<PointsResponse> => {
    const response = await axios.post(`http://localhost:3001/api/points/${userId}/use`, {
        pointsToUse,
    });
    return response.data;
};