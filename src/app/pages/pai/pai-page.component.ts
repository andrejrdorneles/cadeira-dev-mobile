import { Component } from "@angular/core";

@Component({
    selector: 'app-pai',
    template: `
        <h1>Componente Pai</h1>
        <a [routerLink]="['filho1']">Ir para Filho 1</a>
        <br>
        <a [routerLink]="['filho2']">Ir para Filho 2</a>
        <br>
        <router-outlet />
    `
})
export class PaiPageComponent {

}