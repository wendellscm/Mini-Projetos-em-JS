//Criar uma função para mostrat os números primos

//Primos
//Compostos

//Ex: 10,11

exib(15);

function exib(n) {

   for (c=2; c<=n; c++) {
       let prim = true;

       for (div = 2; div < c; div ++) {
           if(c%div == 0) {
               prim = false;
               break;
           }
        }
        if (prim) console.log(c);
   } 


 }
