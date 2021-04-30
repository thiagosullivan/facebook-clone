import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story 
        image="https://i.ibb.co/9wDSBXq/scorsese-goodfellas.jpg"
        profileSrc="https://i.ibb.co/vH1sbym/fb-avatar-martin-scorsese.jpg"
        title="Martin Scorsese"
      />
      <Story 
        image="https://i.ibb.co/XpcY8SN/tarantino-inglourious-basterds.jpg"
        profileSrc="https://i.ibb.co/QNzp7bP/fb-avatar-quentin-tarantino.jpg"
        title="Quentin Tarantino"
      />
      <Story 
        image="https://i.ibb.co/m8M8740/nolan-interstellar.jpg"
        profileSrc="https://i.ibb.co/pvNfwjb/fb-avatar-christopher-nolan.jpg"
        title="Christopher Nolan"
      />
      <Story 
        image="https://i.ibb.co/PNJB0d9/george-lucas-a-new-hope.jpg"
        profileSrc="https://i.ibb.co/7RhtrV1/fb-avatar-george-lucas.jpg"
        title="George Lucas"
      />

    </div>
  )
}

export default StoryReel;