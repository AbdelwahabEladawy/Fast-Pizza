import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LinkButton({children,to}) {
      const navigate = useNavigate();
    const Cl='text-sm text-blue-500 hover:text-blue-600 hover:underline'
    if(to==="-1") return <button onClick={() => navigate(-1)}>{children}</button>
  return (
    <Link
    to={to} className={Cl}
    
    >
    {children}
    </Link>
  )
}
