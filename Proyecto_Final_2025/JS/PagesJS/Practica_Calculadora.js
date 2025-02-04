
console.log(`Funcionando Archivo: Practica_Calculadora`);

 function enviarDatos() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

//Mostrar
//Alert, console.log / Inner
 console.log('Mostrar nombre:',nombre);
 console.log('Mostrar edad:',edad);
 alert(`Nombre ${nombre} edad ${edad}`)
}




function realizarSuma() {
    console.log("Funcionando realizarSuma")
 
    let numero1 = document.getElementById('numero1').value;//gi
    let numero2 = document.getElementById('numero2').value;
 
    //LS , LO , LA
    //Typescript int decimal
    //ParseInt 
    let Suma = parseInt(numero1)  + parseInt(numero2) ;
 
    document.getElementById('resultado').innerText = Suma;
 
    console.log(numero1)
    console.log(numero2)
    console.log(Suma)
}
