//JUEGO MATE

/*
let temperatura=document.getElementById("resultadoUno").value
console.log (temperatura);

//let resultadojuego= console.log(juego()); modificar esto por un evento click

function juego(dato) {
    if (dato>= 80) {
        console.log("temperatura ideal")
    } 
    else if (dato < 60) {
        console.log("Deja la pava un ratito más que esta súper fria aun!");
    }
    else if (dato < 80 > 61) {
        console.log("Gustos son gustos! Solo que esta un poquito fria para ser la temperatura ideal")
    }
    else if (dato > 80 < 99) {
        console.log("Gustos son gustos! Solo no te quemes y ojo que vas a lavar la yerba más rapido")
    }
    else if (dato >= 100) {
        console.log("El agua hirvio, no te sirve para mate pero podes preparar un mate cocido")
    }
}
juego(temperatura)

*/



/*


//Defino array vacio
let listaUsuarios=[]
//Clase constructora
class UsuarioJuego {
    constructor(nombre, mail, resultado, id){
        this.nombre = nombre;
        this.mail = mail;
        this.resultado = resultado
        this.id=id
    }
};

//Llamo elementos del HTML y lo guardo en variables
let botonEnviar = document.getElementById("botonEnviar")
let datosRegistrados = document.getElementById("datosRegistrados")

//let botonVaciar = document.getElementById("botonVaciar")

//Obtener Usuarios del Storage
obtenerLocal()

//Botón enviar resultados
botonEnviar.addEventListener("click",enviarResultados)

//Función enviar formulario----------------------------------------------------------------------
//1.Ingreso de datos
function enviarResultados(e){
    //e.preventDefault() lo utilizo para indicar que quiero prevenir la operacion que se realiza por defecto al ser un formulario, utilizo e para indicar que hablo del evento.
    e.preventDefault()
    //defino las variables con la acción de seleccionar el valor correspondiente al id de html
    let nombre = document.getElementById("nombre").value //nombre
    let mail = document.getElementById("mail").value
    let resultadoUno = document.getElementById("resultadoUno").value
  //  let resultadoDos = document.getElementById("resultadoDos").value
    let id = 0;
    if(nombre !="" && mail !="" && resultadoUno !=""){ //cuando utilice resultadoDos, debo agregarlo aqui
        if(listaUsuarios == []){
            listaUsuarios.push(new User(nombre,mail,resultadoUno,id))
        }
    }
        else{
        listaUsuarios.push(new User(nombre, mail, resultadoUno,id=listaUsuarios.reduce((acumulador,elemento)=>acumulador+id+1,0)))
    }
    document.getElementById("nombre").value = ""
    document.getElementById("mail").value = ""
    document.getElementById("resultadoUno").value = ""

console.log(listaUsuarios)

//2.Guardar datos ingresados en storage y renderizar
guardarlocal()
renderizarDatos(listaUsuarios)
}

//Función imprimir datos------------------------------------------------------------------------

function renderizarDatos(arrayJugadores){
    datosRegistrados.innerHTML = "";
    for(const usuario of arrayJugadores){
        let divResultado = document.createElement("div");
        divResultado.classList.add("contenedorResultado");
        divResultado.innerHTML = `<p>Hola : ${usuario.nombre}</p>
                                <p>:Resultado: ${resultadoUno.edad}</p>
                                <button id="botonEliminar${usuario.id}">Eliminar</button>`
        datosRegistrados.appendChild(divResultado)

        //Declaro variable para boton nuevo "boton eliminar" y lo genero en HTML
        let botonEliminar = document.getElementById(`botonEliminar${usuario.id}`)
        //Incorporo un evento al boton eliminar
        botonEliminar.addEventListener("click",()=>{
            botonEliminar.parentElement.remove()
            listaDeUsuarios = listaDeUsuarios.filter(usuarioSel=>usuarioSel.id!=usuario.id)
            guardarLocal()
        })
    }
}

//Función Guardar Local--------------------------------------------------------------------------

function guardarLocal(){
    let guardarDatos = JSON.stringify(listaDeUsuarios)
    localStorage.setItem('usuarios',guardarDatos)
}

//Funcion obtenerLocal---------------------------------------------------------------------------
//Declaro la función para obtener datos ingresados en localStorage

function obtenerLocal(){
    let obtenerEnStorage = localStorage.getItem('usuarios')
    let obtenerUsuarios = JSON.parse(obtenerEnStorage);
    if(obtenerUsuarios){
        listaDeUsuarios = obtenerUsuarios
    }
}

//Función Vaciar Lista---------------------------------------------------------------------------
/*
botonVaciar.addEventListener("click",vaciarLista)

function vaciarLista(){
    datosRegistrados.innerHTML = ""
    localStorage.clear()
    listaUsuarios = []
}
*/

