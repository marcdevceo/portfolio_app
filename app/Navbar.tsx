import Link from 'next/link';
import React from 'react';
Link

const Navbar = () => {
  return (
    <div className='flex justify-center sm:justify-end'>
        <Link className='nav-link p-2' href='/'>Home</Link>
        <Link className='nav-link p-2' href='/blog'>Blog</Link>
        <Link className='nav-link p-2' href='/resume'>Resume</Link>
        <Link className='nav-link p-2' href='/projects'>Projects</Link>
    </div>
  )
}

export default Navbar