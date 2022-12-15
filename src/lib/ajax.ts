// 解耦
// 最小知识原则
// 1. 一个函数只做一件事
// 2. 函数的参数尽量少，最好是一个
// 3. 函数的返回值尽量少，最好是一个
// 4. 函数的副作用尽量少，最好是没有

import axios from 'axios'

axios.defaults.baseURL = isDev ? '/' : 'http://121.196.236.94:8080/api/v1'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 10000
export const ajax = {
  get: <T>(path: string) => {
    return axios.get<T>(path)
  },
  post: () => { },
  patch: () => { },
  delete: () => { },
}
