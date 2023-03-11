import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wave from './Components/Wave';

function App() {

  const waves = [
  
    { color: 'lightblue', height: 100, width: 800, speed: 0.01 },
    { color: 'skyblue', height: 150, width: 800, speed: 0.02 },
  ];
  return (
    <div className="App">
      <div>
        <h1>Sertifiket</h1>
        <p>All your ownership at one place.</p>
        <div style={{
          position: 'relative', 
          height: '17vh', overflow: 'hidden'
        }}>
          {waves.map((wave, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                bottom: 0,
                zIndex: waves.length - index,
                width: '100%',
              }}
            >
              <Wave color={wave.color} height={wave.height} width={wave.width} speed={wave.speed} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
