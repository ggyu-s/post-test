import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import useInput from "../hooks/useinput";

function ContentText() {
  const [text, onChangeText] = useInput("");

  const onSubmit = useCallback(() => {}, []);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="포스트 입력"
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

export default ContentText;
