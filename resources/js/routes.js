const Home = () => import('./components/Home.vue')
const Post = () => import('./components/Post.vue')
//importamos los componentes para el Categoria
const Mostrar = () => import('./components/Categoria/Mostrar.vue');
const Crear = () => import('./components/Categoria/Crear.vue');
const Editar = () => import('./components/Categoria/Editar.vue');
//importamos los componentes para los posts
const MostrarPost = () => import('./components/Post/Mostrar.vue');
const CrearPost = () => import('./components/Post/Crear.vue');
const EditarPost = () => import('./components/Post/Editar.vue');


export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'mostrarCategorias',
        path: '/categorias',
        component: Mostrar
    },
    {
        name: 'crearCategoria',
        path: '/crear',
        component: Crear
    },
    {
        name: 'editarCategoria',
        path: '/editar/:id',
        component: Editar
    },
     {
        name: 'mostrarPost',
        path: '/posts',
        component: MostrarPost
    },
    {
        name: 'crearPost',
        path: '/crearpost',
        component: CrearPost
    },
    {
        name: 'editarPost',
        path: '/editar/:id',
        component: EditarPost
    }
]