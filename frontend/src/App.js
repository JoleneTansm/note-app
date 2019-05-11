import React from 'react';
import Note from './components/Note.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ids: [1, 2, 3, 4]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          My Note Taking app
        </header>

        <div className="NoteContainer">
        {
          this.state.ids.map((id) =>  {
            return <Note key={id} id={id}/>
          })
        }
        </div>

      </div>
    );
  }
}

export default App;
