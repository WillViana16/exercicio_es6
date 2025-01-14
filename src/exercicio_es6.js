//Criando array com alunos

const alunos = [
    {nome: 'Ana', nota: 9.5},
    {nome: 'Bia', nota: 6.1},
    {nome: 'Carlos', nota: 7.5},
    {nome: 'Daniel', nota: 5.5},
    {nome: 'Eliana', nota: 4.1}, 
    {nome: 'Fernando', nota: 5.9},
]

//Retornando alunos com nota MAIOR que 6

const aprovados = alunos.filter(aluno => aluno.nota >= 6);
console.log(aprovados)

//Retornando alunos com nota MENOR que 
const reprovados = alunos.filter(aluno => aluno.nota < 6);
console.log(reprovados)