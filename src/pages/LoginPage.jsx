import { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: { email, password },
      });
      if (response.data.length > 0) {
        alert('Login bem-sucedido!');
      } else {
        setError('Email ou senha incorretos.');
      }
    } catch (err) {
        console.loog(err);
      setError('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>Login</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;