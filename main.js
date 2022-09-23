/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

/*funciones globales*/
let vector_palabras=["enter","imes","ai","ober","ufat"];
/******************************************************/

function incriptar(){
    var texto=document.getElementById("area_texto").value
    palabras_pro=texto.split(" ");
    var acumulador="";
    for (var i=0;i<palabras_pro.length;i++){
      for (var j=0;j<palabras_pro[i].length;j++){
          var caracter=palabras_pro[i].charAt(j);
          switch (caracter){
              case 'e':
                 acumulador+=vector_palabras[0];
                  break;
              case 'i':
                  acumulador+=vector_palabras[1];
                  break;
              case 'a':
                  acumulador+=vector_palabras[2];
                  break;
              case 'o':
                  acumulador+=vector_palabras[3];
                  break;
              case 'u':
                  acumulador+=vector_palabras[4];
                  break;
              default:
                  acumulador+=caracter;
                  break;
          }
      }
      acumulador+=" ";
    }
alert(acumulador);
}

function desincriptar(){

}

function ocultar_ventana(){

}


