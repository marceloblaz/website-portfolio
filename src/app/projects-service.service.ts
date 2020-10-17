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
        "Multipaste",
        "A Figma plugin to paste multiple layers to multiple frames or groups at once",
        "As my second contribution to the Figma community, I've created Multipaste, a plugin that allows pasting multiple node elements to multiple frames or groups at once. Figma currently doesn't support pasting anything to multiple frames at once, so I created this plugin to solve that pain. It will work with elements that are nested within other frames or lose on the canvas. If it is a component, it will create an instance  of that component and paste the instance instead of duplicating the component. You can install it from https://www.figma.com/community/plugin/893914045094807058/Multipaste",
        2020,
        "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/red-multipaste-plugin-cover.gif?alt=media&token=9926f76f-e45e-41d0-b8e6-27988002bbbc",
        [
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/multipaste-image-01.gif?alt=media&token=7cf5364c-3984-41cd-852a-31a28b9ecfc1"
        ]
      )
    );
    this.lista.push(
      new Dado(
        "2",
        "Line Length",
        "A Figma plugin that sets your text layer width based on the average amount of characters per line",
        "I proudly present you Line Length, a plugin for Figma that resizes your text layers based on the average amount of characters per line. I designed and developed this plugin because I grew tired of counting characters or copy pasting into an online character counter tool. So I figured there should be a plugin for that! Figma plugins are flexible tools you can easily install that speed up your workflow, and that's exactly what I hope Line Length will do for all the Figma community! Look up  'Line Length' in Figma Community to download it.",
        2020,
        "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/line-length-cover-website.png?alt=media&token=566d77d3-e168-41ef-9261-5d520235b5e6",
        [
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/line-length-cover-website.png?alt=media&token=566d77d3-e168-41ef-9261-5d520235b5e6",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/line-length-100-downloads.png?alt=media&token=d5d0f4f8-e035-4c29-894b-98c8cd337054",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/line-length-demo.gif?alt=media&token=fd5d3de0-b35d-4a27-84d1-246ce289213c",
          "https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/line-length-img-01.png?alt=media&token=a44628f0-3ccd-4889-b89e-1d08bd4a3a08"
        ]
      )
    );

    this.lista.push(
      new Dado(
        "3",
        "pagboletos",
        "An app for paying brazilian boletos with credit card",
        "One of the most popular ways of making payments in Brazil is the so called boleto. It's a bank slip with a barcode that can be scanned in order to make the payment. Normally they must be paid cash, so that's where pagboletos comes in: their proposition value is allowing users to pay the boleto with their credit, which gives the user more time to pay for their debt.",
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
        "4",
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
