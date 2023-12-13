function calcular(){
    var lugar = document.getElementById("lugar-visita").value;
    var cant_adultos = document.getElementById("cant_adultos").value;
    var cant_menores = document.getElementById("cant_menores").value;
    var duracion = document.getElementsByName("duracion");
    var duracion_value;
    var pago = document.getElementById("pago").value;
    var total_precio = 0;
   
    for(var i = 0; i < duracion.length; i++){
        if(duracion[i].checked){
           duracion_value = duracion[i].value;
        }
    }
    
    if(lugar == "VILLA GENERAL BELGRANO"){
        total_precio = (10000 * cant_adultos) + (8000 * cant_menores)
        if(duracion_value == "medio"){
            total_precio = total_precio - (total_precio*0.50);
        }
        if(duracion_value == "completo"){
            total_precio = total_precio;
        }
    }
    if(lugar == "VILLA CARLOS PAZ"){
        total_precio = (7000 * cant_adultos) + (5000 * cant_menores)
        if(duracion_value == "medio"){
            total_precio = total_precio - (total_precio*0.50);
        }
        if(duracion_value == "completo"){
            total_precio = total_precio;
        }
    }
    if(lugar == "LA CUMBRECITA"){
        total_precio = (15000 * cant_adultos) + (10000 * cant_menores)
        if(duracion_value == "medio"){
            total_precio = total_precio - (total_precio*0.50);
        }
        if(duracion_value == "completo"){
            total_precio = total_precio;
        }
    }

    if(pago == "efectivo"){
        total_precio = total_precio * 0.85;
    }
    if(pago == "debito"){
        total_precio;
    }
    if(pago == "credito"){
        total_precio = total_precio * 1.1;
    }

    document.getElementById("resultado").innerHTML = "EL COSTO DE LA VISITA A " +lugar+ " ES: $" +total_precio;
}

function borrar(){
    document.getElementById("lugar-visita").value = " ";
    document.getElementById("cant_adultos").value = " ";
    document.getElementById("cant_menores").value = " ";
    document.getElementById("pago").value = " ";
    document.getElementById("resultado").innerHTML = " ";
    // document.getElementsByName("duracion").value = " ";
    var duracion = document.getElementsByName("duracion");
    for(var i = 0; i < duracion.length; i++){
        duracion[i].checked = false;
    }
    //duracion.value = " ";
}