import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { useState, useEffect } from 'react';

import moment from 'moment';


function App() {

  const [posts, setPosts] = useState([]);

  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children
          .map(obj => obj.data);

        setPosts(newPosts);
      });
  }, []);


  return (
    <div>
        {
          posts.map(eachPost => (
            <Post
              name={eachPost?.title}
              postText={eachPost?.title}
            />
          ))
        }
      </div>
      )
}

      let Post = ({profilePhoto, name, postDate, postText, postImage}) => (
      <div className='post'>
        <div className='postHeader'>
          {(profilePhoto) ? <img className='profilePhoto' src={profilePhoto} alt="profile" /> : null}
          <div>
            {name} <br />
            {moment(postDate).fromNow()}
          </div>
        </div>

        <div className='postText'>
          {postText}
        </div>
        {
          (postImage) ?
            <img className='postImage' src={postImage} alt="post" /> : null
        }

        <hr />
        <div className='postFooter'>
          <div> like </div>
          <div> comment</div>
          <div> share</div>
        </div>
        <hr />

      </div>
      );


      ReactDOM.render(<App />, document.getElementById('root'));





