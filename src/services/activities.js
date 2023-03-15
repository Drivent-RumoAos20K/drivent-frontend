import api from '../services/api';

export async function getActivities(dayId, token) {
  return await api.get(`activities/${dayId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
