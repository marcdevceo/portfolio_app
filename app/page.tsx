import Image from "next/image";
import blogPostImage from '../public/blog.jpeg';
import projectsImage from '../public/Projects.png';
import resumeImage from '../public/Resume.png';
import walkthroughImage from '../public/walkthrough.png';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="mb-10">
        <h1 className='header'>MARCDEVCEO</h1>
        <h3 className="sub-header">A portfolio by Marcus Kimber</h3>
        <h3 className="sub-header">Blog | Walkthroughs | Projects</h3>
      </div>
      <div className="flex flex-wrap justify-center">
        <Link href="/blog">
          <Image
            className="p-5"
            src={blogPostImage}
            alt="Blog Posts"
            // width={500}
            // height={500}
            // layout="responsive"
          />     
        </Link>
        <Image
          className="p-5"
          src={resumeImage}
          alt="Blog Posts"
          // width={500}
          // height={500}
          // layout="responsive"
        />
        <Image
          className="p-5"
          src={projectsImage}
          alt="Blog Posts"
          // width={500}
          // height={500}
          // // layout="responsive"
        />
        <Image
          className="p-5"
          src={walkthroughImage}
          alt="Blog Posts"
          // width={500}
          // height={500}
          // // layout="responsive"
        />
      </div>
    </div>
  );
}
