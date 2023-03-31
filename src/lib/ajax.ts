import type { AxiosError, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLoadingStore } from '../stores/useLoadingStore'
// 解耦
// 最小知识原则
// 1. 一个函数只做一件事
// 2. 函数的参数尽量少，最好是一个
// 3. 函数的返回值尽量少，最好是一个
// 4. 函数的副作用尽量少，最好是没有

export const ajax = axios.create({
  baseURL: isDev ? '/' : 'https://mangosteen2.hunger-valley.com',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})
ajax.interceptors.request.use((config) => {
  const jwt = localStorage.getItem('jwt') || ''
  config.headers = config.headers || {}
  if (jwt) { config.headers.Authorization = `Bearer ${jwt}` }
  return config
})

// 封装 axios
type Options = {
  showLoading?: boolean
  handleError?: boolean
}
export const useAjax = (options?: Options) => {
  const table: Record<string, undefined | (() => void)> = {
    401: () => {
      nav('/sign_in')
    },
    402: () => {
      window.alert('请付费后观看')
    },
    403: () => {
      window.alert('没有权限')
    },
    unknown: () => {
      window.alert('未知错误')
    }
  }

  const showLoading = options?.showLoading || false
  const handleError = options?.handleError ?? true
  const { setVisible } = useLoadingStore()
  const nav = useNavigate()
  const onError = (error: AxiosError) => {
    if (error.response) {
      if (handleError) {
        const { status } = error.response
        const fn = table[status]
        fn?.()
      }
    }
    throw error
  }
  return {
    get: <T>(path: string, config?: AxiosRequestConfig<any>) => {
      if (showLoading) { setVisible(true) }
      return ajax.get<T>(path, config).catch(onError).finally(() => {
        if (showLoading) { setVisible(false) }
      })
    },
    post: <T>(path: string, data: JSONValue) => {
      if (showLoading) { setVisible(true) }
      return ajax.post<T>(path, data).catch(onError).finally(() => {
        if (showLoading) { setVisible(false) }
      })
    },
    patch: <T>(path: string, data: JSONValue) => {
      if (showLoading) { setVisible(true) }
      return ajax.patch<T>(path, data).catch(onError).finally(() => {
        if (showLoading) { setVisible(false) }
      })
    },
    destroy: <T>(path: string) => {
      if (showLoading) { setVisible(true) }
      return ajax.delete<T>(path).catch(onError).finally(() => {
        if (showLoading) { setVisible(false) }
      })
    },
  }
}
