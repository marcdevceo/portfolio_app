import Link from 'next/link'
import React from 'react'


const Blog = () => {
  return (
    <div>
        <h1 className='header'>My Thoughts ...</h1>
        <ul className='text-center m-10'>
            <li>
                <Link href='/blog/blog-1'>
                    <button className='blog-button'>
                        Rediscovering My Passion: A 22-Year Journey Back to Software Engineering
                    </button>
                </Link>
            </li>
            
        </ul>
    </div>
  )
}

export default Blog