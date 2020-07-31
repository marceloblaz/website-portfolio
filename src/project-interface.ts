export class Dado {
  indice: number;
  nome: string;
  description: string;
  ano: number;
  coverurl: any;
  constructor(indice: number, nome: string, description:string, ano: number, coverurl: string) {
    this.indice = indice;
    this.nome = nome;
    this.description = description;
    this.ano = ano;
    this.coverurl = coverurl;
  }
}
