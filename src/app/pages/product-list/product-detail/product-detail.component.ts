import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
})
export class ProductDetail implements OnInit, OnDestroy { 
    productId: number;
    subscription: Subscription;

    constructor(private route: ActivatedRoute) { 
        this.productId = 0;
        this.subscription = new Subscription();
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.productId = +params['id'];
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}