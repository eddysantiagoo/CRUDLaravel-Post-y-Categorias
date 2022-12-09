<template>
    <div class="row">
        <div class="col-12 mb-2">
            <!-- llamamos al componente para Crear   -->
            <router-link :to='{name:"crearCategoria"}' class="btn btn-success"><i class="fas fa-plus-circle"></i></router-link>
        </div>
        <div class="col-12">             
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="bg-dark text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="blog in blogs" :key="blog.id">
                                    <td>{{ blog.id }}</td>
                                    <td>{{ blog.titulo }}</td>
                                    <td>{{ blog.contenido }}</td>
                                    <td>
                                        <!-- llamamos al componente para Editar     -->
                                        <router-link :to='{name:"editarCategoria",params:{id:blog.id}}' class="btn btn-info"><i class="fas fa-edit"></i></router-link>
                                        <a type="button" @click="borrarBlog(blog.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>                          
        </div>
    </div>
</template>

<script>
export default {
    name:"blogs",
    data(){
        return {
            blogs:[]
        }
    },
    mounted(){
        this.mostrarCategorias()
    },
    methods:{
        async mostrarCategorias(){
            await this.axios.get('/api/blog').then(response=>{
                this.blogs = response.data
            }).catch(error=>{
                console.log(error)
                this.blogs = []
            })
        },
        borrarBlog(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/blog/${id}`).then(response=>{
                    this.mostrarCategorias()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>