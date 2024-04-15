import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import mellcWebsite from '../../public/mellc-website.png'
import sidelineWebsite from '../../public/sideline-connect.png'
import moviFind from '../../public/movifind.png'

const Projects = () => {
  return (
    <div className='content m-10'>
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
        <div className='flex flex-wrap justify-center mt-20'>
            <div className='mb-10 sm:mr-5'>
                <Link href="https://managedenterprises.net/">
                    <Image
                        className="p-5"
                        src={mellcWebsite}
                        alt="MELLC Website" 
                    />
                </Link>
                <div className="flex flex-col">
                    <h4 className='flex justify-center'>Manged Enterprises, LLC Website</h4>
                    <a className='flex justify-center m-3' href="https://github.com/marcdevceo/mellc">
                        <button className="bg-blue-700 border border-white px-4 py-2 rounded-lg text-white hover:bg-blue-300 hover:border-blue-400 hover:text-gray-900">
                            Github Link
                        </button>
                    </a>
                </div>
            </div>
            <div className='mb-10 sm:mr-5'>
                <Link href="https://sideline-connect-3e37933ea594.herokuapp.com/">
                    <Image
                        className="p-5"
                        src={sidelineWebsite}
                        alt="Sideline Connect App Link" 
                    />
                </Link>
                <div className="flex flex-col">
                    <h4 className='flex justify-center'>Sideline Connect Web App</h4>
                    <a className='flex justify-center m-3' href="https://github.com/marcdevceo/sidelineconnect">
                        <button className="bg-blue-700 border border-white px-4 py-2 rounded-lg text-white hover:bg-blue-300 hover:border-blue-400 hover:text-gray-900">
                            Github Link
                        </button>
                    </a>
                </div>
            </div>
            <div className='mb-10 sm:mr-5'>
                <Link href="https://movifind.vercel.app/">
                    <Image
                        className="p-5"
                        src={moviFind}
                        alt="MoviFind App Link" 
                    />
                </Link>
                <div className="flex flex-col">
                    <h4 className='flex justify-center'>MoviFind Web App</h4>
                    <a className='flex justify-center m-3' href="https://github.com/marcdevceo/movifind">
                        <button className="bg-blue-700 border border-white px-4 py-2 rounded-lg text-white hover:bg-blue-300 hover:border-blue-400 hover:text-gray-900">
                            Github Link
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects