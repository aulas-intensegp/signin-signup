import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ 
      backgroundColor: '#4682b4', 
      padding: '10px', 
      textAlign: 'center', 
      marginBottom: '20px' 
    }}>
      <Link to="/Home" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>
        Home
      </Link>
      <Link to="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>
        Login
      </Link>
      <Link to="/signup" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>
        Cadastro
      </Link>
    </nav>
  );
}

export default Header;