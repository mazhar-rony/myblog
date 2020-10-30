<template>
    <span id="sidebar">
        <div class="span4">
                <aside class="right-sidebar">
                <div class="widget">
                    <form class="form-search">
                    <input placeholder="Type something" type="text" class="input-medium search-query">
                    <button type="submit" class="btn btn-square btn-theme">Search</button>
                    </form>
                </div>
                <div class="widget">
                    <h5 class="widgetheading">Categories</h5>
                    <ul class="cat">
                        <li v-for="category in allcategories" :key="category.id"><i class="icon-angle-right"></i>
                        <router-link :to="`/categories/${category.id}`">{{ category.cat_name }}</router-link><span> ({{category.posts.length}})</span></li>
                    </ul>
                </div>
                <div class="widget">
                    <h5 class="widgetheading">Latest posts</h5>
                    <ul class="recent">
                        <li v-for="post in latestpost" :key="post.id">
                        <!-- <li v-for="(post, index) in latestpost" :key="post.id"> -->
                            <!-- to get 5 post to show (its done in controller than here) -->
                            <!-- <span v-if="index < 5"> -->
                            <img :src="`uploadimage/${post.photo}`" class="pull-left" width="70" height="70" alt="" />
                            <h6><router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link></h6>
                            <p>
                                {{ post.description | shortlength(100, "...") }}
                            </p>
                            <!-- </span> -->
                        </li>
                    </ul>
                </div>
                <div class="widget">
                    <h5 class="widgetheading">Popular tags</h5>
                    <ul class="tags">
                    <li><a href="#">Web design</a></li>
                    <li><a href="#">Trends</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Internet</a></li>
                    <li><a href="#">Tutorial</a></li>
                    <li><a href="#">Development</a></li>
                    </ul>
                </div>
                </aside>
            </div>
    </span>
</template>

<script>
export default {
    name: "BlogSidebar",
    
    mounted() {
        this.$store.dispatch('allCategories')
        this.$store.dispatch('latestPost')
    },
    computed: {
        allcategories() {
            return this.$store.getters.getAllCategories
        },
        latestpost() {
            return this.$store.getters.getLatestPost
        }
    }
}
</script>