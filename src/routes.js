
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
          path: '/inicio-pagina',
          name: "/inicio-pagina",
          component: InicioPagina
        }
  ];

export default routes;