import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import "./Feed.css";
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      <Post 
        profilePic="https://i.ibb.co/8684kTd/fb-avatar-profile.jpg"
        message="Wow, Tarantino was another level in this movie!"
        timestamp="This is a timestamp"
        username="Thiago Sullivan"
        image="https://bolsanerdhome.files.wordpress.com/2020/02/once-upon-a-time-in-hollywood-1200-1200-675-675-crop-000000.jpg"
      />
      <Post 
        profilePic="https://i.ibb.co/8684kTd/fb-avatar-profile.jpg"
        message="It's impossible to not get emotional watching Interstellar"
        timestamp="This is a timestamp"
        username="Thiago Sullivan"
        image="https://www.magazine-hd.com/apps/wp/wp-content/uploads/2018/10/filmes-espaco-interstellar.jpg"
      />
      <Post />
    </div>
  )
}
export default Feed;