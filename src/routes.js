
import InicioPagina from "./components/InicioPagina.vue";
import helloword from "./components/HelloWorld.vue";

const routes = [
    {
      path: '/',
      name: "/inicioPagina",
      component: InicioPagina
    },
    {
        path: '/helloworld',
        name: "/helloworld",
        component: helloword
      }
  ];

export default routes;