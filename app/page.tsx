import Image from "next/image";
import blogPostImage from '../public/blogImage.jpg';
import pHolderImage from '../public/pHolder.jpg';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="mb-10">
        <h1 className='header'>MARCDEVCEO</h1>
        <h3 className="sub-header">A portfolio by Marcus Kimber</h3>
        <h3 className="sub-header">Blog | Walkthroughs | Personal Projects</h3>
      </div>
      <div className="flex flex-wrap justify-center">
        <Link href="/blog">
          <Image
            className="p-5"
            src={blogPostImage}
            alt="Blog Posts"
            width={500}
            height={500}
            // layout="responsive"
          />     
        </Link>
        <Image
          className="p-5"
          src={pHolderImage}
          alt="Blog Posts"
          width={500}
          height={500}
          // layout="responsive"
        />
        <Image
          className="p-5"
          src={pHolderImage}
          alt="Blog Posts"
          width={500}
          height={500}
          // layout="responsive"
        />
        <Image
          className="p-5"
          src={pHolderImage}
          alt="Blog Posts"
          width={500}
          height={500}
          // layout="responsive"
        />
      </div>
    </div>
  );
}
