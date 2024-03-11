import Link from 'next/link';
import React from 'react';
Link

const Navbar = () => {
  return (
    <div className='flex justify-end'>
        <Link className='p-4' href='/'>Home</Link>
        <Link className='p-4' href='/blog'>Blog</Link>
        <Link className='p-4' href='/resume'>Resume</Link>
        <Link className='p-4' href='/projects'>Projects</Link>
    </div>
  )
}

export default Navbar