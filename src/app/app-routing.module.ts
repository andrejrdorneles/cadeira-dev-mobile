import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientListPage } from "./pages/client-list/client-list.component";

const routes: Routes = [
    { path: 'client', component: ClientListPage }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }