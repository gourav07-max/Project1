import { createApp } from 'vue'
import App from './App.vue'
import lubricantPage from "./components/lubricant"
import fuelPage from "./components/fuel"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import LoginPage from "./components/LoginPage"
import ContactPage from "./components/ContactPage"
import CartPage from "./components/CartPage"


import { createRouter, createWebHistory } from 'vue-router';

const routes=[
    {
        name:"HomePage",
        component:HomePage,
        path:"/"
    },
   
    {
        name:"lubricantPage",
        component:lubricantPage,
        path:"/lubricantPage"
    },
    {
        name:"fuelPage",
        component:fuelPage,
        path:"/fuelPage"
    },
    {
        name:"AboutPage",
        component:AboutPage,
        path:"/AboutPage"
    },
    {
        name:"LoginPage",
        component:LoginPage,
        path:"/LoginPage"
    },
    {
        name:"ContactPage",
        component:ContactPage,
        path:"/ContactPage"
    }
    ,
    {
        name:"CartPage",
        component:CartPage,
        path:"/CartPage"
    }

];
const router=createRouter(
    {
        history:createWebHistory(),
        routes,
    }
);
const app = createApp(App);
app.use(router);
app.mount('#app');
