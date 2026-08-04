# 🌍 Plataforma de Monitoreo Ambiental - OpenAQ

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

Este proyecto es un Dashboard interactivo desarrollado en **React** que permite consultar el estado general, sensores y mediciones ambientales en tiempo real utilizando la API pública de **OpenAQ (v3)**. 

Desarrollado como proyecto aplicativo de programación web.

## 🚀 Características Principales

* **Arquitectura Moderna:** Construido con React y Vite para un entorno de desarrollo rápido y optimizado.
* **Enrutamiento Dinámico:** Navegación por niveles estructurada con `react-router-dom`:
  * `/locations` ➔ Muestra las estaciones a nivel global.
  * `/locations/:locationId/sensors` ➔ Lista los sensores de una estación específica.
  * `/sensors/:sensorId/measurements` ➔ Despliega el historial de mediciones de un sensor (Ej: PM2.5, Ozono, Temperatura).
* **Capa de Servicios Separada:** Conexión modular a la API de OpenAQ v3, con configuración de Proxy en Vite para omitir restricciones CORS y manejo seguro de API Keys mediante cabeceras HTTP.
* **Diseño Responsivo:** Interfaz adaptable a computadoras, tablets y dispositivos móviles usando CSS3 puro y Media Queries.
* **Tolerancia a Fallos:** Renderizado condicional implementado para evitar bloqueos de la aplicación ante la eventualidad de nodos IoT inactivos en los servidores de OpenAQ.

## 🛠️ Tecnologías Utilizadas

* **Frontend:** React.js (Componentes funcionales, Hooks como `useState`, `useEffect`, `useParams`)
* **Enrutador:** React Router DOM (v6)
* **Empaquetador:** Vite
* **Despliegue Continuo:** GitHub Pages
