import { Card, Comment, List } from "antd";
import React from "react";

function CommentItem({ post }) {
  return (
    <List
      header={`${post.Comment.length}κ°μ λκΈ`}
      itemLayout="horizontal"
      dataSource={post.Comment}
      renderItem={(item) => (
        <li>
          <Comment
            author={`${item.User.name} ${item.createAt}`}
            content={item.content}
          />
        </li>
      )}
    />
  );
}

export default CommentItem;
