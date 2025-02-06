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

function calcularDescuento() {
        //El descuento es de 10%
    //leer el monto
    let monto =document.getElementById("monto").value;//guardae 
    console.log(monto)
    //convertir a numero
    let montoconvertido = parseFloat(monto);
    console.log(montoconvertido)
    //verificar si es suficiente para un descuento

    if (montoconvertido >= 100) {
        console.log("Hola")
        let descuento= montoconvertido * 0.09;
        console.log(descuento);
        let totalcompra =montoconvertido - descuento;
       

        document.getElementById("mensajeDescuento").innerText= //para mandar a pantalla 
        `
        Aplicas para el descuento $${totalcompra}

        `
    } else {
        document.getElementById("mensajeDescuento").innerText=
        `
        No aplicas para el descuento $${montoconvertido}
        
        `//para mandar a pantalla 
     
    }
}




function verificarMayorMenor () {
    let edad = document.getElementById('edadSimple').value;
    console.log(edad)
    let edadconvertido = parseFloat(edad);
    console.log(edadconvertido)
    if (edadconvertido >= 18) {
      document.getElementById("mensajeEdadSimple").innerText =
    `
    Si eres mayo de edad 
    `
     
    } else {
        document.getElementById("mensajeEdadSimple").innerText =
        `
        No eres mayor de edad
        `
    }
}


