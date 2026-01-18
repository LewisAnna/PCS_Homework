import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';

const BlogPost = () => {
  const { id } = useParams(); // Get the 'id' from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        // Fetch details for a specific post using its ID
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [id]); // Rerun effect if the 'id' parameter changes

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error: {error}</p>;

  /*return (
    <div>
      <h2>{post.name}</h2>
      <p>{post.body}</p>
      <Link to="/">Back to blog list</Link>
    </div>
  );*/
    return (
    <div>
      <h2>Blog Posts</h2>
      <Link to="/">Back to blog list</Link>
      <ul>
        {post.map((post) => (
          <li key={post.id}>
            {/* The Link component navigates to the dynamic route defined in App.jsx */}
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default BlogPost;