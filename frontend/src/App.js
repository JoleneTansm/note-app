import React from 'react';
import Note from './components/Note.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          My Note Taking app
        </header>

        <div className="NoteContainer">
          <Note />
        </div>

      </div>
    );
  }
}

export default App;
