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

    let nombre_u = $("#nombre").val();
    let apellido_u = $("#apellido").val();
    let edad_u = parseInt($("#edad").val());
    let email_u = $("#email").val();
    let sueldo_u = parseInt($("#sueldo").val());
    let importe_u = parseInt($("#importe").val());
    let cuotas_u = parseInt($("#cuotas").val());

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

    let chequeo = $("#solicitudCompra");
    chequeo.innerHTML = `
        <h3>Datos ingresados</h3>
        <ul>
            <li>Solcitante: ${nuevoUsuario.nombre} ${nuevoUsuario.apellido}.</li>
            <li>Email de contacto: ${nuevoUsuario.email}</li>
            <li>Monto solicitado: ${nuevoUsuario.importe}</li>
            <li>Cantidad de cuotas: ${nuevoUsuario.cuotas}</li>
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

    let marcaN = $("#marca").val();
    let modeloN = $("#modelo").val();
    let colorN = $("#color").val();
    let añoN = parseInt($("#año").val());
    let kmsN = parseInt($("#kms").val());
    let valorN = parseInt($("#precio").val());
    
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

    //INCORPORAMOS DATOS AL DOM MEDIANTE JQUERY
    $("#solicitudVenta").append(`
        <h3>Datos ingresados</h3>
        <ul>
            <li>Marca: ${nuevoVehiculo.marca}.</li>
            <li>Modelo: ${nuevoVehiculo.modelo} (${nuevoVehiculo.color}).</li>
            <li>Año: ${nuevoVehiculo.año}</li>
            <li>Precio sugerido: ${nuevoVehiculo.valor}</li>
        </ul>
        `);

    function enviarAServidor(obj){
        const enJSON = JSON.stringify(obj); //SE CONVIERTE A JSON PARA ENVIAR AL SERVIDOR (SIMULACION)
        localStorage.setItem("vehiculoVenta", enJSON); //GUARDAMOS EL OBJETO EN EL ALMACENAMIENTO LOCAL
    }

    enviarAServidor(nuevoVehiculo);
}

$("#solicitarCompra").on("click", crearUsuario);

$("#solicitarVenta").on("click", ingresarVehiculo);

$(".comprar").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
        {
            scrollTop: $(".formCompra").offset().top,
        },
        2000,
    )
})

$(".vender").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
        {
            scrollTop: $(".formVenta").offset().top,
        },
        2000,
    )
})