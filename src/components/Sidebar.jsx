import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-header">
          <span className="logo-badge">AQ</span>
          <div>
            <h3 style={{fontSize: '1.1rem'}}>OpenAQ</h3>
            <small style={{color: '#9ca3af', fontSize: '0.75rem'}}>Panel ambiental</small>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Inicio
          </Link>
          <Link to="/locations" className={location.pathname.includes('/locations') ? 'active' : ''}>
            Estaciones
          </Link>
          <Link to="/cards" className={location.pathname === '/cards' ? 'active' : ''}>
            Cards
          </Link>
        </nav>
      </div>

      <div className="sidebar-footer">
        <p>Aplicaciones Telemáticas</p>
        <p>UTEQ</p>
      </div>
    </aside>
  );
}