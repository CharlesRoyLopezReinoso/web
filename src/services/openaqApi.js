const BASE_URL = 'https://api.openaq.org/v3';
const API_KEY = 'ce2a2e81863cd097439a61ab576c6054d06f0abfdf59a7a13cae0bd35cd760ef';

export const openaqApi = {
  getLocations: async (limit = 15) => {
    try {
      // Usamos un proxy alternativo y mandamos la API Key en la URL con &api_key=
      const targetUrl = `${BASE_URL}/locations?limit=${limit}&api_key=${API_KEY}`;
      const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(targetUrl)}`);
      
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error("Error al obtener ubicaciones:", error);
      return [];
    }
  },

  getLocationSensors: async (locationId) => {
    try {
      const targetUrl = `${BASE_URL}/locations/${locationId}/sensors?api_key=${API_KEY}`;
      const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(targetUrl)}`);
      
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error("Error al obtener sensores:", error);
      return [];
    }
  },

  getSensorMeasurements: async (sensorId) => {
    try {
      const targetUrl = `${BASE_URL}/sensors/${sensorId}/measurements?api_key=${API_KEY}`;
      const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(targetUrl)}`);
      
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error("Error al obtener mediciones:", error);
      return [];
    }
  }
};