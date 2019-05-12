import React from 'react';
import axios from 'axios';
import Note from './components/Note.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ids: [1, 2, 3, 4],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3001/all')
      .then((res) => {
        this.setState({ids: res.data});
      });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          My Note Taking app
        </header>

        <form onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Save" />
        </form>

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
