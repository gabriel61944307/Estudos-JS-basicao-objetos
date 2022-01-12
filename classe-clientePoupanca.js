//Exemplo de classes e herança de classes em JS.

class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}

const gabriel = new ClientePoupanca("Gabriel", "dsahb@gmail.com", "132456321", 350, 700);
console.log(gabriel);

gabriel.depositar(50);
gabriel.depositarPoupanca(25);
console.log(gabriel);
