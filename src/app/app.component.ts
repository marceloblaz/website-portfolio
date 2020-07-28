import { Component, VERSION, OnInit, Input } from '@angular/core';
import {Dado} from '../class';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  lista: Array<Dado> = [];

  ngOnInit(): void {
    this.lista.push(new Dado(1, 'Nome do projeto', 2020, 'endereco da imagem da capa'));
    this.lista.push(new Dado(1, 'Nome do projeto', 2019, 'endereco da imagem da capa'));
  }
}
