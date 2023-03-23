import React from 'react'

function SnapToSection({ direction }) {
  const handleScroll = () => {
    const currentScrollPos =
      window.pageYOffset || document.documentElement.scrollTop
    const windowHeight = window.innerHeight

    let targetScrollPos
    if (direction === 'up') {
      targetScrollPos = Math.max(currentScrollPos - windowHeight, 0)
    } else if (direction === 'down') {
      targetScrollPos = Math.min(
        currentScrollPos + windowHeight,
        document.documentElement.scrollHeight - windowHeight
      )
    }

    window.scroll({
      top: targetScrollPos,
      left: 0,
      behavior: 'smooth',
    })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [direction])

  return null
}

export default SnapToSection
