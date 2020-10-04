import React from 'react';
import './App.css';

// import components
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header>
        <h1>multilife</h1>
      </header>
        <h2>Ever feel like you're living a double life? Triple life? We get you. </h2>
        <h3>Efficiently manage all of your tasks in one place so you can stay on top of the game as the boss that you are. ;D</h3> 
      <Form />
    </div>
  );
}

export default App;