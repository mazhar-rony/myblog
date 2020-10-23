import Axios from "axios"

export default {
    state: {
        //category: "This is Category",
        category: [],
    },
    getters: {
        getCategory(state) {
            return state.category
        }
    },
    actions: {
        allCategory(context){
            axios.get('/category')
                .then((response)=>{
                    //console.log(response.data.categories)
                    context.commit('categories', response.data.categories)//categories used in mutations
                })
        }
    },
    mutations: {
        categories(state, data){
            return state.category = data
        }
    }
}