const cliente = {
    nome:"Gabriel",
    idade:21,
    cpf:"21931897",
    email:"gg@gmail.com"
}

console.log(cliente);
cliente.telefone = "84294712394";
cliente.telefone = "123";
delete cliente.email;

console.log(cliente);