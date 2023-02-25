/* eslint-disable max-statements-per-line */
// 解耦
// 最小知识原则
// 1. 一个函数只做一件事
// 2. 函数的参数尽量少，最好是一个
// 3. 函数的返回值尽量少，最好是一个
// 4. 函数的副作用尽量少，最好是没有

import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { useLoadingStore } from '../stores/useLoadingStore'

// 静态配置项直接用 defaults 配置
axios.defaults.baseURL = isDev ? '/' : 'http://106.14.66.155:8080/api/v1'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.timeout = 10000

// 动态配置项用拦截器来配置
axios.interceptors.request.use((config) => {
  const jwt = localStorage.getItem('jwt') || ''
  config.headers = config.headers || {}
  if (jwt) { config.headers.Authorization = `Bearer ${jwt}` }
  return config
})

// 封装 axios
type Options = {
  showLoading?: boolean
}
export const useAjax = (options?: Options) => {
  const showLoading = options?.showLoading || false
  const { setVisible } = useLoadingStore()
  const ajax = {
    get: <T>(path: string, config?: AxiosRequestConfig<any>) => {
      return axios.get<T>(path, config)
    },
    post: <T>(path: string, data: JSONValue) => {
      if (showLoading) { setVisible(true) }
      return axios.post<T>(path, data).finally(() => {
        if (showLoading) { setVisible(false) }
      })
    },
    patch: () => { },
    delete: () => { },
  }
  return ajax
}
