
import Home from "./components/Home.vue";
import helloword from "./components/HelloWorld.vue";
import InicioPagina from "./components/InicioPagina.vue";

const routes = [
    {
      path: '/',
      name: "/home",
      component: Home
    },
    {
        path: '/hello-world',
        name: "/hello-world",
        component: helloword
      }
      ,
      {
          path: '/inicio-Pagina',
          name: "/hello-world",
          component: InicioPagina
        }
  ];

export default routes;