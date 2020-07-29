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
    this.lista.push(new Dado(1, 'Nome do projeto', 2020, 'https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_variant_medium_hyde_blush_1200x.jpg?v=1593114598'));
    this.lista.push(new Dado(1, 'Nome do projeto', 2019, 'endereco da imagem da capa'));
  }
}
