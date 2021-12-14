const cliente = {
    nome:"Gabriel",
    idade:21,
    cpf:"21931897",
    email:"gg@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"];
/*console.log(cliente[chaves[0]]);
console.log(cliente[chaves[1]]);
console.log(cliente["cpf"]);
console.log(cliente["email"]);*/

chaves.forEach(info=>console.log(cliente[info]));
console.log(cliente["horario"]);
