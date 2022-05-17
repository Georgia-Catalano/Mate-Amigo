//Prueba para ver si cuento con jquery:   $("h1").hide();


//--------------------------------------------------------------------------------------------
//INICIO PROYECTO GFC :)
//--------------------------------------------------------------------------------------------

//Background con libreria Vegas

$(function () {
    $('body').vegas({
        slides: [{
                src: '../images/mateInicio-1.jpg'
            },
            {
                src: '../images/mateInicio-2.jpg'
            }
        ]
    });
});

// Defino clase constructora con los datos que quiero que contenga (nombre , mail, el resultado obtenido y un id unico del jugador)

class UsuarioJuego {
    constructor(nombre, email, resultadoUno, id){
        this.nombre = nombre;
        this.email = email;
        this.resultadoUno = resultadoUno;
    }
};
//Obtengo datos de Local Storage
obtenerLocalStorage()

//Defino array vacio donde voy a guardar a cada usuario
const usuario=[];

//Guardo en una variable el botonEnviar 
const btnEnviar= document.getElementById("btnEnviar");

// Agrego un evento en el que le digo que traiga toda la informacion que complete en el formulario mediante el botonEnviar CON FUNCION FLECHA

btnEnviar.addEventListener("click", (e)=> {
    e.preventDefault()
//Guardo en variables los campos del html que me van a devolver los valores que necesito. Los asigno mediante el id que los identifica.
const nombre= document.getElementById("nombre").value;
const email= document.getElementById("email").value;
const resultadoUno= document.getElementById("resultadoUno").value;

//console.log(nombre);
//console.log(email);
//console.log(resultadoUno);

//Indico que los datos que se generan cuando se ejecuta el evento click, se guarden en el array vacio (que se ira llenando con los datos de cada jugador)
usuario.push(new UsuarioJuego (nombre, email, resultadoUno ) );
console.log(usuario);
juegoMateUno (resultadoUno)
guardarLocalStorage()

})
//JUEGO MATE

function juegoMateUno (dato) {
    if (dato >70 <85) {
        Swal.fire({
            icon: 'success',
            title: 'MUY BIEN! ',
            text: 'Temperatura ideal... A disfrutar ese mate virtual',
        })
    } 
    else {
        Swal.fire({
            icon: 'warning',
            title: 'Volve a intentar',
        })
    }



    /*  if (dato <= 60) {  
        Swal.fire({
            icon: 'error',
            title: 'Mate o Terere?',
            text: 'Deja la pava un ratito más que aun esta súper fria!',
        })
    }
    else if (dato > 60 < 80) {
        Swal.fire({
            icon: 'warning',
            title: 'Caaaaaaasi',
            text: 'Estas más cerca, pero aun esta un poquito fria para ser la temperatura ideal',
        })
    }
    else if (dato == 80) {
        Swal.fire({
            icon: 'success',
            title: 'MUY BIEN! ',
            text: 'Temperatura ideal... A disfrutar ese mate virtual',
        })
    } 
    else if (dato > 80 <= 99) {
        Swal.fire({
            icon: 'warning',
            title: 'Caaaaaaasi',
            text: 'No te quemes y ojo que vas a lavar la yerba más rapido',
        })
    }
    else if (dato >= 100) {
        Swal.fire({
            icon: 'error',
            title: 'El agua hirvio',
            text: 'No todo esta perdido dice la canción...Si bien no sirve para mate, te podes preparar un mate cocido',
        })
    }
    */
}

//Función Guardar Local
function guardarLocalStorage(){
    let guardarDatos = JSON.stringify(usuario)
    localStorage.setItem('usuarios',guardarDatos)
}

//Declaro la función para obtener localStorage

function obtenerLocalStorage(){
    let obtenerEnStorage = localStorage.getItem('usuarios')
    let obtenerUsuarios = JSON.parse(obtenerEnStorage);
    if(obtenerUsuarios){
        usuario = obtenerUsuarios
    }
}




/*OPCION DOS------------------------------------------------------------------------CODIGO EXTRA 
// Agrego un evento en el que le digo que traiga toda la informacion que complete en el formulario mediante el botonEnviar CON FUNCION ENVIAR. Si utilizo esta opcion debo comentar o eliminar la opcion del evento con funcion flecha

btnEnviar.addEventListener("click",enviar)

function enviar(e) {
    e.preventDefault()
    //Guardo en variables los campos del html que me van a devolver los valores que necesito. Los asigno mediante el id que los identifica.
    const nombre= document.getElementById("nombre").value;
    const email= document.getElementById("email").value;
    const resultadoUno= document.getElementById("resultadoUno").value;
    //console.log(nombre);
    //console.log(email);
    //console.log(resultadoUno);
    
    //Indico que los datos que se generan cuando se ejecuta el evento click, se guarden en el array vacio (que se ira llenando con los datos de cada jugador)
    usuario.push(new UsuarioJuego (nombre, email, resultadoUno ) );
    console.log(usuario);
}
*/