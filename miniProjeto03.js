 //Vel max 70km
 //a cada 5km acima do limite você ganha 1pt na carteira
 //Math.Floor()
 //caso os pontos sejam maior que 120 a carteira é suspensa

 verif (70) 

 function verif(vel) {
     if (vel <= 70) {
         console.log('Tudo Certo')
     } else if (vel > 70 && vel < 120) {
         for (var p = 0; vel/5 > 14; p++)
         console.log(`você recebeu ${p}pts na carteira`)
     }
 }