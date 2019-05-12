import React from 'react';
import axios from 'axios';

class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/note/${ this.props.id }`)
      .then((res) => {
        this.setState({text: res.data})
      })
  }

  render() {
    return (
      <div className="Note">
        <b>ID: { this.props.id } </b>
        <p>
          { this.state.text }
        </p>
      </div>
    );
  }
}

export default Note;
