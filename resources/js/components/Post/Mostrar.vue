<template>
    <div class="row">
        <div class="col-12 mb-2">
            <!-- llamamos al componente para Crear   -->
            <router-link :to='{name:"crearPost"}' class="btn btn-success"><i class="fas fa-plus-circle"></i></router-link>
        </div>
        <div class="col-12">             
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="bg-dark text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Estado</th>
                                    <th>Contenido</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="post in posts" :key="post.id">
                                    <td>{{ post.id }}</td>
                                    <td>{{ post.nombre }}</td>
                                    <td>{{ post.decripcion }}</td>
                                    <td>{{ post.estado }}</td>
                                    <td>{{ post.contenido }}</td>
                                    <td>
                                        <!-- llamamos al componente para Editar     -->
                                        <router-link :to='{name:"editarPost",params:{id:post.id}}' class="btn btn-info"><i class="fas fa-edit"></i></router-link>
                                        <a type="button" @click="borrarPost(post.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
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
    name:"posts",
    data(){
        return {
            posts:[]
        }
    },
    mounted(){
        this.mostrarPost()
    },
    methods:{
        async mostrarPost(){
            await this.axios.get('/api/post').then(response=>{
                this.posts = response.data
            }).catch(error=>{
                console.log(error)
                this.posts = []
            })
        },
        borrarPost(id){
            if(confirm("¿Eliminar post?")){
                this.axios.delete(`/api/post/${id}`).then(response=>{
                    this.mostrarPost()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>