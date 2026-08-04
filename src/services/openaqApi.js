// Usamos la URL real completa porque ya no tenemos el proxy de Vite
const BASE_URL = 'https://api.openaq.org/v3';

// Debes poner tu API key real aquí para que funcione en GitHub Pages
const API_KEY = 'ce2a2e81863cd097439a61ab576c6054d06f0abfdf59a7a13cae0bd35cd760ef'; 

// Configuramos las cabeceras obligatorias de OpenAQ
const fetchOptions = {
  headers: {
    'X-AQ-Key': API_KEY,
    'Content-Type': 'application/json'
  }
};

// ... el resto de tus funciones (getLocations, etc.) se quedan igual