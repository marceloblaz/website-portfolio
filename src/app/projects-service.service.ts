import { Injectable } from '@angular/core';
import { Dado } from '../dado';

@Injectable()
export class ProjectsServiceService {
  lista: Array<Dado> = [];

  buscaListaProjetos() {
    return this.lista;
  }

  constructor() {
    this.lista.push(
      new Dado(
        '0',
        'Flavor Maker',
        'Crafting one of the biggest recipe apps in the US with Object Oriented UX',
        "While cooking can be a lot of fun, it can also be a burden: planning meals, shopping for ingredients, and getting the flavor right can be wearying tasks. The flavor maker app can help your entire cooking journey, from meal inspiration to planning and execution. Our app offers a range of features that will ease your cooking experience: the meal plan, the shopping list, recipe videos, and a lot of inspiration so you can adventure into the flavor universe.\n\nFlavor Maker has over a million installs and a good reputation. We often get good user feedback on the app stores and only occasional complaints.\n\nI joined this project about a couple of years after my first contact with Object-Oriented UX (OOUX). I was finally moving seriously toward formal education in the field. I had the chance to enroll in the certification program to become an OOUX strategist. The course confirmed my perceptions of how innovative and holistic OOUX is and gave me the confidence to start diagnosing what was going on with Flavor Maker. I started realizing the app, although cherished by users, needed more cohesiveness. The team didn't have a shared understanding of the product and the relationships between its objects. For instance, our roadmaps for new features rarely addressed how the new ideas would tie into the existing ecosystem, which was often thought of as a minor detail. I also believe in continuous delivery, but that shouldn't mean we only deliver value with extensive new shiny features. It felt like there needed to be more room for incremental innovations. I always remember this particular case about recipes and recipe videos. It seems apparent that recipes and recipe videos should tightly connect. Still, because those two came as different features at different times, they were perceived as totally different things. Videos and recipes were severed entirely in the app interface, almost as if they didn't share an evident relationship. Interestingly enough, after a video finishes, there's a button to go to the respective recipe; but this doesn't hold the other way around. The concept was there at the time of implementing videos but only half-baked.\n\nIt was almost like designing by chance rather than intent. It was an excellent opportunity to apply my knowledge from the course.\n\nI set up meetings to introduce some of the OOUX basic concepts and look at our app to help me get some buy-in from my managers and colleagues. It didn't happen fast, but the discussions and questions we were getting from those meetings were increasingly fresh and exciting. We were getting deeper into the objects that made up our app and how objects connected instead of simply taking in new ideas and quilting them together.\n\nAs we got used to this new mindset, my first win was getting more respect from my peers as a product person. If I was once remembered as the person who came in last minute to create the prototype only, asking these fundamental questions showed that I had more to add than cosmetics. Switching my focus from verb-oriented thinking and prototypes to noun-oriented gave me a voice, and I wasn't the only one. My peers felt disconnected too(maybe even excluded) from the product creation as much as I did. Once I started a weekly meeting to talk about our app design, they showed up and wanted to contribute. They were eager to give opinions and feedback. Inviting developers, QAs, and managers into my design process opened the door to collaboration. Until then, we were a team working in siloes, each doing their jobs well but not benefiting from the beehive mind and diverse thinking that makes a product stand out. Enabling collaboration is the most significant benefit we got from this process.\n\nIf you open Flavor Maker today, you'll still find broken objects: it's more expensive to fix something than build it right the first time. Our new releases, however, apply the new mindset to ensure we don't add excessive complexity to the app. We plan how new objects relate to existing ones, and often we find we don't even need new objects. We can reuse existing objects and explore them in different ways. We design them with intent.",
        2021,
        'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/flavor_maker_cover.png?alt=media&token=74c0c043-53c6-4e99-a116-cf200928aa3f',
        []
      )
    );
    this.lista.push(
      new Dado(
        '1',
        'Multipaste',
        'A Figma plugin to paste multiple layers to multiple frames or groups at once',
        "As my second contribution to the Figma community, I've created Multipaste, a plugin that allows pasting multiple node elements to multiple frames or groups at once. Figma currently doesn't support pasting anything to multiple frames at once, so I created this plugin to solve that pain. It will work with elements that are nested within other frames or lose on the canvas. If it is a component, it will create an instance  of that component and paste the instance instead of duplicating the component.",
        2020,
        'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/red-multipaste-plugin-cover.gif?alt=media&token=9926f76f-e45e-41d0-b8e6-27988002bbbc',
        [
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/multipaste-image-01.gif?alt=media&token=7cf5364c-3984-41cd-852a-31a28b9ecfc1',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/multipaste-image-03.png?alt=media&token=a4ec6c26-ec17-48a0-b510-edb6a9e542ac',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/multipaste-image-02.gif?alt=media&token=ffb62312-1a70-4f65-9851-88cc0a16d833',
        ]
      )
    );
    this.lista.push(
      new Dado(
        '2',
        'Line Length',
        'A Figma plugin that sets your text layer width based on the average amount of characters per line',
        "I proudly present you Line Length, a plugin for Figma that resizes your text layers based on the average amount of characters per line. I designed and developed this plugin because I grew tired of counting characters or copy pasting into an online character counter tool. So I figured there should be a plugin for that! Figma plugins are flexible tools you can easily install that speed up your workflow, and that's exactly what I hope Line Length will do for all the Figma community! Look up  'Line Length' in Figma Community to download it.",
        2020,
        'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/line-length-cover-02.png?alt=media&token=5a762ca6-99a3-4c95-a25f-7cb14f9f070e',
        [
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/line-length-img-02.png?alt=media&token=6cc9af19-69bf-4cdd-acaa-2aede82bb906',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/line-length-cover-02.png?alt=media&token=5a762ca6-99a3-4c95-a25f-7cb14f9f070e',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/line-length-100-downloads.png?alt=media&token=d5d0f4f8-e035-4c29-894b-98c8cd337054',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/line-length-demo.gif?alt=media&token=fd5d3de0-b35d-4a27-84d1-246ce289213c',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/line-length-img-01.png?alt=media&token=a44628f0-3ccd-4889-b89e-1d08bd4a3a08',
        ]
      )
    );

    this.lista.push(
      new Dado(
        '3',
        'pagboletos',
        'An app for paying brazilian boletos with credit card',
        "One of the most popular ways of making payments in Brazil is the so called boleto. It's a bank slip with a barcode that can be scanned in order to make the payment. Normally they must be paid cash, so that's where pagboletos comes in: their proposition value is allowing users to pay the boleto with their credit, which gives the user more time to pay for their debt.",
        2020,
        'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pagboletos-cover.png?alt=media&token=a5099e2e-3188-44c8-b929-87858c2df91c',
        [
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pagboletos-img-01.jpg?alt=media&token=ee004475-dc19-4862-b203-328ef8e66688',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pag-boletos-no-internet-animation.gif?alt=media&token=b15935d6-8e0b-43cf-9214-22629954391a',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pagboletos-img-02.jpg?alt=media&token=93f93863-502b-4556-a51c-8503cc806311',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pag-boletos-btn-animation.gif?alt=media&token=672f3ef9-e311-40b3-af97-d4b047cc7869',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pagboletos-img-03.jpg?alt=media&token=c60543f5-04a6-43b4-b53f-41928ea5e3e9',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/pag-boletos-anim-animation.gif?alt=media&token=21138151-bc7d-441b-b117-f78d113c3f49',
        ]
      )
    );
    this.lista.push(
      new Dado(
        '4',
        'Buquês são flores mortas',
        'Screen printed poster',
        "This poster was inspired in a song by a brazilian artist, Criolo. The phrase says that ’bouquets are dead flowers'. That sounded so interesting to me from the moment I first heard it, the conflict between the liveness e beauty of a bouquet and the fact that those flowers are actually dead. So I created this design and screen printed with either white or black it on colored paper.",
        2016,
        'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/buques-sao-flores-mortas-layout.jpg?alt=media&token=ff565add-9959-4a55-a3dd-11022cb7bc42',
        [
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/buques-sao-flores-mortas-amarelo.jpg?alt=media&token=e2cd7d0d-95cd-4131-9eef-5a23140242b7',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/buques-sao-flores-mortas-azul.jpg?alt=media&token=1f7d5165-4f58-4a4d-ab18-a210686a4af9',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/buques-sao-flores-mortas-laranja.jpg?alt=media&token=0ad8a015-4ab0-4dbe-9ff6-8696086fa79e',
          'https://firebasestorage.googleapis.com/v0/b/mb-portfolio-8e4f6.appspot.com/o/buques-sao-flores-mortas-layout.jpg?alt=media&token=ff565add-9959-4a55-a3dd-11022cb7bc42',
        ]
      )
    );
  }
}
