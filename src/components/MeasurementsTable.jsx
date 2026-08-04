export default function MeasurementsTable({ measurements = [] }) {
  if (!measurements || measurements.length === 0) {
    return (
      <div style={{ padding: '20px', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '8px' }}>
        <p>No hay mediciones recientes registradas para este sensor.</p>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Fecha y Hora</th>
            <th>Valor Registrado</th>
            <th>Unidad</th>
          </tr>
        </thead>
        <tbody>
          {measurements.map((m, index) => (
            <tr key={index}>
              <td>
                {m.period?.datetimeTo?.utc 
                  ? new Date(m.period.datetimeTo.utc).toLocaleString() 
                  : 'Fecha desconocida'}
              </td>
              <td style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{m.value ?? 'N/A'}</td>
              <td style={{ color: '#6b7280' }}>{m.parameter?.units || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}