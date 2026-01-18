
import React, {useState, useEffect} from 'react'


const BlogList = () => {
  // State to store the blog posts (initialized as an empty array)
  const [posts, setPosts] = useState([]);
  // State for managing loading status
  const [loading, setLoading] = useState(true);
  // State for handling potential errors
  const [error, setError] = useState(null);
  
  // useEffect hook to perform the data fetching when the component mounts
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
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
  }, []); // Empty dependency array means this effect runs once, after the initial render

  // Conditional Rendering for loading, error, and data states
  if (loading) {
    return <p>Loading blog comments...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Blog Comments</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.name}</h2>
            <h5>{post.email}</h5>
            <h3>{post.body}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
