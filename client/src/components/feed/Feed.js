import axios from 'axios';
import Post from 'components/post/Post';
import Share from 'components/share/Share';
import React, { useEffect, useState } from 'react';
import './feed.scss';

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get('/posts/timeline/6086a367d7643d07ffa98cef');
      setPosts(data);
    };
    fetchPosts();
  }, [username]);
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
