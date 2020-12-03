import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'
import NewPost from './components/NewPost.vue'
import Post from './components/Post.vue'

export default [
    {path: '/about', component: About},
    {path: '/contact', component: Contact},
    {path: '/', component: Home},
    {path: '/newpost', component: NewPost},
    {path: '/post/:id', component: Post}
]