<template>
    <div>
        <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Category List</h3>
                <div class="card-tools">
                    <button class="btn">
                      <router-link to="/add-category" style="color:#fff" class="btn btn-primary btn-sm">Add Category</router-link>
                    </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>Category Name</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(category, index) in getAllCategory" v-bind:key="category.id">
                    <td>{{ index+1 }}</td>
                    <td>{{ category.cat_name }}</td>
                    <td>{{ category.created_at | dateformat }}</td>
                    <td>
                        <a><router-link :to = "`/edit-category/${category.id}`">Edit</router-link></a> |
                        <a href="#" @click.prevent = deleteCategory(category.id)>Delete</a>
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
      this.$store.dispatch('allCategory')
    },
    computed: {
      getAllCategory() {
        return this.$store.getters.getCategory;
      }
    },
    methods: {
      deleteCategory(id) {
        //console.log(id)
        axios.get('/category/' + id)
          .then(()=>{
            this.$store.dispatch('allCategory')
            Toast.fire({
            icon: 'success',
            title: 'Category Deleted Successfully'
            })
          })
      }
    }
}
</script>

<style scoped>

</style>>
