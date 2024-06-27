// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://20.244.56.144/numbers';
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5NDc5ODYxLCJpYXQiOjE3MTk0Nzk1NjEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImEyNTZmOTZlLTMzYTktNDNmYS1hNmUxLTgzZWM5OTQ0MDk1OSIsInN1YiI6ImhhcnNoMjAyMWNzaW90MDUxQGFiZXNpdC5lZHUuaW4ifSwiY29tcGFueU5hbWUiOiJIYXJzaCIsImNsaWVudElEIjoiYTI1NmY5NmUtMzNhOS00M2ZhLWE2ZTEtODNlYzk5NDQwOTU5IiwiY2xpZW50U2VjcmV0IjoiR2NLdEN3SklLenNEaHp6bCIsIm93bmVyTmFtZSI6IkhhcnNoIFNlbmdhciIsIm93bmVyRW1haWwiOiJoYXJzaDIwMjFjc2lvdDA1MUBhYmVzaXQuZWR1LmluIiwicm9sbE5vIjoiMjEwMjkwMTU1MDAxNSJ9.Xp9eBZagn_-hrg6oyqfO9ybRr1B9de6KXp7IlHcfJlE';
export const fetchNumbers = async (type) => {
    try {
        const response = await axios.get(`${API_URL}/${type}`, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching numbers:', error);
        throw error;
    }
};
