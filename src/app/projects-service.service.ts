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
        "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pagboletos-cover.png?alt=media&token=a5099e2e-3188-44c8-b929-87858c2df91c",
        [
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pagboletos-img-01.jpg?alt=media&token=ee004475-dc19-4862-b203-328ef8e66688",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pag-boletos-no-internet-animation.gif?alt=media&token=b15935d6-8e0b-43cf-9214-22629954391a",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pagboletos-img-02.jpg?alt=media&token=93f93863-502b-4556-a51c-8503cc806311",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pag-boletos-btn-animation.gif?alt=media&token=672f3ef9-e311-40b3-af97-d4b047cc7869",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pagboletos-img-03.jpg?alt=media&token=c60543f5-04a6-43b4-b53f-41928ea5e3e9",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pag-boletos-anim-animation.gif?alt=media&token=21138151-bc7d-441b-b117-f78d113c3f49"
        ]
      )
    );
    this.lista.push(
      new Dado(
        "2",
        "Buquês são flores mortas",
        "Screen printed poster",
        "This poster was inspired in a song by a brazilian artist, Criolo. The phrase says that ’bouquets are dead flowers'. That sounded so interesting to me from the moment I first heard it, the conflict between the liveness e beauty of a bouquet and the fact that those flowers are actually dead. So I created this design and screen printed with either white or black it on colored paper.",
        2016,
        "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/buques-sao-flores-mortas-layout.jpg?alt=media&token=ff565add-9959-4a55-a3dd-11022cb7bc42",
        [
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/buques-sao-flores-mortas-amarelo.jpg?alt=media&token=e2cd7d0d-95cd-4131-9eef-5a23140242b7",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/buques-sao-flores-mortas-azul.jpg?alt=media&token=1f7d5165-4f58-4a4d-ab18-a210686a4af9",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/buques-sao-flores-mortas-laranja.jpg?alt=media&token=0ad8a015-4ab0-4dbe-9ff6-8696086fa79e",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/buques-sao-flores-mortas-layout.jpg?alt=media&token=ff565add-9959-4a55-a3dd-11022cb7bc42"
        ]
      )
    );
  }
}
