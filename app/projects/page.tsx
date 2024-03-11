import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import mellcWebsite from '../../public/mellc-website.png'

const Projects = () => {
  return (
    <div className='m-10'>
        <div className='header mb-5'>
            <h1>My Projects 🧑🏽‍💻</h1>
        </div>
        <div>
            <p>
                Here, I have curated a selection of web applications that I have 
                created to solve real-world problems and explore my passion for 
                technology. 
            </p>
            <p>    
                Click on the pictures below to experience firsthand the 
                innovative solutions I have developed. Lets dive in and discover the 
                exciting world of my web applications together!
            </p>
        </div>
        <div>
            <Link href="https://mellc-e7db4.web.app/">
                <Image
                    className="p-5"
                    src={mellcWebsite}
                    alt="Blog Posts Image Link" 
                />
            </Link>
        </div>
    </div>
  )
}

export default Projects