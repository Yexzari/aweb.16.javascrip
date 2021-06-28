//console.log("Hola mundo");

const materia = {
    nombre: "Aplicaciones Web",
    horario: "9:00 a 10:45 hrs"
};
console.log(materia.nombre)
nombre: "Base de datos"
console.log(materia.nombre);

var suma = (a,b) =>{
    return a+b;
}
console.log(suma(5,8));

var unSaludo = (nombre ="José", edad = "28") => {
    console.log(`Hola soy ${nombre} y mi nombre es ${edad} años`);
}
console.log("==================")
unSaludo();
console.log("==================")
unSaludo("nombre");
console.log("==================")
unSaludo("nombre",28);
console.log("==================")

var num1 = 2;
var num2 = 34;
console.log(`La suma de ${num1} + ${num2} es la suma de ${num1+num2}+'Oh la la`);
 console.log("Hola lala vamos a dar un salto de línea /n ya di uno /n ya di otro");
 console.log("Hola lala vamos a dar un salto de línea ya di uno ya di otro");


/*
var nombre = "Aplicaciones Web";
if (true) {
    var nombre = "Base de datos";
    console.log(nombre);
}
console.log(nombre);*/
var curso={
    nombre:"",
    Descripcon:"",
    docente:{
        nombre:"",
        cursos:0
    }

}
function actualizar(){
    console.log ("Se llamo a actualizar");

    curso.nombre = document.getElementById("nombre").value;
    curso.descripcion = document.getElementById("descripcion").value;
    curso.docente.nombre = document.getElementById("docente").value;
    curso.docente.cursos = document.getElementById("cursos").value;
    console.log(curso);
    actualizarFicha();
}

function actualizarFicha(){
    document.getElementById("titulo").innerHTML = curso.nombre;
    document.getElementById("descrip").innerHTML = curso.descripcion;
    document.getElementById("nombre-docente").innerHTML = curso.docente.nombre;
    document.getElementById("total").innerHTML = curso.docente.cursos;
}
var btnCambiar = document.querySelector(".btn-cambiar");
console.log(btnCambiar);
btnCambiar.addEventListener("click",()=>{
    document.querySelector(".btn-success").innerHTML="Update";
});