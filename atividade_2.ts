// Demonstração de Herança
export class Animal {
    constructor(protected nome: string, protected idade: number) {}

    fazerSom(): string {
        return "Som genérico";
    }

    getInfo(): string {
        return `${this.nome} tem ${this.idade} anos`;
    }
}

export class Cachorro extends Animal {
    constructor(nome: string, idade: number, private raca: string) {
        super(nome, idade);
    }

    fazerSom(): string {
        return "Au au!";
    }

    getRaca(): string {
        return this.raca;
    }
}

// Demonstração de Generics
export class Container<T> {
    private itens: T[] = [];

    adicionar(item: T): void {
        this.itens.push(item);
    }

    obter(indice: number): T | undefined {
        return this.itens[indice];
    }

    contagem(): number {
        return this.itens.length;
    }

    limpar(): void {
        this.itens = [];
    }
}
