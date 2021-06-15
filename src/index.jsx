import '@/theme.less'
import '@/base.less'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import moment from 'moment'

moment.locale('zh-cn')

const config = require('./config.json')

console.log(`version: ${config.version}`)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
