import axios from 'axios'
import { message } from 'antd'

function error(error) {
  if (axios.isCancel(error)) {
    return Promise.reject(error)
  }
  const { response } = error
  message.error(JSON.stringify({ error: response }, null, 4))
  return Promise.reject(error)
}

const requestConfig = {
  baseURL: 'baseurl',
  method: 'post',
  withCredentials: true,
  timeout: 15000
}

const clientRequest = axios.create(requestConfig)

clientRequest.interceptors.response.use((res) => {
  /**
   *  返回数据处理
   */
  return res
}, error)

export default clientRequest
