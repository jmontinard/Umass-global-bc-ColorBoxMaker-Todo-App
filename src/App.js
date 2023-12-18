import React, { useState } from 'react';
import BoxList from './BoxList';
import TodoList from './TodoList';
import './style.scss'; // Assuming you have a separate CSS file for styles

function App() {
  const [showBoxMaker, setShowBoxMaker] = useState(true);

  const toggleApp = () => {
    setShowBoxMaker(!showBoxMaker);
  };

  return (
    <div className="App">
      <button onClick={toggleApp}>
        Switch to {showBoxMaker ? 'Todo App' : 'Box Maker'}
      </button>
      {showBoxMaker ? <BoxList /> : <TodoList />}
    </div>
  );
}

export default App;
