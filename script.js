// Solicitar ao professor o número total de estudantes na turma
let numEstudantes = parseInt(prompt("Digite o número total de estudantes na turma:"));

// Inicializar variáveis para a soma das notas, maior e menor nota
let somaNotas = 0;
let maiorNota = -Infinity;
let menorNota = Infinity;

// Coletar as notas de cada aluno individualmente
let contador = 1;
while (contador <= numEstudantes) {
    let nota = parseFloat(prompt("Digite a nota do aluno " + contador + ":"));
    
    // Atualizar a soma das notas
    somaNotas += nota;

    // Verificar se a nota é a maior ou a menor até o momento
    if (nota > maiorNota) {
        maiorNota = nota;
    }
    if (nota < menorNota) {
        menorNota = nota;
    }

    contador++;
}

// Calcular a média da turma
let mediaTurma = somaNotas / numEstudantes;

// Exibir os resultados
console.log("Média da turma:", mediaTurma.toFixed(2));
console.log("Maior nota:", maiorNota);
console.log("Menor nota:", menorNota);