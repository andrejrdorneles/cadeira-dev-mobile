import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'client-detail',
    template: `
        <h3>Detalhe do Cliente</h3>
        <p>{{client.id}}</p>
        <p>{{client.nome}}</p>
        <p>{{client.descricao}}</p>
    `
})
export class ClientDetailPage {
    client = { id: "", nome: "", descricao: "" }

    constructor(private activeRouter: ActivatedRoute) { }

    ngOnInit(){
        const id = this.activeRouter.snapshot.paramMap.get("id")
        if(id){
            this.client = { nome: `Client ${id}`, descricao: `Descrição do Cliente ${id}`, id }
        }
    }
}