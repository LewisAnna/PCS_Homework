// import { useState } from 'react';
import './App.css'
import React from 'react';
import Header from './Header'
import BlogList from './blogList.jsx';
import BlogPost from './blogPost.jsx';
import BlogComment from './blogComment';
import { Outlet } from 'react-router' 
import { Routes, Route} from 'react-router' 


function App() {
  //const [id, setId] = useState();
  return (
    
    <div className="App">
       <Header />
        <Outlet /> 
        
    </div>
  );
}

export default App;
/*function App() {
  //const [id, setId] = useState();
  return (
    <Routes>
      <Route path = "/" element={<BlogList />} />
      <Route path = "/post/:blogId" element={<PostList />} />
    </Routes>
  );
}

export default App;*/