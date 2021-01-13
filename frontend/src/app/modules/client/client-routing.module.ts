import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientComponent } from './client/client.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
    {
        path: '',
        component: ClientComponent
    },
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'details',
        component: ClientDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientComponentRoutingModule{}