import React from 'react';
import './post.scss';
import { MoreVert } from '@material-ui/icons';
const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpeg"
              alt="author of post"
            />
            <span className="postUsername">Dev Kappa</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert style={{ cursor: 'pointer' }} />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey It's my first post :)</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="like" />
            <img src="/assets/heart.png" alt="heart" />
            <span className="postLikeCounter">32 people like this</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
