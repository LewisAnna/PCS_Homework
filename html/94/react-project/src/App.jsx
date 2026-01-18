import { Routes, Route } from 'react-router';
import BlogList from './blogList';
import BlogPost from './blogPost';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Blog</h1>
      </header>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;
