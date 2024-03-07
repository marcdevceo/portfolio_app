import Link from 'next/link';
import React from 'react';
Link

const Navbar = () => {
  return (
    <div className='flex justify-end'>
        <Link className='p-7' href='/'>Home</Link>
        <Link className='p-7' href='/blog'>Blog</Link>
    </div>
  )
}

export default Navbar