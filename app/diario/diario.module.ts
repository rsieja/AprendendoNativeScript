import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DiarioRoutingModule } from "./diario-routing.module";
import { DiarioComponent } from "./diario.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DiarioRoutingModule
    ],
    declarations: [
        DiarioComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DiarioModule { }