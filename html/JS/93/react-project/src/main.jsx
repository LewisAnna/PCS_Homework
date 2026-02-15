import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Comments from './blogComment.jsx';
import Posts from './blogPost.jsx';
import Lists from './blogList.jsx';
import NoPageFound from './NoPageFound.jsx';
// import React from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Lists />} />
          <Route path="/post" element={<Posts />} />
          <Route path="/comment" element={<Comments />} />
          <Route path="*" element={<NoPageFound />} />
     
          {/*<Route path="*" element={<App />}/>*/}
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
