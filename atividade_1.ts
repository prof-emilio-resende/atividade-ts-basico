const nome: string = "Maria";
const idade: number = 30;
const altura: number = 1.75;
const estudante: boolean = true;

export function verificaParImpar(numero: number): string {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

export function somatorio(n: number): number {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

export function fibonacci(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

export class Retangulo {
    private largura: number;
    private altura: number;
    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }
    area(): number {
        return this.largura * this.altura;
    }
    perimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}

export {
    nome, idade, altura, estudante
}