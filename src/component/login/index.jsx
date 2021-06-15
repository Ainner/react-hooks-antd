import React, { useState, useEffect, useMemo } from 'react'
import { Form, Input, Button, Checkbox, Alert } from 'antd'
import './index.less'
import PropTypes from 'prop-types'

const Login = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const onFinish = (values) => {
    setIsOpen(true)
    setTimeout(() => {
      props.changeValue(true)
    }, 1000)
  }
  const onFinishFailed = (values) => {
    console.log(values)
  }
  return (
    <Form
      name="login"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>记住账号密码</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
      {isOpen ? <Alert message="登录成功" type="success" /> : null}
    </Form>
  )
}

Login.propTypes = {
  changeValue: PropTypes.func
}

export default Login
