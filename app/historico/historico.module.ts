import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HistoricoRoutingModule } from "./historico-routing.module";
import { HistoricoComponent } from "./historico.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HistoricoRoutingModule
    ],
    declarations: [
        HistoricoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HistoricoModule { }