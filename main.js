/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

/*funciones globales*/
let vector_palabras=["enter","imes","ai","ober","ufat"];
let vector_letras=["e","i","a","o","u"]
var datos_incriptados_e_desincriptados="";
/******************************************************/

/*en esta funcion principal se obtine la tipo de acion que desea*/
function home(cant){
    switch (cant){
        case 1:
            /*cuando el dato es 1 se incripta i se oculta la ventana con las imagenes*/
            //y se muetran los datos incriptados
            incriptar();
            ocultar_ventana();
            mostra_ventana();
            asignacion_texto()
            break;
        case 2:
            desincriptar();
            ocultar_ventana();
            mostra_ventana();
            asignacion_texto();
            break;
        case 3:
        copiar();
            break;
    }
}
function incriptar(){
    const texto=document.getElementById("area_texto").value
    let palabras_pro=texto.split(" ");
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
    datos_incriptados_e_desincriptados=acumulador;
}
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
function desincriptar(){
    const texto=document.getElementById("area_texto").value
    let palabras_pro=texto.split(" ");
    var aux_palabras;
    var acumulador="";
    var temp;
    for (var i=0;i<palabras_pro.length;i++){
        aux_palabras=palabras_pro[i];
        temp=aux_palabras;
        for (var k=0;k<4;k++){//se utilizo esto porque se ocupra expreciones reguladas entonces
        for (var j=0;j<4;j++){//se nesecitas mas de una vez para que se complete correcta mente
            aux_palabras=temp;
            temp=aux_palabras.replace(vector_palabras[j],vector_letras[j]);
        }
        }
        acumulador+=temp+" ";
        temp=""
    }
    datos_incriptados_e_desincriptados=acumulador+" ";
}
/*funcion para ocultar los datos del campo de salida de texto*/
function ocultar_ventana(){
    var text="camp";
    var n=3;//este campo representa la cantidad de etiquetas a ocultar
    for (var i=0;i<n;i++) {
        document.getElementById("camp"+i).style.display = "none";
    }
}

/*esta funcion se encarga de mostar los elementos de texto incriptados*/
function mostra_ventana(){
    document.getElementById("oculto").style.display="block";
}
function asignacion_texto(){
    document.getElementById("salida_").value=datos_incriptados_e_desincriptados;
}

function copiar(){
    var datos=document.getElementById("salida_");
    datos.select();
    document.execCommand('copy');
}