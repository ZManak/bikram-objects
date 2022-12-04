//1
let Coche = {marca: 'Ferrari', modelo: 'Torpedo', matricula: 9999};

//2
let Casa = {codPostal: 55555, calle: 'Evergreen Terrace', portal: 742, piso: 0};

//3
let FullStackDeveloper = {lenguajes: [], proyectos: []};

//4
let Perro = {
    nombre: 'Dogo',
    raza: 'Caninus',
    color: 'mostaza',
    edad: 7,
    ladrar() {
        console.log('Guau!');
    },
    popo() {
        return Math.random() * 3;
    }
}

//5
let marcaPortatil = Portatil.marca;

//6
let marcaPortatil2 = Portatil['marca'];

//7 
let grupos = Concierto.grupos;

//8
const RGB = [Led.rojo, Led.verde, Led.azul];

//9
Portatil.modelo = 'P345';

//10
Concierto.cartelera = ["Queen", "Guns N' Roses"];

//11
Concierto.fecha = new Date();

//12
Impresora.imprimiendo = {nombreArchivo: "", copias: 0, numPaginas: 0};

//13
const Noticia = {titular: "", cuerpo: ""};

//14
const Persona = {nombre: "Javier", apellidos: "Edad", edad: 31};

//15
const Avion = {
    numPasajeros: 750,
    despegar() {
        console.log("despegando");
    },
    volar() {
        console.log("llegando al destino");
    },
    aterrizar() {
        console.log("aterrizando");
    }
}

//16
const Paquete = {contenido: []};

//17
const Pais = {numHabitantes: 1234, continente: "Atlantis", gentilicio: "altlantido"};

//18
const codError = O_Error.codigo;

//19
const integrantes = Grupo.integrantes;

//20
const nivelesTinta = Impresora.tinta;

//21
const pixeles = Pantalla.pixeles;

//22
const especificaciones = Movil['especificaciones'];

//23
Grupo.numIntegrantes = 5;

//24
Pantalla.dimensiones = '1920x1080';

//25
if (Led.encendido === true) {
    Led.encendido = false;
} else if (Led.encendido === false) {
    Led.endendido = true;
}

//26
Movil.temperatura = '20º';