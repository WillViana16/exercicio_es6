"use strict";

//Criando array com alunos

var alunos = [{
  nome: 'Ana',
  nota: 9.5
}, {
  nome: 'Bia',
  nota: 6.1
}, {
  nome: 'Carlos',
  nota: 7.5
}, {
  nome: 'Daniel',
  nota: 5.5
}, {
  nome: 'Eliana',
  nota: 4.1
}, {
  nome: 'Fernando',
  nota: 5.9
}];

//Retornando alunos com nota MAIOR que 6

var aprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log("Alunos aprovados", aprovados);

//Retornando alunos com nota MENOR que 
var reprovados = alunos.filter(function (aluno) {
  return aluno.nota < 6;
});
console.log("Alunos reprovados:", reprovados);