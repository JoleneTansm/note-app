import React from 'react';

class Note extends React.Component {
  render() {
    return (
      <div className="Note">
        <b>ID: { this.props.id } </b>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying 
          out print, graphic or web designs. The purpose of 
          lorem ipsum is to create a natural looking block of text 
          (sentence, paragraph, page, etc.) that doesn't distract from the layout.
          The passage experienced a surge in popularity when it was first
          used on dry-transfer sheets. The passage is attributed 
          to a typesetter back in nineteen ninety eight when the 
          undertaker threw mankind off hеll in a cell, and plummeted 
          sixteen feet through an announcer's table.
        </p>
      </div>
    );
  }
}

export default Note;
