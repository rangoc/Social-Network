import axios from 'axios';
import Post from 'components/post/Post';
import Share from 'components/share/Share';
import React, { useEffect, useState } from 'react';
import './feed.scss';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        'posts/timeline/6086a367d7643d07ffa98cef'
      );
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
