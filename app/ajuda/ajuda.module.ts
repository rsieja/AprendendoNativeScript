import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AjudaRoutingModule } from "./ajuda-routing.module";
import { AjudaComponent } from "./ajuda.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AjudaRoutingModule
    ],
    declarations: [
        AjudaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AjudaModule { }