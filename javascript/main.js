//Comprobación de jquery:   $("h1").hide();

//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//INICIO PROYECTO GFC :)
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------


window.onload = function () {
    //Background con libreria Vegas
    $(function () {
        $('body').vegas({
            slides: [{
                    src: './images/mateInicio-1.jpg'
                },
                {
                    src: './images/mateInicio-2.jpg'
                }
            ]
        });
    });

    // Guardo en una variable el boton Ver Mas 
    const btnVerMas = document.getElementById("btnVerMas");

    // Agrego un evento al btnVerMas con funcion flecha, que inserte al DOM un Acordeon de Bootstrap de dos <div>. Un <div> que contiene en <ul><li> las instrucciones de preparación del mate. Un <div> que contiene Carrousel de Bootstrap.

    btnVerMas.addEventListener("click", () => {
        let verMas = document.getElementById("contenido")
        verMas.innerHTML = ""
        verMas.innerHTML = `
        <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item"> 
            <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Instrucciones para un buen mate
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <ul>
                        <li>Calentar agua, luego colocarla en un termo. Tenga en cuenta que el agua no debe estar tibia ni dejarse hervir, para tomar “buenos mates” la temperatura del agua aconsejable es de 70 a 80°C.</li>
                        <li>Vierta yerba dentro del mate hasta alcanzar las tres cuartas partes del mismo. Si lo desea, para que los primeros mates no sean tan amargos, puede agregar una o dos cucharaditas de azúcar.</li>
                        <li>Tape con una mano la boca del mate, inviértalo y agítelo unos instantes. Vuelva el objeto a su posición normal. Cuide que la yerba quede recostada sobre una de las paredes del mate y además se forme
                        un pequeño agujero.</li>
                        <li>Para comenzar el mate, coloque agua tibia suavemente en el hueco que quedó en la yerba. Iniciar el mate con agua tibia, permitirá que no se queme la yerba y pierda el gusto. Deje reposar unos instantes.</li>
                        <li>Introduzca la bombilla en el hueco húmedo.</li>
                        <li>Una vez que hizo estos pasos puede comenzar a cebar el mate.</li>
                        <li>Procure no mover la bombilla y cebar siempre en el mismo lugar, esto permitirá que no moje toda la yerba y así disfrutará más tiempo de unos exquisitos mates.</li>

                    </ul>

                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Galeria de Fotos
                </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/images/foto-1.jpg" class="d-block w-100" alt="foto uno">
                    </div>
                    <div class="carousel-item">
                        <img src="/images/foto-2.jpg" class="d-block w-100" alt="foto dos">
                    </div>
                    <div class="carousel-item">
                        <img src="/images/foto-3.jpg" class="d-block w-100" alt="foto tres">
                    </div>
                    <div class="carousel-item">
                    <img src="/images/foto-4.jpg" class="d-block w-100" alt="foto cuatro">
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>  
                </div>
            </div>  
    </div>
        `
    })


    // Inicio Formulario Juego
    // Defino clase constructora con los datos que quiero que contenga (nombre , mail, el resultado obtenido y un id unico del jugador)
    class UsuarioJuego {
        constructor(nombre, email, resultadoUno, id) {
            this.nombre = nombre;
            this.email = email;
            this.resultadoUno = resultadoUno;
        }
    };

    //Defino array vacio donde voy a guardar a cada usuario
    let usuario = [];
    //Obtengo datos de Local Storage
    obtenerLocalStorage()
    //Guardo en una variable el botonEnviar 
    const btnEnviar = document.getElementById("btnEnviar");


    // Agrego un evento que traiga la informacion ingresada en el formulario mediante el botonEnviar utilizando FUNCION FLECHA
    btnEnviar.addEventListener("click", (e) => {
        e.preventDefault()
        //Guardo en variables los campos del formulario que me van a devolver los valores que necesito. Los asigno mediante el id que los identifica.
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const resultadoUno = document.getElementById("resultadoUno").value;

        //Indico que los datos que se generan cuando se ejecuta el evento click, se guarden en el array vacio "usuario" (que se ira llenando con los datos de cada jugador)
        usuario.push(new UsuarioJuego(nombre, email, resultadoUno));
        console.log(usuario);
        juegoMateUno(resultadoUno);
        guardarLocalStorage();
    })


    //Desarrollo el juego en una funcion, utilizando estructura If, Else If , que devuelve el resultado en un alert de libreria Sweet Alert.
    //Inicio del Juego
    function juegoMateUno(dato) {

        if (dato <= 60) {
            Swal.fire({
                icon: 'error',
                title: 'Mate o Terere?',
                text: 'Deja la pava un ratito más que aun esta súper fria!',
            })
        } else if (dato > 60 && dato < 70) {
            Swal.fire({
                icon: 'warning',
                title: 'Caaasi',
                text: 'Estas más cerca, pero sigue un poquito fria para ser la temperatura recomendada',
            })
        } else if (dato >= 70 && dato <= 80) {
            Swal.fire({
                icon: 'success',
                title: 'MUY BIEN! ',
                text: 'Temperatura ideal... A disfrutar ese mate virtual',
            })
        } else if (dato > 80 && dato <= 99) {
            Swal.fire({
                icon: 'warning',
                title: 'Caaasi',
                text: 'Estas más cerca, pero esta mas caliente que la temperatura recomendada. Cuidado, no te quemes y ojo que vas a lavar la yerba más rapido',
            })
        } else if (dato >= 100) {
            Swal.fire({
                icon: 'error',
                title: 'El agua hirvio',
                text: 'No todo esta perdido dice la canción...Si bien no sirve para mate, te podes preparar un mate cocido',
                footer: '<a href="https://www.youtube.com/watch?v=cg1FigbX6BM">¿Conoces la cancion?</a>'
            })
        }

    }
    // Fin del Juego

    //Función Guardar Local para guardar los datos del array "usuarios" en Local Storage
    function guardarLocalStorage() {
        let guardarDatos = JSON.stringify(usuario)
        localStorage.setItem('usuarios', guardarDatos)
    }

    //Declaro la función para obtener Local Storage
    function obtenerLocalStorage() {
        let obtenerEnStorage = localStorage.getItem('usuarios')
        let obtenerUsuarios = JSON.parse(obtenerEnStorage);
        if (obtenerUsuarios) {
            usuario = obtenerUsuarios
        }
    }

    // Implementacion de Fetch incorporando elementos al Dom
    const btnSolucion = document.getElementById("btnSolucion");
    const lista = document.querySelector('#solucion');


    btnSolucion.addEventListener("click", () => {
        fetch('./javascript/data.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                lista.innerHTML = ""
                data.forEach((respuestas) => {
                    const li = document.createElement('li')
                    li.innerHTML = `
                <h4>${respuestas.nombre}</h4>
                <p>${respuestas.temperatura}</p>
                <hr/>
            `
                    lista.append(li)
                })
            })
    })
}

// Fin Formulario Juego











//----------------------------------------------------------------------------------------------
//Fin del proyecto------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

