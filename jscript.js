const usuario = []; //Se almacenaran los datos de los usuarios que soliciten la Compra/Venta.
const vehiculo = []; //Se almacenaran los datos de los vehiculos. Ya sean nuevos o usados.

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
        this.modelo = datos.modelo;
        this.color = datos.color;
        this.año = datos.año;
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

    let chequeo = document.getElementById("solicitudCompra");
    chequeo.innerHTML = `
        <h3>Datos ingresados</h3>
        <ul>
            <li>Solcitante: ${usuario[0].nombre} ${usuario[0].apellido}.</li>
            <li>Email de contacto: ${usuario[0].email}</li>
            <li>Monto solicitado: ${usuario[0].importe}</li>
            <li>Cantidad de cuotas: ${usuario[0].cuotas}</li>
        </ul>
        <p>Pronto te llegara un mail a ${usuario[0].email} con las mejores alternativas de financiamiento para tu solicitud.</p>
        `;

    function enviarAServidor(obj){
        const enJSON = JSON.stringify(obj); //SE CONVIERTE A JSON PARA ENVIAR AL SERVIDOR (SIMULACION)
        localStorage.setItem("nuevoUsuario", enJSON); //GUARDAMOS EL OBJETO EN EL ALMACENAMIENTO LOCAL
    }

    enviarAServidor(nuevoUsuario);
}

function ingresarVehiculo(){

    let marcaN = document.getElementById("marca").value;
    let modeloN = document.getElementById("modelo").value;
    let colorN = document.getElementById("color").value;
    let añoN = parseInt(document.getElementById("año").value);
    let kmsN = parseInt(document.getElementById("kms").value);
    let valorN = parseInt(document.getElementById("precio").value);
    
    alert("Vehiculo ingresado con exito!");

    const nuevoVehiculo = new Vehiculo ({
        marca: marcaN,
        modelo: modeloN,
        color: colorN,
        año: añoN,
        kms: kmsN,
        valor: valorN,
    });

    vehiculo.push(nuevoVehiculo);

    let chequeo = document.getElementById("solicitudVenta");
    chequeo.innerHTML = `
        <h3>Datos ingresados</h3>
        <ul>
            <li>Marca: ${nuevoVehiculo.marca}.</li>
            <li>Modelo: ${nuevoVehiculo.modelo} (${nuevoVehiculo.color}).</li>
            <li>Año: ${nuevoVehiculo.año}</li>
            <li>Precio sugerido: ${nuevoVehiculo.valor}</li>
        </ul>
        `;

    function enviarAServidor(obj){
        const enJSON = JSON.stringify(obj); //SE CONVIERTE A JSON PARA ENVIAR AL SERVIDOR (SIMULACION)
        localStorage.setItem("vehiculoVenta", enJSON); //GUARDAMOS EL OBJETO EN EL ALMACENAMIENTO LOCAL
    }

    enviarAServidor(nuevoVehiculo);
}

let botonCompra = document.getElementById("solicitarCompra");
botonCompra.addEventListener("click", crearUsuario);

let botonVenta = document.getElementById("solicitarVenta");
botonVenta.addEventListener("click", ingresarVehiculo);