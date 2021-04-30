import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import React from 'react';
import "./MessageSender.css"
import { green, orange, red } from '@material-ui/core/colors';

function MessageSender() {
  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input 
            className="messageSender__input"
            placeholder={`What's on your mind`}
          />
          <input placeholder="image URL (Optional)"/>
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: red }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: green }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: orange }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;