import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export function booking(campingSpotId, startDate, endDate) {
  const token = localStorage.getItem('token');
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  const data = {
    campingSpotId,
    startDate,
    endDate
  };

  return apiClient.post('/bookings', data);
}