"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedSection({ children, delay = 0, className = "" }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  )
}

interface AnimatedCounterProps {
  value: string | number
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, suffix = "", duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    // Handle string values like "$2.5B+" or "14+"
    if (typeof value === "string") {
      const hasB = value.includes("B")
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""))
      
      if (isNaN(numericValue)) {
        // If we can't parse, just show the original value
        setCount(value as any)
        return
      }

      const startTime = Date.now()
      const startValue = 0
      const endValue = numericValue

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const current = hasB 
          ? Math.round((startValue + (endValue - startValue) * easeOutQuart) * 10) / 10
          : Math.floor(startValue + (endValue - startValue) * easeOutQuart)
        
        setCount(current)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(endValue)
        }
      }

      animate()
    } else {
      // Handle numeric values
      const startTime = Date.now()
      const startValue = 0
      const endValue = value

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
        
        setCount(current)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(endValue)
        }
      }

      animate()
    }
  }, [isVisible, value, duration])

  // Format the display value
  let displayValue: string | number = count
  
  if (typeof value === "string") {
    if (value.includes("B")) {
      displayValue = `$${count}B+`
    } else if (value.includes("+")) {
      displayValue = `${count}${suffix || "+"}`
    } else {
      displayValue = count
    }
  } else {
    displayValue = `${count}${suffix}`
  }

  return <span ref={ref}>{displayValue}</span>
}
