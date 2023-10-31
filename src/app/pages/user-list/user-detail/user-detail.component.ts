import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
})
export class UserDetail implements OnInit, OnDestroy { 
    userId: number;
    subscription: Subscription;

    constructor(private route: ActivatedRoute) { 
        this.userId = 0;
        this.subscription = new Subscription();
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.userId = +params['id'];
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}