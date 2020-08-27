function validar(){
    var rut = document.getElementById("rut").value;
    var rutexp = /^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/;
    var nombre = document.getElementById("nombre").value;
    var nombrexp = /^[a-z ,.'-]+$/i;
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;
    var correoexp =/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;  
    var especialidad = document.getElementById("especialidad").value;
    var fecha = document.getElementById("fecha").value;
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
         //edadexp--exp regular para solo numero//
        alert("La edad es muy larga");
        return false;
    }
    if (correo=== ""){
        alert("Todos los campos son obligatorios");
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
        //fechaexp--exp regular para solo numero//
        alert("Todos los campos son obligatorios");
        return false;
    } 

    if (nombre != "" && apellidos){
        alert("Estimado(a)"+nombre+ "su hora para ha sido reservada para el día a las. Además, se le envió un mensaje a su correo con el detalle de su cita. Gracias por preferirnos.")
    }
}
 //"+apellidos+" "+especialidad+" "+fecha+" "+hora+" "+correo+"  && (apellidos != "") && (fecha != "") && (correo != "")