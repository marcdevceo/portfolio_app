// import Blog from '../Blog';

interface BlogProps {
    params: {id: number};
  }
  
  export default async function BlogPage({ params }: BlogProps) {
    try {
      const response = await fetch(`https://blog-posts-api-71fdc389880b.herokuapp.com/blogposts/${params.id}`);
      const post = await response.json();

      return (
          <div className='m-10'>
              <h1 className="header">{post.title}</h1>
              <h4 className="text-end blog-date">{post.published_date}</h4>
              <article className='post'>
                {post.content}
              </article>
          </div>
      )
  } catch (error) {
      console.error('Error fetching blog posts:', error); 
      return <div>Error fetching blog posts. Please try again later.</div>;
  }
}

