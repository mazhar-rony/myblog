import Axios from "axios"

export default {
    state: {
        //category: "This is Category",
        category: [],
        post: [],
        blogpost: [],
        singlePost: []
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
        }
    }
}