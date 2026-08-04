import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { openaqApi } from '../services/openaqApi';
import MeasurementsTable from '../components/MeasurementsTable';

export default function SensorMeasurementsPage() {
  const { sensorId } = useParams();
  const navigate = useNavigate(); // Herramienta para hacer un botón de "Atrás"
  const [measurements, setMeasurements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeasurements = async () => {
      const data = await openaqApi.getSensorMeasurements(sensorId);
      setMeasurements(data);
      setLoading(false);
    };
    fetchMeasurements();
  }, [sensorId]);

  if (loading) return <div style={{padding: '30px'}}>Cargando el historial de mediciones...</div>;

  return (
    <div className="page-container">
      
      {/* Botón dinámico para regresar a la pantalla anterior */}
      <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', marginBottom: '20px', color: '#14b8a6', fontWeight: 'bold', fontSize: '1rem' }}>
        ← Regresar
      </button>

      <div className="hero-banner" style={{ background: 'linear-gradient(to right, #7c3aed, #a855f7)' }}>
        <div>
          <small style={{textTransform: 'uppercase', letterSpacing: '1px'}}>Nivel 3</small>
          <h1>Mediciones del Sensor #{sensorId}</h1>
          <p>Historial detallado de las últimas lecturas ambientales procesadas.</p>
        </div>
        <div className="badge-active">
          {measurements.length} registros
        </div>
      </div>

      <div className="table-container">
        <h2>Historial de Mediciones</h2>
        <MeasurementsTable measurements={measurements} />
      </div>

    </div>
  );
}