import { Injectable } from "@angular/core";
import { Dado } from "../dado";

@Injectable()
export class ProjectsServiceService {
  lista: Array<Dado> = [];

  buscaListaProjetos() {
    return this.lista;
  }

  constructor() {
    this.lista.push(
      new Dado(
        "1",
        "pagboletos",
        "An app for paying brazilian boletos with credit card",
        "One of the most popular ways of making payments in Brazil is the so called boleto. It's a bank slip with a barcode that can be scanned in order to make the payment. Normally they must be paid cash, so that's where pagboletos comes in: their proposition value is allowing users to pay the boleto with their credit, which gives the user more time to pay for their debt.",
        2020,
        "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/pagboletos-cover.png?alt=media&token=b8d3e313-b1a8-4a46-a7a1-66bc8bb5033c"
      )
    );
    this.lista.push(
      new Dado(
        "2",
        "Buquês são flores mortas",
        "Screen printed poster",
        "This project was inspired by a song of a brazilian artist, Criolo. It says that bouquets are dead flowers. That sounded very interesting to me, the contrast between the liveness and beauty of a bouquet and the reality that those flowers are actually dead.",
        2017,
        "endereco da imagem da capa"
      )
    );
  }
}
