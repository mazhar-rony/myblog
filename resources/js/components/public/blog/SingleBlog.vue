<template>
    <span id="singleblog">
    <section id="content">
    <div class="container">
      <div class="row">
        <div class="span8">
          <article>
            <div class="row">
              <div class="span8">
                <div class="post-image">
                  <div class="post-heading">
                    <!-- <h3><a href="#">Example single post title here  {{ this.$route.params.id }}</a></h3> -->
                    <h3><a href="#">{{ singlepost.title }}</a></h3>
                  </div>
                  <img :src="`uploadimage/${singlepost.photo}`" alt="" />
                </div>
                <p>
                  {{ singlepost.title }}
                </p>
                <div class="bottom-article">
                  <ul class="meta-post">
                    <li v-if="singlepost.user"><i class="icon-user"></i><a href="#"> {{ singlepost.user.name }}</a></li>
                    <li v-if="singlepost.category"><i class="icon-folder-open"></i><a href="#"> {{ singlepost.category.cat_name }}</a></li>
                    <li v-else>N/A</li>
                    <li><i class="icon-tags"></i><a href="#">Web design</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </article>          
        </div>
        <BlogSidebar/>
      </div>
    </div>
  </section>
    </span>
</template>

<script>

import BlogSidebar from "./BlogSidebar.vue"

export default {
    name: "SingleBlog",
    
    components: {
        BlogSidebar
    },
    mounted() {
        this.showSinglePost()
    },
    computed: {
        singlepost() {
            return this.$store.getters.getSinglePost
        }
    },
    methods: {
        showSinglePost() {
          this.$store.dispatch('getPostById', this.$route.params.id)
        }
    },
    watch: {
      $route(to, from) {
        this.showSinglePost()
      }
    }
}
</script>