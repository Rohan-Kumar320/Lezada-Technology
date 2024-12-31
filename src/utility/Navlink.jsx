import React from 'react'
import { Link, useLocation } from 'react-router'
import { Link as ScrollLink } from 'react-scroll';

const Navlink = ({to,scrollTo,label}) => {
    const location = useLocation();

    const isHomePage = location.pathname === '/';
  return isHomePage ? (
    <ScrollLink
        to={scrollTo}
        smooth={true}
        duration={500}
        spy={true}
        offset={-50}
    >
        {label}
    </ScrollLink>
  ) : (
    <Link to={to}>{label}</Link>
  )
}

export default Navlink