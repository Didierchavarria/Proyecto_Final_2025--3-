console.log(`Funcionando Archivo: Practica_CICLO`);
let personas = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];
let clientes = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];

clientes.forEach(element => {
    console.log(element.nombre,element.activo);

});
//objeto .

//bucles o ciclos

//doreach

//array quitelo y coloque su array :)
//element serian las pocisiones 0,1,2
personas.forEach(element => {
    console.log(element);

    if (element.activo === true) {
        console.log(element.nombre,element.activo);
    }
    
});

//pagina 15 y 16 leer 

//cantidad de elementos de un array

console.log(personas.length);


//filtrar una propiedad
let buscarnombre = personas.find(x => x.nombre === "Ana")
console.log(buscarnombre);

let buscaractivo = personas.find(x => x.activo === true)
console.log(buscaractivo);

function filtrar() {
    let valor = document.getElementById('sensitivo').value;
console.log(valor);
}











//caso 1
function buscarDesdeInput() {
    let input1 = document.getElementById('buscarNombre').value;  //Metio el valor pepe
    let resultado = document.getElementById('resultadoBusqueda');
  
    //Busca en el arreglo 
    let busqueda = personas.find(x=> x.nombre.toUpperCase() === input1.toUpperCase()) //nombre == pepe
  
  
    //Aqui le indicamos si el resultado es verdadero o falso 
    if (busqueda) {
      
      resultado.innerHTML = `encontrado a la persona ${busqueda.nombre}`
  
    } else {
      resultado.innerHTML = `No encontrado a la persona`
    }
  }

  //crealr la funcion del onclick
  //input id value
  //cualquier etiqueta mostrar el resultado inner
//caso 2
  function primeraPersonaActiva() {
    let resultado= document.getElementById('resultadoActivo'); //inner
    let busqueda= personas.find(x=> x.activo == true)
    if (busqueda) {
        resultado.innerHTML = `primera persona encontrada ${busqueda.nombre}`
    } else {
        resultado.innerHTML = `No se encontro nadie activo`
    }
  }

//caso 6
// cuando son muchos es foreach
function personasActivas() {
    let resultado = document.getElementById('listaActivos');

    personas.forEach(element => {
        
        if (element.activo == true) {
            
          resultado.innerHTML += `
          
            <li>nombre : ${element.nombre} </li>`
          
            
        }

    });
}
//3,4,5
// entrgable 2 proyecto

function primeraMayorDeEdad() {
  
}
let resultado = document.getElementById('resultadoMayor');
let busqueda = personas.find((x) => x.edad >= 18);
if (busqueda) {
  resultado.innerHTML = `La primera persona mayor de edad es ${busqueda.nombre}`


} else {
   resultado.innerHTML = `No se encontro nadie mayor de edad`;
}




function mostrarTodasLasPersonas() {
  let resultado = document.getElementById('listaPersonas');
  personas.forEach(element => {
    resultado.innerHTML+=  `<li> - Nombre: ${element.nombre}, - Edad: ${element.edad}, - Activo: ${element.activo}. </li>`

  });
}

function mayoresDeEdad() {
let valor1 = document.getElementById('listaMayores');
  personas.forEach((element) => {
  if (element.edad >= 18) {
  valor1 .innerhtml += `<li> - Nombre: ${element.nombre}. - Edad: ${element.edad}</li>`;
  }
  });
}
  