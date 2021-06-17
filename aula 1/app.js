var pessoas = [
  { id: 1, nome: "Paula", idade: 16 },
  { id: 2, nome: "Thiene", idade: 30 },
  { id: 3, nome: "Leandro", idade: 30 },
  { id: 4, nome: "Thiago", idade: 35 },
  { id: 5, nome: "Maria", idade: 55 },
];

pessoas.forEach((pessoa) => console.log(pessoa.nome));

console.log(
  "maiores de 18: ",
  pessoas.filter((pessoa) => pessoa.idade > 18)
);

console.log((pessoa = pessoas.find((pessoa) => pessoa.id == 3)));

console.log((pessoa = pessoas.findIndex((pessoa) => pessoa.id == 2)));
