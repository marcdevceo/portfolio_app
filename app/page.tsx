import Image from "next/image";
import blogPostImage from '../public/blog.jpeg';
import projectsImage from '../public/Projects.png';
import resumeImage from '../public/Resume.png';
import walkthroughImage from '../public/walkthrough.png';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="m-5">
        <h1 className='header'>💼 MARCDEVCEO 💼</h1>
        <h3 className="sub-header">A portfolio by Marcus Kimber</h3>
      </div>
      <div className="m-10">
        <p>
          Welcome to my portfolio website! Here you will find a collection of my 
          professional journey, insights from my blog posts, highlights of my 
          resume, and a showcase of my personal projects. As someone deeply 
          passionate about innovation and problem-solving, I invite you to explore 
          my corner of the web and get to know more about my experiences, skills, 
          and creative endeavors. 
        </p>
        <p>  
          Thank you for visiting, and feel free to reach out 
          with any questions or comments. You can contact me at <i>marcdevceo@icloud.com</i>. 
          Lets connect and explore the possibilities together!
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <Link href="/blog">
          <Image
            className="p-5"
            src={blogPostImage}
            alt="Blog Posts Image Link"
          />     
        </Link>
        <Link href="/resume">
          <Image
            className="p-5"
            src={resumeImage}
            alt="Resume Image Link"
          />     
        </Link>
        <Link href="/projects">
          <Image
            className="p-5"
            src={projectsImage} 
            alt="Projects Image Link"
          />
        </Link>
      </div>
    </div>
  );
}
