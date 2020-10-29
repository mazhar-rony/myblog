import AdminHome from './components/admin/AdminHome.vue'
//Category
import CategoryList from './components/admin/category/List.vue'
import EditCategory from './components/admin/category/Edit.vue'
import AddCategory from './components/admin/category/New.vue'
//Post
import PostList from './components/admin/post/List.vue'
import EditPost from './components/admin/post/Edit.vue'
import AddPost from './components/admin/post/New.vue'

//FrontEnd Component
import PublicHome from './components/public/PublicHome.vue'
import BlogPost from './components/public/blog/BlogPost.vue'
import SinglePost from './components/public/blog/SingleBlog.vue'

export default [
  
    { path: '/home', component: AdminHome },
    //Category
    { path: '/category-list', component: CategoryList },
    { path: '/add-category', component: AddCategory },
    { path: '/edit-category/:categoryid', component: EditCategory },
    //Post
    { path: '/post-list', component: PostList },
    { path: '/add-post', component: AddPost },
    { path: '/edit-post/:postid', component: EditPost },

    //FrontEnd Route
    { path: '/', component: PublicHome },
    { path: '/blog-post', component: BlogPost },
    { path: '/blog/:id', component: SinglePost },

  ]