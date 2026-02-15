import React, {useState, useEffect} from 'react'
import {Link} from 'react-router';
import {useParams} from 'react-router';


const PostList = () => {


  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          // Handle HTTP errors
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse the response body as JSON
            setPosts(data);
            setError(null);
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

  // Conditional Rendering for loading, error, and data states
  if (loading) {
    return <p>Loading blog posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
//const {blogId} = useParams();

//const posts = PostList[blogId] || [];
  return (
    <div>
      <h1>Blog Posts for ID </h1>
   <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to="/comment">See comments</Link>
          </li>
        ))}
      </ul>

    </div>
  );
  };
export default PostList;
      /*<ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to="/comment">See comments</Link>
          </li>
        ))}
      </ul>*/

      /*
        return (
    <div>
      <h1>Blog Posts for ID {blogId} </h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) =>(
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No posts found for this blog.</p>
      )}

    </div>
  );
  };
      */