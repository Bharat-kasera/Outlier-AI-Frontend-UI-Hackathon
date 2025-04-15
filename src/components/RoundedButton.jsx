import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Magnetic from './Magnetic'

export default function RoundedButton({
  children,
  backgroundColor = '#455CE9',
  className = '',
  ...props
}) {
  const circle = useRef(null)
  const timeline = useRef(null)
  let timeoutId = null

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
    timeline.current
      .to(
        circle.current,
        { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' },
        'enter'
      )
      .to(
        circle.current,
        { top: '-150%', width: '125%', duration: 0.25 },
        'exit'
      )
  }, [])

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit')
  }

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play()
    }, 300)
  }

  return (
    <Magnetic>
      <div
        className={`
          group
          overflow-hidden
          cursor-pointer
          relative
          flex items-center justify-center
          py-4 px-6 md:px-16
          border border-gray-500
          rounded-full
          ${className}
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <span className="relative z-10 transition-colors duration-300 ease-linear group-hover:text-black">
          {children}
        </span>
        <div
          ref={circle}
          style={{ backgroundColor }}
          className="absolute top-full w-full h-[150%] rounded-full"
        />
      </div>
    </Magnetic>
  )
}
