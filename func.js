class ListaTarefas {
   constructor() {
       this._tarefas = [];
   }
   
   adicionar(tarefa) {
       this._tarefas.push(tarefa);
   }

   excluir(id){
       this._tarefas.map((tarefa) => {
           if(tarefa.id == id){
               this._tarefas.splice(this._tarefas.indexOf(tarefa), 1);
           }
       })
   }
   
   get tarefas() {
       return this._tarefas;
   }
}


// Função que limpa.
//function calcLimpar() {
//    document.calcform.visor.value = '';
//    delete gvalor;
//    delete gvalor;
//    delete goper;
//    delete gvisor;
// }

// Função calcula.
//function Opera(oper, valor1, valor2) {
//    if (oper == "somar") {
//       var valor = parseFloat(valor1) + parseFloat(valor2);
//    } else {
//       if (oper == "subtrair") {
//          var valor = valor1 - valor2;
//       } else {
//          if (oper == "multiplicar") {
//             var valor = valor1 * valor2;
//          } else {
//             var valor = valor1 / valor2;
//          }
//       }
//    }
// 
//    return(valor);
// }
//
//function calcParse(oper) {
//    var valor = document.calcform.visor.value; //pega valor do visor
//    delete gvisor; //deleta do visor
// 
//    if (typeof goper != 'undefined' && oper == 'resultado') {
//       gvalor = Opera(goper, gvalor, valor);
//       document.calcform.visor.value = gvalor;
//       delete oper;
//       delete gvalor;
//       return(0);
//    }
 
//    if (typeof gvalor != 'undefined') {
//       gvalor = Opera(goper, gvalor, valor);
//       goper = oper;
//       document.calcform.visor.value = gvalor;
//    } else {
//       gvalor = valor;
//       goper = oper;
//    }
 
// }