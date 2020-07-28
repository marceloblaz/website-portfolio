export class Dado {
  indice: number;
  nome: string;
  ano: number;
  cover: any;
  constructor(indice: number, nome: string, ano: number, cover: string) {
    this.indice = indice;
    this.nome = nome;
    this.ano = ano;
    this.cover = cover;
  }
}
