import { useState, useEffect, useRef } from 'react'

interface UseCountUpProps {
  end: number
  duration?: number
  startOnMount?: boolean
  delay?: number
}

export const useCountUp = ({ 
  end, 
  duration = 2000, 
  startOnMount = true, 
  delay = 0 
}: UseCountUpProps) => {
  const [count, setCount] = useState(0)
  const [isCounting, setIsCounting] = useState(false)
  const frameRef = useRef<number>()
  const startTimeRef = useRef<number>()

  const start = () => {
    if (isCounting) return
    
    setIsCounting(true)
    setCount(0)
    
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime
      }
      
      const progress = Math.min((currentTime - startTimeRef.current) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(end * easeOutQuart)
      
      setCount(currentCount)
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
        setIsCounting(false)
        startTimeRef.current = undefined
      }
    }
    
    frameRef.current = requestAnimationFrame(animate)
  }

  const reset = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
    }
    setCount(0)
    setIsCounting(false)
    startTimeRef.current = undefined
  }

  useEffect(() => {
    if (startOnMount) {
      const timer = setTimeout(() => {
        start()
      }, delay)
      
      return () => clearTimeout(timer)
    }
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [startOnMount, delay])

  return { count, isCounting, start, reset }
}
