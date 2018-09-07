import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EmergenciaComponent } from "./emergencia.component";

const routes: Routes = [
    { path: "", component: EmergenciaComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EmergenciaRoutingModule { }