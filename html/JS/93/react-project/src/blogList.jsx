import { Link } from 'react-router'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router';


const BlogList = () => {

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          // Handle HTTP errors
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse the response body as JSON
        setPosts(data); // Update the state with the fetched data
        setError(null); // Clear any previous errors
      } catch (err) {
        // Catch network or parsing errors
        setError(err.message);
        setPosts([]); // Ensure posts is empty if an error occurs
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };

    fetchBlogPosts();
  }, []);

  const handleClick = () => {
    navigate('/post/');
  };
  // Conditional Rendering for loading, error, and data states
  if (loading) {
    return <p>Loading blog posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div onClick={handleClick} style={{cursor: 'pointer'}}>
      <h1>Blog Users</h1>
      <ul>
        {posts.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.name}</h2>
            <p>{blog.website}</p>
            <h5>{blog.company.name}</h5>
            <h5>{blog.company.catchPhrase}</h5>
            <Link to={`/post/${blog.id}`}>See blog posts</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BlogList;



