import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import useInput from "../hooks/useinput";

function CommentForm() {
  const { addPostLoading } = useSelector((state) => state.post);
  const [text, onChangeText] = useInput("");

  const onSubmit = useCallback(() => {
    console.log(text);
  }, [text]);

  return (
    <Form style={{ margin: "10px 0 20px" }} onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="댓글 입력"
      />
      <Button
        type="primary"
        style={{ float: "right" }}
        htmlType="submit"
        loading={addPostLoading}
      >
        등록
      </Button>
    </Form>
  );
}

export default CommentForm;
