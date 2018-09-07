import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EmergenciaRoutingModule } from "./emergencia-routing.module";
import { EmergenciaComponent } from "./emergencia.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EmergenciaRoutingModule
    ],
    declarations: [
        EmergenciaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EmergenciaModule { }