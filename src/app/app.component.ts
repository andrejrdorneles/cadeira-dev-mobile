import { Component } from '@angular/core';
import { ClientService } from './service/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-primeira-aula';
  descricao1 = 'Descrição definida';

  clientePremium = false;

  valor: {
    descricao: string,
    nome: string,
    id: number
  } = {
    descricao: 'teste',
    nome: 'nome',
    id: 0
  }

  valores = [
    {
      descricao: 'teste1',
      nome: 'nome1',
      id: 1
    },
    {
      descricao: 'teste2',
      nome: 'nome2',
      id: 2
    }
  ]

  umaData = new Date()
  umDinheiro = 100
  nome = 'André'

  constructor(private clientService: ClientService) { }

  sayHello(){
    alert(this.clientService.sayHello())
  }

  adicionar() {
    this.valores.push(Object.assign({}, this.valor))
  }
}
