import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationsPage from './pages/LocationsPage';
import LocationSensorsPage from './pages/LocationSensorsPage';
import SensorMeasurementsPage from './pages/SensorMeasurementsPage';
import Sidebar from './components/Sidebar'; 
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/:locationId/sensors" element={<LocationSensorsPage />} />
            <Route path="/sensors/:sensorId/measurements" element={<SensorMeasurementsPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;