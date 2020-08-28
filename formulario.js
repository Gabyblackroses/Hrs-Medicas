function validar(){
    var rut = document.getElementById("rut").value;
    var rutexp = /^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/;
    var nombre = document.getElementById("nombre").value;
    var nombrexp = /^[a-z ,.'-]+$/i;
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var edadexp = /^[0-9]{1,3}$/;  
    var correo = document.getElementById("correo").value;
    var correoexp =/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;  
    var especialidad = document.getElementById("especialidad").value;
    var fecha = document.getElementById("fecha").value;
    var fechaexp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var hora = document.getElementById("hora").value;

    
    if (rut === ""){
        alert("Favor ingrese su rut");
        return false;
    }
    else if (!rutexp.test(rut)){
        alert("El rut es erroneo");
        return false;
    } 
    if (nombre === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (!nombrexp.test(nombre)){
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
    else if (!edadexp.test(edad)){
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
    else if( (!correoexp.test(correo)) ) {
        alert("Debe poseer un ‘@’ y un punto ‘.’ ");
        return false;
    }
    if (fecha=== ""){
        alert("Todos los campos son obligatorios");
        return false;
    } 
    else if( (!fechaexp.test(fecha)) ) {
        alert("Formato dd-mm-yyyy");
        return false;
    }

    if (nombre != "" && apellidos!= "" && fecha!= "" && correo!= ""){
        alert("Estimado(a) "+nombre+" "+apellidos+", su hora para "+especialidad+" ha sido reservada para el día "+fecha+" a las "+hora+"hrs. Además, se le envió un mensaje a su correo "+correo+" con el detalle de su cita. Gracias por preferirnos.");
        document.getElementById("resultado").innerHTML = "Estimado(a) "+nombre+" "+apellidos+", su hora para "+especialidad+" ha sido reservada para el día "+fecha+" a las "+hora+"hrs. Además, se le envió un mensaje a su correo "+correo+" con el detalle de su cita. Gracias por preferirnos.";
    }
    return false;
}
