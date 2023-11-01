import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientListPage } from "./pages/client-list/client-list.component";
import { Filho1PageComponent } from "./pages/filho/filho1-page.component";
import { Filho2PageComponent } from "./pages/filho/filho2-page.component";
import { PaiPageComponent } from "./pages/pai/pai-page.component";
import { UserGuard } from "./guards/user.guard";
import { LoginPageComponent } from "./pages/login/login-page.component";
import { ClientDetailPage } from "./pages/client-detail/client-detail.component";

const routes: Routes = [
    { path: 'client', component: ClientListPage, canActivate: [UserGuard] },
    { path: 'client/:id', component: ClientDetailPage },
    { path: 'login', component: LoginPageComponent },
    { 
        path: 'pai',
        component: PaiPageComponent,
        children: [
            { path: 'filho1', component: Filho1PageComponent },
            { path: 'filho2', component: Filho2PageComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }