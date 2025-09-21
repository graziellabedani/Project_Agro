import React, { useState } from 'react';
import BarChart from './components/BarChart';
import './index.css';
import './app.css';

function App() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mostrar, setMostrar] = useState(false);

  const fetchDados = () => {
    setLoading(true);
    fetch('http://localhost:5000/dados')
      .then(res => {
        if (!res.ok) throw new Error('Falha ao buscar dados');
        return res.json();
      })
      .then(json => {
        setDados(json);
        setMostrar(true);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  };

  const agregados = dados.reduce((acc, item) => {
    acc[item.estado] = (acc[item.estado] || 0) + item.quantidade;
    return acc;
  }, {});

  const estados = Object.keys(agregados);
  const quantidades = Object.values(agregados);

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">AgroProject</div>
        <ul className="navbar-links">
          <li><a href="#tabela">Tabela</a></li>
          <li><a href="#grafico">Gráfico</a></li>
        </ul>
      </nav>

      <h1>Visualização do Agronegócio</h1>

      <button onClick={fetchDados} disabled={loading}>
        {loading ? 'Carregando...' : 'Mostrar Dados'}
      </button>

      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

      {mostrar && (
        <>
          <section id="tabela">
            <h2>Tabela de Dados</h2>
            <table>
              <thead>
                <tr>
                  <th>Estado</th>
                  <th>Produto</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {dados.map((d, i) => (
                  <tr key={i}>
                    <td>{d.estado}</td>
                    <td>{d.produto}</td>
                    <td>{d.quantidade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
