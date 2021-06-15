import React, { useState, useEffect, useMemo } from 'react'
import { hot } from 'react-hot-loader/root'
import { Layout, Menu } from 'antd'
import router from '@/router'
import { useHistory, useLocation } from 'react-router'
import store from '@/store'
import Content from './Content'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
import Login from '@/component/login'

const { SubMenu } = Menu
const { Sider } = Layout

const App = () => {
  const history = useHistory()
  const location = useLocation()
  const [permission, setPermission] = useState(false)

  let permissionLocal = localStorage.getItem('permission') ? true : false

  const [state, setState] = useState({ staffList: [] })

  const changeValue = () => {
    setPermission(true)
    localStorage.permission = true
  }

  useEffect(() => {}, [])

  const routers = useMemo(() => {
    return router()
  }, [])

  // eslint-disable-next-line react/prop-types
  const renderSub = ({ Icon, key, title, routes = [] }) => {
    if (!routes.length) return null

    return (
      <SubMenu key={key} icon={<Icon />} title={title}>
        {routes.map(({ path, name }) => (
          <Menu.Item key={path}>{name}</Menu.Item>
        ))}
      </SubMenu>
    )
  }

  if (!permission && !permissionLocal) {
    return <Login changeValue={changeValue} />
  }

  return (
    <ConfigProvider locale={zhCN}>
      <store.Provider value={[state, setState]}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider className="sider">
            <a href="/" className="logo">
              TEST
            </a>
            <Menu
              defaultOpenKeys={['API', 'Member', 'Category', 'Admin']}
              onClick={({ key }) => history.push(key)}
              theme="dark"
              selectedKeys={[location.pathname]}
              mode="inline"
            >
              {routers.map(renderSub)}
            </Menu>
          </Sider>
          <Content routers={routers} userInfo={'test-user'} />
        </Layout>
      </store.Provider>
    </ConfigProvider>
  )
}

export default hot(App)
