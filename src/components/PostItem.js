import { Card } from "antd";
import React, { useCallback, useState } from "react";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

function PostItem({ post }) {
  const [isVisibleComment, setVisibleComment] = useState(false);

  const onComment = useCallback(() => {
    setVisibleComment((prev) => !prev);
  }, []);
  return (
    <>
      <Card
        style={{ marginTop: "40px" }}
        actions={[
          <div onClick={onComment}>댓글({post.Comment.length})</div>,
          <div>삭제</div>,
        ]}
        title={post.User.name}
        extra={post.createAt}
      >
        <Card.Meta description={post.content} />
      </Card>
      {isVisibleComment ? (
        <div>
          <CommentForm />
          <CommentItem post={post} />
        </div>
      ) : null}
    </>
  );
}

export default PostItem;
