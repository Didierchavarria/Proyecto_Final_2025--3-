console.log(`Funcionando Archivo: Practica_IF`);

//caso 1 
function verificarEdad () {
    

    let edad = document.getElementById('edad').value;//gi
    let pais = document.getElementById('pais').value;

    console.log(edad)
    console.log(pais)

    if (edad >= 18) {
        alert(` Eres mayor de edad en ${pais}`)
    } else {
        alert(` Eres menor de edad en ${pais}`)
    }
}

//caso 2

function verificarParImpar() {
    let numero3 = document.getElementById(`numero3`).value
    let numeroconvertido = parseInt (numero3)

    if (numeroconvertido % 2 === 0) {

        document.ElementById('mensajePar').innerTex = `El numero ${convertido} es par`;
    } else {
        document.getElementById('mensajeParImpar').innerTex = `El numero ${convertido} impar`;
    }

    console.log(numeroconvertido)
}

function evaluarNota() {
    
    let nota = document.getElementById('nota').value;

    let numeroconvertido = parseInt(nota)
    console.log(numeroconvertido)

    //mayor de 90 excelente nota
    //mayor a 70 aprobado 
    //menor 70 reprobado 
    if (numeroconvertido >= 90) {
       // alert("excelente nota")
        document.getElementById('mensajeNota').innerText = `El resultado es excelente nota`;
    }
    else if(numeroconvertido >= 70){
       // alert("aprobado")
        document.getElementById('mensajeNota').innerText = `El resultado es aprobado`;
    }     
    else {
        //alert("reprobado")
        document.getElementById('mensajeNota').innerText = `El resultado es reprobado`;
    }
}

//parse int
//parseFloat decimales
//monto * 0.9

