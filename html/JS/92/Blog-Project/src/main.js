// Import the JSON data directly using a standard JavaScript import statement
// Vite handles this correctly, treating the imported object as the JSON data
// import blogsData from './blogs.json'; 
  import blogsUserData from './blogUsers.json';
  import blogsPostData from './blogPosts.json';
  import blogsCommentData from './blogComments.json';

const blogListContainer = document.getElementById('blog-list-container');
const blogDetailContainer = document.getElementById('blog-detail-container');
const blogCommentContainer = document.getElementById('blog-comment-container');
const blogListElement = document.getElementById('blog-list');
const detailListElement = document.getElementById('detail-list');
const commentListElement = document.getElementById('comment-list');
const backButton = document.getElementById('back-button');
const backButton2 = document.getElementById('back-button2');
//const showCommentButton = document.getElementById('show-comment-button');
const hideCommentButton = document.getElementById('hide-comment-button');


// Function to display the list of blogs
function displayBlogList() {
  blogListElement.innerHTML = ''; // Clear existing list items

    blogsUserData.forEach(blog => {
    const li = document.createElement('li');
    li.textContent = `Name: ${blog.name} Website: ${blog.website} Company: ${blog.company.name} "${blog.company.catchPhrase}" Specialty: ${blog.company.bs}`;

    li.addEventListener('click', () => displayBlogDetail(blog.id));
    blogListElement.appendChild(li);
  });

  blogListContainer.style.display = 'block';
  blogDetailContainer.style.display = 'none';
  blogCommentContainer.style.display = 'none';
}

function displayBlogDetail(blogId) {
  blogListElement.innerHTML = ''; // Clear existing list items
  const blogs = blogsPostData.filter(b => b.userId === blogId);
  detailListElement.innerHTML = '';

  if (blogs.length > 0) { 
  console.log('match found:', blogId);
  blogs.forEach(blog => {
    const li = document.createElement('li');
    li.textContent = `Title: ${blog.title}
    Body: ${blog.body} 
    ------Click to see comments------ `;
    detailListElement.appendChild(li);  
    li.addEventListener('click', () => displayBlogComment(blog.id));  
  });}
  else{
    const li = document.createElement('li');
    li.textContent = 'No matching items found.';
    detailListElement.appendChild(li);
  }
    blogListContainer.style.display = 'none';
    blogDetailContainer.style.display = 'block';
    blogCommentContainer.style.display = 'none';


function displayBlogComment(postId) {
  detailListElement.innerHTML = ''; // Clear existing list items
  const blogs = blogsCommentData.filter(b => b.postId === postId);
  commentListElement.innerHTML = '';
  if (blogs.length > 0) {
    console.log('match found:', postId);
    blogs.forEach(blog => {
    const li = document.createElement('li');
    li.textContent = `Name: ${blog.name} Email: ${blog.email} Comment: ${blog.body}`;
    hideCommentButton.addEventListener('click', () => displayBlogDetail(blogId));
    commentListElement.appendChild(li);})
    
    ;}
  else{
    const li = document.createElement('li');
    li.textContent = 'No matching items found.';
    detailListElement.appendChild(li);
  }
    backButton2.addEventListener('click', displayBlogList);
    blogListContainer.style.display = 'none';
    blogDetailContainer.style.display = 'none';
    blogCommentContainer.style.display = 'block';
  }
}
// Event listener for the buttons
backButton.addEventListener('click', displayBlogList);
// Initialize the view with the blog list
displayBlogList();
