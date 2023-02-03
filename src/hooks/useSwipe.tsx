import type { RefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

interface Config {
  onTouchStart?: (event: TouchEvent) => void
  onTouchMove?: (event: TouchEvent) => void
  onTouchEnd?: (event: TouchEvent) => void
}

export const useSwipe = (elementRef: RefObject<HTMLElement>, config?: Config) => {
  const [direction, setDirection] = useState<'' | 'left' | 'right' | 'up' | 'down'>('')
  const x = useRef(-1)
  const y = useRef(-1)
  const onTouchStart = (e: TouchEvent) => {
    config?.onTouchStart?.(e)
    x.current = e.touches[0].clientX
    y.current = e.touches[0].clientY
  }
  const onTouchMove = (e: TouchEvent) => {
    config?.onTouchStart?.(e)
    const newX = e.touches[0].clientX
    const newY = e.touches[0].clientY
    const dx = newX - x.current
    const dy = newY - y.current
    if (Math.abs(dx) > Math.abs(dy)) {
      if (Math.abs(dx) < 10) {
        setDirection('')
      }
      else if (dx > 0) {
        setDirection('right')
      }
      else {
        setDirection('left')
      }
    }
    else {
      if (Math.abs(dy) < 10) {
        setDirection('')
      }
      else if (dy > 0) {
        setDirection('down')
      }
      else {
        setDirection('up')
      }
    }
  }
  const onTouchEnd = (e: TouchEvent) => {
    setDirection('')
  }

  useEffect(() => {
    const element = elementRef.current
    if (element === null)
      return
    element.addEventListener('touchstart', onTouchStart)
    element.addEventListener('touchmove', onTouchMove)
    element.addEventListener('touchend', onTouchEnd)
    return () => {
      element.removeEventListener('touchstart', onTouchStart)
      element.removeEventListener('touchmove', onTouchMove)
      element.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return { direction }
}
