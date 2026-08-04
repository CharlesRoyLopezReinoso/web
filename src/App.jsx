import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationsPage from './pages/LocationsPage';
import LocationSensorsPage from './pages/LocationSensorsPage';
import SensorMeasurementsPage from './pages/SensorMeasurementsPage';
import Sidebar from './components/Sidebar'; // Asumiendo que crearás este componente
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/locations" element={<LocationsPage />} />
            { /* Rutas dinámicas con parámetros */ }
            <Route path="/locations/:locationId/sensors" element={<LocationSensorsPage />} />
            <Route path="/sensors/:sensorId/measurements" element={<SensorMeasurementsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;