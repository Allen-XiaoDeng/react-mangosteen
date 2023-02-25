import { RouterProvider } from 'react-router-dom'
import vhCheck from 'vh-check'
import { useEffect } from 'react'
import { router } from './routes/router'
import './global.scss'
import 'virtual:uno.css'
import './app.scss'
import 'virtual:svgsprites'
import { useLoadingStore } from './stores/useLoadingStore'
import { usePopup } from './hooks/usePopup'
import { Loading } from './components/Loading'
vhCheck()
export const App: React.FC = () => {
  const { visible } = useLoadingStore()
  const { popup, hide, show } = usePopup({
    children: <Loading />,
    position: 'center'
  })
  useEffect(() => {
    visible ? show() : hide()
  }, [visible])

  return (
    <div>
      <RouterProvider router={router} />
      {popup}
    </div>
  )
}
