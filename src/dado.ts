export class Dado {
  id: string;
  nome: string;
  description: string;
  longdescription: string;
  ano: number;
  coverurl: any;
  constructor(id: string, nome: string, description:string, longdescription:string, ano: number, coverurl: string) {
    this.id = id;
    this.nome = nome;
    this.description = description;
    this.longdescription = longdescription;
    this.ano = ano;
    this.coverurl = coverurl;
  }
}
