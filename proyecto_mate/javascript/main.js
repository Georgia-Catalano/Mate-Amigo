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
        //this.id=id
    }
};

//Defino array vacio donde voy a guardar a cada usuario
const usuario=[];

//Guardo en una variable el botonEnviar 
const btnEnviar= document.getElementById("btnEnviar");

// Agrego un evento en el que le digo que traiga toda la informacion que complete en el formulario mediante el botonEnviar CON FUNCION FLECHA

btnEnviar.addEventListener("click", ()=> {
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
} )


//OPCION DOS BUSCANDO SOLUCION
// Agrego un evento en el que le digo que traiga toda la informacion que complete en el formulario mediante el botonEnviar CON FUNCION ENVIAR
/*
btnEnviar.addEventListener("click",enviar)

function enviar(e){//Guardo en variables los campos del html que me van a devolver los valores que necesito. Los asigno mediante el id que los identifica.
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

