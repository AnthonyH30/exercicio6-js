let meusDados = {
    nome: "Anthony",
    idade: 21,
    peso: 70
}

meusDados.altura = 1.70;

console.log(meusDados);

delete meusDados.idade;

console.log(meusDados);

let cadastro = [
    {
        nome: "anthony",
        idade: 21,
        telefone: 21985739482,
        amigos:["Caio", "Igor", "Junior", "pedro"]
    },
    {
        nome: "Caio",
        idade: 23,
        telefone: 21483723093,
        amigos:["Anthony", "Igor", "Junior", "pedro"]
    },
    {
        nome: "Igor",
        idade: 22,
        telefone: 21896384762,
        amigos:["Anthony", "Caio", "Junior", "pedro"]
    },
    {
        nome: "Junior",
        idade: 21,
        telefone: 21784682736,
        amigos:["Anthony", "Igor", "Caio", "pedro"]
    },
    {
        nome: "Pedro",
        idade: 23,
        telefone: 21483723093,
        amigos:["Anthony", "Igor", "Junior", "Caio"]
    }
];

console.log(cadastro[0].amigos[2]);
console.log(cadastro[1].amigos[0]);
console.log(cadastro[2].amigos[3]);
console.log(cadastro[3].amigos[1]);
