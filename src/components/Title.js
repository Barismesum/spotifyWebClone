import React from 'react'
import { NavLink } from 'react-router-dom';

function Title({title,more=false}) {
  return (
    <header className="flex items-center justify-between mb-4">
    <h3 className="text-semibold text-2xl text-white tracking-tight hover:underline">
      {title}
    </h3>
    {more && (
      <NavLink
        className={
          "text-xs hover:underline font-semibold uppercase text-link "
        }
        to={more}
      >
        SEE ALL
      </NavLink>
    )}
  </header>
  )
}

export default Title;