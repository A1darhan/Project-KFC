import React from "react";
import { Button, Form, Input } from "antd";

export default function LoginForm({ onLogClick }) {
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onLogClick}
      >
        <Form.Item
          label="Имя:"
          name="username"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите свой логин!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль:"
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите пароль!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="buttonBuy" htmlType="submit">
            Авторизоваться
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
