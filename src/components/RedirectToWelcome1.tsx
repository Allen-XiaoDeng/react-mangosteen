import * as React from 'react'
import { useNavigate } from 'react-router-dom'
export const RedirectToWelcome1: React.FC = () => {
  const nav = useNavigate()
  React.useEffect(() => {
    nav('/welcome/1')
  }, [])
  return null
}
