import { getBlogPosts } from './data';
import './style.css';
import AvatarImage from './assets/images/avatar.png';

const blogs = getBlogPosts();
const ul = document.createElement('ul');
blogs.forEach((blog) => {
	const li = document.createElement('li');
	li.innerText = blog;
	ul.appendChild(li);
});
document.body.appendChild(ul);

const img = document.createElement('img');
img.src = AvatarImage;
document.body.prepend(img);
