import { Link } from 'react-router';

export default function NoPageFound() {
  return (
    <>
      <div>404 - No Page found</div>
      <Link to="/">Click here to see available blogs</Link>
    </>
  )
}