import Axios from "axios"

export default {
    state: {
        //category: "This is Category",
        category: [],
        post: []
    },
    getters: {
        getCategory(state) {
            return state.category
        },
        getAllPost(state) {
            return state.post
        }
    },
    actions: {
        allCategory(context) {
            axios.get('/category')
                .then((response)=>{
                    //console.log(response.data.categories)
                    context.commit('categories', response.data.categories)//categories used in mutations
                })
        },
        getAllPost(context) {
            axios.get('/post')
                .then((response)=>{
                    context.commit('allPosts', response.data.posts)//allPosts used in mutations
                })
        }
    },
    mutations: {
        categories(state, data) {
            return state.category = data
        },
        allPosts(state, payload) {
            return state.post = payload
        }
    }
}