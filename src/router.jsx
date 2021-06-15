import { SettingOutlined } from '@ant-design/icons'

import TestPage from '@/pages/test-page'

export default () => {
  return [
    {
      title: 'TEST-PAGE',
      key: 'TEST',
      Icon: SettingOutlined,
      routes: [
        {
          path: '/test-page',
          Component: TestPage,
          name: 'TEST-PAGE-ITEM'
        }
      ]
    }
  ]
}
