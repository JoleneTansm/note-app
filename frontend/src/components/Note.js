import React from 'react';

class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
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
