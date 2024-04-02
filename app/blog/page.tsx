import Link from 'next/link'
import React from 'react'

type Post = {
    id?: number;
    title?: string;
    content?: string;
}

export default async function Blog() {
    try {
        const response = await fetch(
            'https://blog-posts-api-71fdc389880b.herokuapp.com/blogposts/',
            {
                cache: 'no-store',
            }    
        );
        const posts = await response.json();

        return (
            <div className='content m-5'>
                <h1 className='header new'>My Thoughts ...</h1>
                <ul className='text-center m-10'>
                    {posts.map((post: Post) => (
                        <li className='p-5' key={post.id}>
                            <Link href={`blog/${post.id}`}>
                                <button className='blog-button'>
                                    {post.title}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    } catch (error) {
        console.error('Error fetching blog posts:', error); 
        return <div>Error fetching blog posts. Please try again later.</div>;
    }
}