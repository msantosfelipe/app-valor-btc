export class Ticker {
    maiorValor: number;
    menorValor: number;
    volume: number;
    ultimoPreco: number
    precoCompra: number;
    precoVenda: number;
    data: number;

    constructor(
        maiorValor?: number,
        menorValor?: number,
        volume?: number,
        ultimoPreco?: number,
        precoCompra?: number,
        precoVenda?: number,
        data?: number) {
        this.maiorValor = maiorValor;
        this.menorValor = menorValor;
        this.volume = volume;
        this.ultimoPreco = ultimoPreco;
        this.precoCompra = precoCompra;
        this.precoVenda = precoVenda;
        this.data = data;
    }
}