import { Component } from "@angular/core";

@Component({
    selector: 'app-binding',
    template: `
        <h1>Imagem do angular</h1>
        <img [src]="imagem" [style]="{ width: width }"/>
        <div class="alert" [class]="{ success: sucesso }" [style.background-color]="backgroundColor">
            Alerta
        </div>
        <button (click)="enviarDados()">Enviar Dados</button>
    `,
    styles: [
        `.alert {
            width: 200px;
            height: 100px,;
            border: 1px solid blue;
        }
        .success {
            border: 5px solid green;
        }`
    ]
})
export class BindingPageComponent {
    width = "300px"
    backgroundColor = "red"
    imagem = "https://angular.io/assets/images/logos/angular/shield-large.svg"

    sucesso = true;

    enviarDados() {
        this.sucesso = !this.sucesso;
    }
}