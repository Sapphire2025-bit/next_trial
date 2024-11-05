import React from 'react'
import ButtonLink from './ButtonLink'
import NavBarProps from '../types/navBarProps'

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <div className="flex justify-end bg-blue-300">
      {links.map((linkOption, id) => (
        <ButtonLink key={id} href={linkOption.href} text={linkOption.text}/>
      ))}
    </div>
  )
}

export default NavBar