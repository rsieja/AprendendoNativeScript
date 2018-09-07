import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

/*
const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" }
];*/

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "perfil", loadChildren: "./perfil/perfil.module#PerfilModule" },
    { path: "diario", loadChildren: "./diario/diario.module#DiarioModule" },
    { path: "historico", loadChildren: "./historico/historico.module#HistoricoModule" },
    { path: "ajuda", loadChildren: "./ajuda/ajuda.module#AjudaModule" },
    { path: "emergencia", loadChildren: "./emergencia/emergencia.module#EmergenciaModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
