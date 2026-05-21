let tarefas = [];
 
let qtdProdutos=0, contador=0
 
qtdProdutos = Number(prompt("Quantas tarefas deseja adicionar?"));
 
do {
    tarefas[contador] = prompt ("Digite a"+(contador+1)+"º tarefa");
    alert("Okay, anotado!");
    contador++
} while (contador != qtdProdutos);
 
alert ("Suas tarefas são: " + tarefas + ".");

for(let i = 0; i < tarefas.length; i++) {
    console.log((i + 1) + " - " + tarefas[i]);
}