import { NgModule } from "@angular/core";
import { UserListPage } from "./user-list.component";
import { RouterModule } from "@angular/router";
import { UserDetail } from "./user-detail/user-detail.component";

@NgModule({
    imports: [RouterModule],
    declarations: [UserListPage, UserDetail]
})
export class UserListModule { }
