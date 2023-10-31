import { NgModule } from "@angular/core";
import { ProductListPage } from "./product-list.component";
import { RouterModule } from "@angular/router";
import { ProductDetail } from "./product-detail/product-detail.component";

@NgModule({
    imports: [RouterModule],
    declarations: [ProductListPage, ProductDetail]
})
export class ProductListModule { }
