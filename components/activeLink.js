import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React from 'react'

const ActiveLink = ({ children, activeClassName, className, ...props }) => {
  const { asPath } = useRouter()

  const isActive = asPath === props.href || asPath === props.as
  const combinedClassName = isActive
    ? `${className || ''} ${activeClassName}`.trim()
    : className || ''

  return (
    <Link {...props} className={combinedClassName || undefined}>
      {children}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink