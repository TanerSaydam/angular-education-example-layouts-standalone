import { Routes } from "@angular/router";
import { loginRoute } from "../components/login/route/login.route";

const routes: Routes = [
    loginRoute,
    {
        path: "",
        loadComponent: ()=> import("../components/layouts/layouts.component").then(c=> c.LayoutsComponent),
        children: [
            {
                path: "",
                loadComponent: ()=> import("../components/home/home.component").then(c=> c.HomeComponent)
            },
            {
                path: "home",
                loadComponent: ()=> import("../components/home/home.component").then(c=> c.HomeComponent)
            },
            {
                path: "about",
                loadComponent: ()=> import("../components/about/about.component").then(c=> c.AboutComponent)
            },
            {
                path: "**",
                loadComponent: ()=> import("../components/not-found/not-found.component").then(c=> c.NotFoundComponent)
            }
        ]
    },    
]

export default routes;