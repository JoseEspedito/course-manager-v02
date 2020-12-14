import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { NavBarComponent } from "./component/nav-bar.component";
import { Error404Componennt } from './error-404/error-404.componet';

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Componennt
    ],
    imports: [
        RouterModule.forChild ([
            {
                path: '**', component: Error404Componennt
              }
        
        ]),
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {
}