import { Component, VERSION, OnInit, Input } from '@angular/core';
import {Dado} from '../dado';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  lista: Array<Dado> = [];

  ngOnInit(): void {
    this.lista.push(new Dado(1, 'Exemplo 1', 'descricao projeto 1', 2020, 'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/pagboletos-cover.png?alt=media&token=b8d3e313-b1a8-4a46-a7a1-66bc8bb5033c'));
    this.lista.push(new Dado(1, 'Nome do projeto', 'descricao projeto 2', 2019, 'endereco da imagem da capa'));
  }
}
