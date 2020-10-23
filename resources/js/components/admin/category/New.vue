<template>
    <div>
        <section class="content">
            <div class="container-fluid">
                <div class="row justify-content-around">
                    <div class="col-md-6">
                        <!-- general form elements -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Add New Category</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form role="form" @click.prevent>
                                <div class="card-body">
                                <div class="form-group">
                                    <label for="newCategory">Add New Category</label>
                                    <input type="text" v-model="form.cat_name" name="cat_name" 
                                    class="form-control" id="newCategory" 
                                    :class="{ 'is-invalid': form.errors.has('cat_name') }" placeholder="Add New Category">
                                    <has-error :form="form" field="cat_name"></has-error>
                                </div>
                                
                                </div>
                                <!-- /.card-body -->

                                <div class="card-footer">
                                <button type="submit" @click="addCategory()" class="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.card -->
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
    </div>
</template>

<script>
export default {
    name: "New",

    data() {
        return {
        // Create a new form instance
            form: new Form({
            cat_name: ''
      })
    }
    },
    methods: {
        addCategory() {
            this.form.post('/add-category')
                .then((response)=>{
                    //console.log(response.data);
                    this.$router.push('/category-list')
                    Toast.fire({
                    icon: 'success',
                    title: 'Category Added Successfully'
                    })
                })
                .catch(()=>{

                })
        }
    }
    
}
</script>

<style scoped>

</style>>
