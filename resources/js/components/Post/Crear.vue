<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Crear Post 🐢</h4></div>
                <div class="card-body">
                    <form @submit.prevent=crearPost>
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="post.nombre">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-floating">
                                    <textarea class="form-control" id="floatingTextarea2" v-model="post.decripcion" style="height: 100px"></textarea>
                                    <label for="floatingTextarea2">Descripción</label>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Estado</label>
                                    <input type="text" class="form-control" v-model="post.estado">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-floating">
                                    <textarea class="form-control" id="floatingTextarea2" v-model="post.contenido" style="height: 100px"></textarea>
                                    <label for="floatingTextarea2">Contenido</label>
                                </div>
                            </div>
                            <div class="btn-group">
                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Selecciona la categoria
                            </button>
                            <div class="dropdown-menu">
                              Categorias
                            </div>
                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"crear-post",
    data(){
        return{
            post:{
                nombre:"",
                descripcion:"",
                estado:"",
                contenido:""
            }
        }
    },
    methods:{
       async crearPost(){
           await this.axios.post('/api/post', this.post).then(response=>{
                this.$router.push({name:"mostrarPost"})
            }).catch(error=>{
                console.log(error) //Ubicar error
            })
        }
    }
}
</script>


