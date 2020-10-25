<template>
    <div>
        <section class="content">
            <div class="container-fluid">
                <div class="row justify-content-around">
                    <div class="col-md-10">
                        <!-- general form elements -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Add New Post</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form role="form" enctype="multipart/form-data" @submit.prevent>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="title">Post Title</label>
                                        <input type="text" v-model="form.title" name="title" 
                                        class="form-control" id="title" 
                                        :class="{ 'is-invalid': form.errors.has('title') }" placeholder="Post Title">
                                        <has-error :form="form" field="title"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Description</label>
                                        <textarea v-model="form.description" name="description" 
                                        class="form-control" id="description" rows="5"
                                        :class="{ 'is-invalid': form.errors.has('description') }" placeholder="Description">
                                        </textarea>
                                        <has-error :form="form" field="description"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="category_id">Select Category</label>
                                        <select id="category_id" v-model="form.category_id" class="form-control" :class="{ 'is-invalid': form.errors.has('category_id') }">
                                            <option disabled value="">Select Category</option>
                                            <option :value="category.id" v-for="category in getAllCategory" :key="category.id">{{ category.cat_name }}</option>
                                        </select>
                                        <has-error :form="form" field="category_id"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="title">Post Image</label>
                                        <input type="file" name="photo" 
                                        class="form-control" id="photo" 
                                        :class="{ 'is-invalid': form.errors.has('photo') }">
                                        <has-error :form="form" field="photo"></has-error>
                                    </div>
                                    <!-- <div class="form-group">
                                        <label for="photo">Upload Post Image</label>

                                        <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="photo">
                                        <label class="custom-file-label" for="photo">Choose file</label>
                                        </div>
                                    </div> -->
                                
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
            form: new Form({
                title: '',
                description: '',
                category_id: '',
                photo: ''
            })
        }
    },
    mounted() {
        this.$store.dispatch('allCategory')
    },
    computed: {
        getAllCategory() {
            return this.$store.getters.getCategory;
      }
    },
    methods: {
        
    },
    
}

</script>

<style scoped>

</style>