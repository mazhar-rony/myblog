import AdminHome from './components/admin/AdminHome.vue'
import CategoryList from './components/admin/category/List.vue'
import EditCategory from './components/admin/category/Edit.vue'
import AddCategory from './components/admin/category/New.vue'

export default [
    { path: '/home', component: AdminHome },
    { path: '/category-list', component: CategoryList },
    { path: '/add-category', component: AddCategory },
    { path: '/edit-category/:categoryid', component: EditCategory }
  ]