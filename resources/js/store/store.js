import Axios from "axios"

export default {
    state: {
        //category: "This is Category",
        category: [],
        post: [],
        blogpost: [],
        singlePost: [],
        allCategories: [],
        latestpost: []
    },
    getters: {
        getCategory(state) {
            return state.category
        },
        getAllPost(state) {
            return state.post
        },
        getAllBlogPost(state) {
            return state.blogpost
        },
        getSinglePost(state) {
            return state.singlePost
        },
        getAllCategories(state) {
            return state.allCategories
        },
        getLatestPost(state) {
            return state.latestpost
        }
    },
    actions: {
        allCategory(context) {
            axios.get('/category')
                .then((response)=>{
                    //console.log(response.data.categories)
                    context.commit('categories', response.data.categories)//categories used in mutations & categories comes from controller
                })
        },
        getAllPost(context) {
            axios.get('/post')
                .then((response)=>{
                    context.commit('allPosts', response.data.posts)//allPosts used in mutations & posts comes from controller
                })
        },
        getAllBlogPost(context) {
            axios.get('/blogpost')
                .then((response)=>{
                    context.commit('blogPosts', response.data.posts)//blogPosts used in mutations & posts comes from controller
                })
        },
        getPostById(context, payload) {
            axios.get('/singlepost/'+payload)
                .then((response) => {
                    //console.log(response.data.post)
                    context.commit('singlePost', response.data.post)//singlePost used in mutations & post comes from controller
                })
        },
        // here Categories for user panel
        allCategories(context) {
            axios.get('/categories')
                .then((response)=>{
                    context.commit('allcategories', response.data.categories)//allcategories used in mutations & categories comes from controller
                })
        },
        latestPost(context) {
            axios.get('/latestpost')
                .then((response)=>{
                    context.commit('latestpost', response.data.posts)
                })
        },
        getPostByCatId(context, payload) {
            axios.get('/category/'+payload)
                .then((response) => {
                    //console.log(payload)
                    console.log(response.data.posts)
                    //context.commit('getPostByCatId', response.data.posts)
                    context.commit('blogPosts', response.data.posts)
                })
        },
        searchPost(context, payload) {
            axios.get('/search?s='+payload)
                .then((response) => {
                    context.commit('searchPost', response.data.posts)
                })
        }
    },
    mutations: {
        categories(state, data) {
            return state.category = data
        },
        allPosts(state, payload) {
            return state.post = payload
        },
        blogPosts(state, payload) {
            return state.blogpost = payload
        },
        singlePost(state, payload) {
            return state.singlePost = payload
        },
        allcategories(state, payload) {
            return state.allCategories = payload
        },
        latestpost(state, payload) {
            return state.latestpost = payload
        },
        // getPostByCatId(state, payload) {
        //     return state.blogPosts = payload
        // }
        searchPost(state, payload) {
            return state.blogpost = payload
        }
    }
}