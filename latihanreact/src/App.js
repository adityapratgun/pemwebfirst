import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Akbar');

  return (
    <div className="App">
      <div className="container">
        <h1>Latihan React - Dasar</h1>

        {/* 1. Counter (State Dasar) */}
        <div className="card">
          <p className="card-title">1. Counter (State Dasar)</p>
          <p className="counter-text">Angka saat ini: <strong>{count}</strong></p>
          <div className="button-group">
            <button className="btn btn-blue" onClick={() => setCount(count + 1)}>Tambah (+)</button>
            <button className="btn btn-blue" onClick={() => setCount(count - 1)}>Kurang (-)</button>
            <button className="btn btn-blue" onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>

        {/* 2. Input & Greeting */}
        <div className="card">
          <p className="card-title">2. Input & Greeting</p>
          <p className="greeting-text">Halo, <strong>{name}!</strong></p>
          <input 
            type="text" 
            className="styled-input" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
