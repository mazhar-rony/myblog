<template>
    <div>
      <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Post List</h3>
                <div class="card-tools">
                    <button class="btn">
                      <router-link to="/add-post" style="color:#fff" class="btn btn-primary btn-sm">Add New Post</router-link>
                    </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover table-responsive">
                  <thead>
                  <tr>
                    <th>Sl</th>
                    <th>User</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Photo</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(post, index) in allpost" v-bind:key="post.id">
                    <td>{{ index+1 }}</td>
                    <td>{{ post.user.name }}</td>
                    <td v-if="post.category">{{ post.category.cat_name }}</td>
                    <td v-else>undefined</td>
                    <td>{{ post.title | shortlength(20, "...") }}</td>
                    <td>{{ post.description | shortlength(50, "...") }}</td>
                    <td><img :src="postImage(post.photo)" alt="" width="50" height="50"></td>
                    <!-- <td><img :src="'/uploadimage/'+post.photo" alt="" width="50" height="50"></td> -->
                    <td style="white-space: nowrap;">
                        <a><router-link :to = "`/edit-post/${post.id}`">Edit</router-link></a> | |
                        <a href="#" @click.prevent="deletePost(post.id)">Delete</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    </div>
</template>

<script>
export default {
    name: "List",
    
    mounted() {
        this.$store.dispatch('getAllPost')
    },
    computed: {
        allpost() {
            return this.$store.getters.getAllPost
        }
    },
    methods: {
        postImage(img) {
            return "uploadimage/" + img;
        },
        deletePost(id) {
            axios.get('/delete/'+id)
                this.$store.dispatch('getAllPost')
                .then(() => {
                    Toast.fire({
                    icon: 'success',
                    title: 'Post Deleted Successfully'
            })
                })
                .catch(() => {

                })
        }
    }
}
</script>

<style scoped>

</style>