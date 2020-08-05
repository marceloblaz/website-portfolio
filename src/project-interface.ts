export class Dado {
  id: string;
  nome: string;
  description: string;
  ano: number;
  coverurl: any;
  constructor(id: string, nome: string, description:string, ano: number, coverurl: string) {
    this.id = id;
    this.nome = nome;
    this.description = description;
    this.ano = ano;
    this.coverurl = coverurl;
  }
}
