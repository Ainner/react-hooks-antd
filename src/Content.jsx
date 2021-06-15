import React from 'react'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import home from '@/pages'

const { Content } = Layout

const MyContent = ({ routers = [], userInfo }) => {
  return (
    <Content style={{ marginLeft: 200 }} className="content">
      <Switch>
        <Route component={home} path="/" exact />
        {routers.map(({ routes }) =>
          routes.map(({ name, Component, path }) => (
            <Route
              exact
              key={path}
              path={path}
              render={() => (
                <div>
                  <div className="header">
                    <span className="content-name">{name}</span>
                    <span className="user">
                      <UserOutlined />{' '}
                      <span className="user-name">{userInfo}</span>
                    </span>
                  </div>
                  <div className="side-content">
                    <div className="side-content-item">
                      <div className="component-item">{<Component />}</div>
                    </div>
                  </div>
                </div>
              )}
            />
          ))
        )}
      </Switch>
    </Content>
  )
}

MyContent.propTypes = {
  routers: PropTypes.array,
  userInfo: PropTypes.string
}

export default React.memo(MyContent)
