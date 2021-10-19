//var media = 4;
//var faltas = 1; 
//var soma = 0;

//if(media >=7) ///// média aluno ///////// 
//{ 
// console.log('Aprovado'); 
//} //else if(media >=5 && faltas <2) 
//{ // console.log('Recuperação'); 
//} //else 
//{ // console.log('Reprovado'); 
// 
//}

// 
//for(let numero = 1; numero <=10; numero ++) 
///// contador até 100 
/// 
//{ 
// console.log(numero); 
//}
 //

//for(var i =1; i<=10; i++) 
//{ 
// soma +=i; 
//} 
//console.log(soma);

//for(var i =8; i<=80; i+=8) ///tabuada do 8/// 
//{ 
// console.log(i); 
//}

//let x = 3; 
//const y = x++;

//console.log('x:${x},y:${y}');

//for(var i =1; i<=10; i+=1) ///tabuada do 1 ao 10/// 
//{ // console.log(i); //}

for(var i =1; i<=10; i++) ///tabuada do 1/// 
{ console.log("1*", + i + "=", 1*i); }

for(var i =1; i<=10; i++) ///tabuada do 2/// 
{ 
    console.log( "2*", + i + "=", 2*i); 
}

for(var i =1; i<=10; i++) ///tabuada do 3///
 
{
      console.log("3*", + i + "=", 3*i); 
} 
for(var i =1; i<=10; i++) ///tabuada do 4///

  
{
       console.log("4", + i + "=", 4*i); 
    
}
     for(var i =1; i<=10; i++) ///tabuada do 5/// 
{ 
      console.log("5", + i + "=", 5*i); 
}
     for(var i =1; i<=10; i++) ///tabuada do 6///
{
        console.log("6", + i + "=", 6*i); 
} 
    for(var i =1; i<=10; i++) ///tabuada do 7/// 
{ 
       console.log("7", + i + "=", 7*i); 
} 
    for(var i =1; i<=10; i++) ///tabuada do 8/// 
{ 
       console.log("8",+ i + "=", 8*i); 
} 
    for(var i =1; i<=10; i++) ///tabuada do 9/// 
{ 
       console.log("9", + i + "=", 9*i); 
} 
    for(var i =1; i<=10; i++) ///tabuada do 10/// 
{ 
       console.log("10", + i + "=", 10*i);
}

//////////////// ATIVIDADE PRESENCIAL /////////////////

/// Algoritmo////

const Listadepecas = ['pecas de teste','AB','peca B']
console.log('quantidade de caracteres')

if(Listadepecas.length <= 10)
{
}
console.log('as pecas podem ser cadastradas');
 for(let index = 0; index < Listadepecas.length; index++)
 {
     const pecaatual = Listadepecas[index];
     if(pecaatual.length < 3)
     {
         console.log(pecaatual + ':a peça possui nome inferior a 3 caracteres e não pode ser cadastrada')
     }
     else{
         console.log(pecaatual + ':a peça pode ser cadastrada')
     }
 }

console.log('peso de peça')

const pesodapecaemgramas = 50;
if (pesodapecaemgramas >= 100){
    console.log('peso suficiente')
}
else
{
    console.log('valor insuficiente')
}

////////////////Situação-problema////////////////////

const quantidadedealunos = 14;

for(let dex = 0; dex <= quantidadedealunos; dex++)
{
    if(dex == 0)
    {
        console.log('numero é 0');
    }
    else if(dex % 2 == 0)
    {
        console.log('o numero é par' + dex);
    }
    else
    {
      console.log('o numero é impar' + dex);
    }
}
    
