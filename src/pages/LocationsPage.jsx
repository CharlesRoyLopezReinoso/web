import { useEffect, useState } from 'react';
import { openaqApi } from '../services/openaqApi';
import LocationsTable from '../components/LocationsTable';

export default function LocationsPage() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await openaqApi.getLocations();
      setLocations(data);
      setLoading(false);
    };
    fetchLocations();
  }, []);

  if (loading) return <div style={{padding: '30px'}}>Cargando estaciones de OpenAQ...</div>;

  return (
    <div className="page-container">
      
      {/* Encabezado Verde Turquesa */}
      <div className="hero-banner">
        <div>
          <small style={{textTransform: 'uppercase', letterSpacing: '1px'}}>Panel Principal</small>
          <h1>Monitoreo ambiental en tiempo real</h1>
          <p>Explora el estado general de las estaciones registradas y revisa los indicadores clave del sistema OpenAQ.</p>
        </div>
        <div className="badge-active">
          {locations.length} estaciones activas
        </div>
      </div>

      {/* Contenedor de la Tabla */}
      <div className="table-container">
        <h2>Resumen de estaciones</h2>
        <p>Vista rápida de las estaciones más relevantes registradas.</p>
        <LocationsTable locations={locations} />
      </div>

    </div>
  );
}
