const usuario = [];
const vehiculo = [];
const compra = [];
const venta = [];
const prestamo = [];


class Usuario {
    constructor(datos) {
        this.nombre = datos.nombre;
        this.apellido = datos.apellido;
        this.edad = datos.edad;
        this.email = datos.email;
        this.sueldo = datos.sueldo;
        this.importe = datos.importe;
        this.cuotas = datos.cuotas;
        this.aprobado = false;
    }

    cuotaMaxima(){
        return this.sueldo * .25;
    }

    cantidadCuotas(){
        console.log("Cantidad de cuotas elegidas: " + this.cuotas);
    }

    cuotaSinInteres(){
        return this.importe / this.cuotas;
    }

    cuotaConInteres(){
        return (this.importe / this.cuotas) * 1.15;
    }

}
class Vehiculo {
    constructor(datos) {
        this.marca = datos.marca;
        this.modelo = datos.apellido;
        this.año = datos.año;
        this.estado = datos.estado;
        this.kms = datos.kms;
        this.valor = datos.valor;
        this.vendido = false;
    }
}

function crearUsuario(){

    let nombre_u = document.getElementById("nombre").value;
    let apellido_u = document.getElementById("apellido").value;
    let edad_u = parseInt(document.getElementById("edad").value);
    let email_u = document.getElementById("email").value;
    let sueldo_u = parseInt(document.getElementById("sueldo").value);
    let importe_u = parseInt(document.getElementById("prestamo").value);
    let cuotas_u = parseInt(document.getElementById("cuotas").value);

    alert("Gracias. \nAhora procesaremos los datos.");

    const nuevoUsuario = new Usuario ({
        nombre: nombre_u,
        apellido: apellido_u,
        edad: edad_u,
        email: email_u,
        sueldo: sueldo_u,
        importe: importe_u,
        cuotas: cuotas_u,
    });

    usuario.push(nuevoUsuario);

    let chequeo = document.getElementById("chequeo");
    chequeo.innerHTML = `
        <h3 style="display: block;">Datos ingresados</h3>
        <ul>
            <li>Solcitante: ${usuario[0].nombre} ${usuario[0].apellido}.</li>
            <li>Email de contacto: ${usuario[0].email}</li>
            <li>Monto solicitado: ${usuario[0].importe}</li>
            <li>Cantidad de cuotas: ${usuario[0].cuotas}</li>
        </ul>
        <p>Pronto te llegara un mail a ${usuario[0].email} con las mejores alternativas de financiamiento para tu solicitud.</p>
        `;
}

function ingresarVehiculo(){

    let marcaN = prompt("Ingrese Marca.");
    let modeloN = prompt("Ingrese Modelo.");
    let añoN = prompt("Ingrese año.");
    let estadoN = prompt("Ingrese condicion (NUEVO/USADO).");
    let kmsN = parseInt(prompt("Ingrese Kms recorridos."));
    let valorN = parseInt(prompt("Ingrese valor del vehiculo."));
    
    alert("Vehiculo ingresado con exito!");

    const nuevoVehiculo = new Vehiculo ({
        marca: marcaN,
        modelo: modeloN,
        año: añoN,
        estado: estadoN,
        kms: kmsN,
        valor: valorN,
    });

    vehiculo.push(nuevoVehiculo);
}

function resaltar(){

}

let boton = document.getElementById("solicitar");
boton.addEventListener("click", crearUsuario);

