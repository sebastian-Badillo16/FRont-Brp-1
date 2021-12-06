import login from './views/login'
import home from './views/home'
import dependencias  from './views/dependencias'
import usuarios  from './views/usuarios'


import visitas from './views/visitas'
import verVisitas from './views/verVisitas'


export const routes = [
    {
      path: "/",
      name: 'home',
      component: home
    },
    {
      path: "/",
      name: 'login',
      component: login
    },

    {
      path: "/dependencias",
      name: 'dependencias',
      component: dependencias
    }, 

    {
      path: '/usuarios',
      name: 'usuarios',
      component: usuarios
    },
    {
      path: '/visitas',
      name: 'visitas',
      component: visitas
    },
    {
      path: '/verVisitas',
      name: 'verVisitas',
      component: verVisitas
    },
    
]
