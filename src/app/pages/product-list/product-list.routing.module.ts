import { RouterModule, Routes } from "@angular/router";
import { ProductListPage } from "./product-list.component";
import { ProductDetail } from "./product-detail/product-detail.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: 'product',
        component: ProductListPage,
        children: [
            {
                path: ':id',
                component: ProductDetail
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ProductListRoutingModule { }