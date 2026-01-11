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
const showCommentButton = document.getElementById('show-comment-button');
const hideCommentButton = document.getElementById('hide-comment-button');
//const blogTitleElement = document.getElementById('blog-title');
//const blogContentElement = document.getElementById('blog-content');
const blogCommentElement = document.getElementById('blog-comments');
const blogNameElement = document.getElementById('blog-name');
const blogEmailElement = document.getElementById('blog-email');

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
}
function displayBlogDetail() {
  blogListElement.innerHTML = ''; // Clear existing list items

    blogsPostData.forEach(blog => {
    const li = document.createElement('li');
    li.textContent = `Title: ${blog.title} Body: ${blog.body}`;

    detailListElement.appendChild(li);
showCommentButton.addEventListener('click', () => displayBlogComment(blog.id));
    blogListContainer.style.display = 'none';
    blogDetailContainer.style.display = 'block';
    blogCommentContainer.style.display = 'none';
  })}

  function displayBlogComment() {
  blogListElement.innerHTML = ''; // Clear existing list items
  const blog = blogsCommentData.find(b => b.postId === blogId);

  if (blog) {
    blogsCommentData.forEach(blog => {
    const li = document.createElement('li');
    li.textContent = `Name: ${blog.name} Email: ${blog.email} Comment: ${blog.comment}`;

    commentListElement.appendChild(li);
  hideCommentButton.addEventListener('click', () => displayBlogDetail(blog.postId));
  backButton2.addEventListener('click', displayBlogList);
    blogListContainer.style.display = 'none';
    blogDetailContainer.style.display = 'block';
    blogCommentContainer.style.display = 'none';
  })}}

/*function displayBlogComment(blogId) {
  const blog = blogsCommentData.find(b => b.postId === blogId);

  if (blog) {
    blogNameElement.textContent = blog.name;
    blogEmailElement.textContent = blog.email;
    blogCommentElement.textContent = blog.body; // Use textContent for simple string content

    blogListContainer.style.display = 'none';
    blogDetailContainer.style.display = 'none';
    blogCommentContainer.style.display = 'block';
  }
  hideCommentButton.addEventListener('click', () => displayBlogDetail(blog.postId));
  backButton2.addEventListener('click', displayBlogList);
}*/

// Event listener for the buttons
backButton.addEventListener('click', displayBlogList);
// Initialize the view with the blog list
displayBlogList();
