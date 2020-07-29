export class Dado {
  indice: number;
  nome: string;
  ano: number;
  coverurl: any;
  constructor(indice: number, nome: string, ano: number, coverurl: string) {
    this.indice = indice;
    this.nome = nome;
    this.ano = ano;
    this.coverurl = coverurl;
  }
}
