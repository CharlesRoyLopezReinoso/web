import { Link } from 'react-router-dom';

export default function SensorsTable({ sensors = [] }) {
  if (!sensors || sensors.length === 0) {
    return (
      <div style={{ padding: '20px', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '8px' }}>
        <p>No se encontraron sensores para esta ubicación.</p>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>ID Sensor</th>
            <th>Parámetro</th>
            <th>Última Actualización</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {sensors.map((sensor) => (
            <tr key={sensor.id}>
              <td>{sensor.id}</td>
              <td style={{ fontWeight: 'bold', color: '#0f766e' }}>
                {sensor.parameter?.name || 'Desconocido'} ({sensor.parameter?.units || '-'})
              </td>
              <td>
                {/* Aquí está la magia que repara el error */}
                {sensor.latest?.datetime 
                  ? new Date(sensor.latest.datetime).toLocaleString() 
                  : 'Sin registro'}
              </td>
              <td>
                <Link to={`/sensors/${sensor.id}/measurements`} className="btn-link">
                  Ver Mediciones
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}