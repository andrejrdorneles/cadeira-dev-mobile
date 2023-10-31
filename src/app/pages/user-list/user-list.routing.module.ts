import { RouterModule, Routes } from "@angular/router";
import { UserListPage } from "./user-list.component";
import { UserDetail } from "./user-detail/user-detail.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: 'user',
        component: UserListPage,
        children: [
            {
                path: ':id',
                component: UserDetail
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class UserListRoutingModule { }