export class Dado {
  id: string;
  nome: string;
  description: string;
  longdescription: string;
  ano: number;
  coverurl: any;
  imgs: Array<string>;
  constructor(id: string, nome: string, description:string, longdescription:string, ano: number, coverurl: string, imgs: Array<string>) {
    this.id = id;
    this.nome = nome;
    this.description = description;
    this.longdescription = longdescription;
    this.ano = ano;
    this.coverurl = coverurl;
    this.imgs = imgs;
  }
}
