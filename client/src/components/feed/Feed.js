import Post from 'components/post/Post';
import Share from 'components/share/Share';
import React from 'react';
import './feed.scss';
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
