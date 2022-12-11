import * as React from 'react'
import { useRouteError } from 'react-router-dom'
export const ErrorPage: React.FC = () => {
  const error: any = useRouteError()

  return (
  <div id="error-page">
      <h1>哎呦！</h1>
      <p>你访问的页面不存在</p>
      <p>
         <i>{error.statusText || error.message}</i>
      </p>
  </div>
  )
}
