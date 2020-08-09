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
        "One of the most popular ways of making payments in Brazil is the so called boleto. It's a bank slip with a barcode that can be scanned in order to make the payment. Normally they must be paid cash, so that's where pagboletos comes in: their proposition value is allowing users to pay the boleto with their credit, which gives the user more time to pay for their debt",
        2020,
        "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/pagboletos-cover.png?alt=media&token=b8d3e313-b1a8-4a46-a7a1-66bc8bb5033c",
        [
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/pag-boletos-btn-animation.gif?alt=media&token=3cc18951-745d-4ac9-a582-fb73f241fdba",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/pag-boletos-anim-animation.gif?alt=media&token=68ac67d5-d544-444a-9ab0-4c896591b0ed",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/pag-boletos-no-internet-animation.gif?alt=media&token=b8d9cfd4-f81e-42fc-973a-aa755f741bf4",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/pagboletos-img-01.jpg?alt=media&token=6dff88d5-bc63-40cd-b675-2d525e035096",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/pagboletos-img-02.jpg?alt=media&token=7f8931a7-3372-4b24-8923-339c5101704c",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/pagboletos-img-03.jpg?alt=media&token=9830c90a-d736-4cc7-874a-51ef74ff3a5a"
        ]
      )
    );
    this.lista.push(
      new Dado(
        "2",
        "Buquês são flores mortas",
        "Screen printed poster",
        "One of the most popular ways of making payments in Brazil is the so called boleto. It's a bank slip with a barcode that can be scanned in order to make the payment. Normally they must be paid cash, so that's where pagboletos comes in: their proposition value is allowing users to pay the boleto with their credit, which gives the user more time to pay for their debt.",

        2017,
        "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/bsfm%2Fbuques-sao-flores-mortas-layout.jpg?alt=media&token=e612e9af-718b-496d-8697-96dfcf42e10f",
        [
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/bsfm%2Fbuques-sao-flores-mortas-amarelo.jpg?alt=media&token=e3675b11-95c3-404a-b195-2e85f0d104b9",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/bsfm%2Fbuques-sao-flores-mortas-azul.jpg?alt=media&token=6c68859f-00ca-49ca-9578-5417f108f547",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/bsfm%2Fbuques-sao-flores-mortas-laranja.jpg?alt=media&token=c23b46a0-64f2-4716-9aa5-9943910637d1",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-e56f8.appspot.com/o/bsfm%2Fbuques-sao-flores-mortas-layout.jpg?alt=media&token=e612e9af-718b-496d-8697-96dfcf42e10f"
        ]
      )
    );
  }
}
