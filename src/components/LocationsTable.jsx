import { Link } from 'react-router-dom';

// Le ponemos un valor por defecto (locations = []) por si falla la API
export default function LocationsTable({ locations = [] }) {
  
  // Si no hay datos, mostramos una alerta amigable
  if (!locations || locations.length === 0) {
    return (
      <div style={{ padding: '20px', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '8px' }}>
        <p>⚠️ No se pudieron cargar las ubicaciones. Verifica tu conexión o tu API Key.</p>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Estación</th>
            <th>País</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((loc) => (
            <tr key={loc.id}>
              <td>{loc.id}</td>
              <td>{loc.name}</td>
              <td>{loc.country?.name || 'N/A'}</td>
              <td>
                <Link to={`/locations/${loc.id}/sensors`} className="btn-link">
                  Ver Sensores
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}