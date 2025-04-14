import Header from '../components/Header';
import { Link } from 'react-router-dom';

function HomePage() {
  const cakes = ['Bolo de Chocolate', 'Bolo de Morango', 'Bolo de Baunilha'];

  return (
    <>
      <Header />
      <div className="container">
        <h2>Bem-vindo à Loja de Bolos!</h2>
        <h3>Nossos Bolos:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cakes.map((cake, index) => (
            <li key={index} style={{ padding: '5px 0', fontSize: '1.1rem' }}>
              {cake}
            </li>
          ))}
        </ul>
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <button style={{ width: '100%' }}>Ir para o Carrinho</button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;