import Link from 'next/link';
import React from 'react';
import { Post } from './page';


export default async function Blog() {
    try {
        const response = await fetch('https://blog-posts-api-71fdc389880b.herokuapp.com/blogposts/');
        const posts = await response.json();

        return (
            <div className='m-5'>
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
        );
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return <div>Error fetching blog post. Please try again later.</div>;
    }
}
