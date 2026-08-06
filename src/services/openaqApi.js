const BASE_URL = '/web/api';
const API_KEY = import.meta.env.VITE_OPENAQ_API_KEY;

const fetchOptions = {
  headers: {
    'X-API-Key': API_KEY, // ¡El error estaba aquí! Era X-API-Key
    'Content-Type': 'application/json'
  }
};

export const openaqApi = {
  getLocations: async (limit = 15) => {
    try {
      const response = await fetch(`${BASE_URL}/locations?limit=${limit}`, fetchOptions);
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
      const response = await fetch(`${BASE_URL}/locations/${locationId}/sensors`, fetchOptions);
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
      const response = await fetch(`${BASE_URL}/sensors/${sensorId}/measurements`, fetchOptions);
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error("Error al obtener mediciones:", error);
      return [];
    }
  }
};