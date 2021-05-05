import Post from 'components/post/Post';
import Share from 'components/share/Share';
import React from 'react';
import './feed.scss';
import { Posts } from '../../dummyData';
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
