function validar(){
    var rut = document.getElementById("rut").value;
    var rutexp = /^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/;
    var nombre = document.getElementById("nombre").value;
    var nombrexp = /^[a-z ,.'-]+$/i;
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var edadexp = /^[0-9]$/;
    var correo = document.getElementById("correo").value;
    var correoexp =/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;  
    var especialidad = document.getElementById("especialidad").value;
    var fecha = document.getElementById("fecha").value;
    var fechaexp = /^\d{2}[.-/]\d{2}[.-/]\d{4}$/; 
    var hora = document.getElementById("hora").value;

    if (rut === ""){
        alert("Favor ingrese su rut");
        return false;
    }
    else if (!rut.test(rutexp)){
        alert("El rut es erroneo");
        return false;
    } 
    if (nombre === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (!nombre.test(nombrexp)){
        alert("El nombre no valido");
        return false;
    }
    if (apellidos=== ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (apellidos.length>80){
        alert("El apellido es muy largo");
        return false;
    }
    if (edad === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (edad.length>2){
        alert("La edad es muy larga");
        return false;
    }
    else if (!edad.test(edadexp)){
        alert("La edad no es válida");
            return false;
    }
    if (correo === ""){
        alert("El correo no es válida");
        return false;
    }
    else if (correo.length>100){
        alert("El correo es muy largo");
        return false;
    }
    else if( (!correo.test(correoexp)) ) {
        alert("Debe poseer un ‘@’ y un punto ‘.’ ");
        return false;
    }
    if (fecha=== ""){
        alert("Todos los campos son obligatorios");
        return false;
    } 
    else if( (!fecha.test(fechaexp)) ) {
        alert("Formato dd-mm-yyyy");
        return false;
    }

    if (nombre != "" && apellidos){
        alert("Estimado(a)"+nombre+ "su hora para ha sido reservada para el día a las. Además, se le envió un mensaje a su correo con el detalle de su cita. Gracias por preferirnos.")
    }
}
 //"+apellidos+" "+especialidad+" "+fecha+" "+hora+" "+correo+"  && (apellidos != "") && (fecha != "") && (correo != "")