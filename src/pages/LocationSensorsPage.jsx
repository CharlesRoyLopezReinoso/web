import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { openaqApi } from '../services/openaqApi';
import SensorsTable from '../components/SensorsTable';

export default function LocationSensorsPage() {
  // Extraemos el ID de la URL
  const { locationId } = useParams();
  const [sensors, setSensors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSensors = async () => {
      const data = await openaqApi.getLocationSensors(locationId);
      setSensors(data);
      setLoading(false);
    };
    fetchSensors();
  }, [locationId]);

  if (loading) return <div style={{padding: '30px'}}>Cargando sensores de la estación...</div>;

  return (
    <div className="page-container">
      
      {/* Botón para regresar */}
      <Link to="/locations" style={{ display: 'inline-block', marginBottom: '20px', color: '#14b8a6', textDecoration: 'none', fontWeight: 'bold' }}>
        ← Volver a Estaciones
      </Link>

      <div className="hero-banner" style={{ background: 'linear-gradient(to right, #1e3a8a, #3b82f6)' }}>
        <div>
          <small style={{textTransform: 'uppercase', letterSpacing: '1px'}}>Nivel 2</small>
          <h1>Sensores de la Estación #{locationId}</h1>
          <p>Selecciona un sensor específico para revisar su historial de mediciones.</p>
        </div>
        <div className="badge-active">
          {sensors.length} sensores
        </div>
      </div>

      <div className="table-container">
        <h2>Listado de Sensores</h2>
        <p>Parámetros ambientales medidos en esta ubicación específica.</p>
        <SensorsTable sensors={sensors} />
      </div>

    </div>
  );
}