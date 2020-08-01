import { Component, OnInit } from '@angular/core';
import { Dado } from '../../project-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lista: Array<Dado> = [];

  ngOnInit(): void {
    this.lista.push(new Dado(1, 'Exemplo 1', 'descricao projeto 1', 2020, 'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/pagboletos-cover.png?alt=media&token=b8d3e313-b1a8-4a46-a7a1-66bc8bb5033c'));
    this.lista.push(new Dado(1, 'Nome do projeto', 'descricao projeto 2', 2019, 'endereco da imagem da capa'));
  }
}





// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }