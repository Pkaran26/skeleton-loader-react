import React from 'react';
import './App.css';
import Blog from './Components/Blog/Blog'

function App() {
  return (
    <div className="App container">
      <div className="row" style={{ marginTop: '25px' }}>
        <div className="col-lg-8">
          <Blog />
        </div>
      </div>
    </div>
  );
}

export default App;
