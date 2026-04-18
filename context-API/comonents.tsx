import React from 'react';
import { CounterProvider } from './CounterContext';
import { Display } from './Components';

function App() {
  return (
    <CounterProvider>
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Context API Assignment</h1>
        <Display />
      </div>
    </CounterProvider>
  );
}

export default App;