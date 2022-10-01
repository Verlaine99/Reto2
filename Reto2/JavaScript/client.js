function traerDatos(){
    $.ajax({
        url: "https://g765c8ee3fba53d-wtq1vixnwrv7afli.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        dataType: "json",
        success: function(respuesta){
            mostrarDatos(respuesta.items)
        }
    })
}

function mostrarDatos(items){
    alert("Loading ...!")   
    let tabla = "<table border=2>";
    for(let i=0; i<items.length; i++){
        tabla += "<tr>";
        tabla += "<td>" + items[i].id; + "</td>";
        tabla += "<td>" + items[i].brand; + "</td>";
        tabla += "<td>" + items[i].model; + "</td>";
        tabla += "<td>" + items[i].category_id; + "</td>";
        tabla += "<td>" + items[i].name; + "</td>";
        tabla += "<td> <button onclick='borrarDatos(" + items[i].id + ")'> Eliminar </button>";
        tabla += "</tr>";

    }
    tabla += "</table>";
    $("#resultado").append(tabla);

}

function guardarInfo(){
    let datos = {
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),

    };

    let dataToSend = JSON.stringify(datos); 
    $.ajax({

        url: "https://g765c8ee3fba53d-wtq1vixnwrv7afli.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data: datos,
        dataType: "json",
        success: function(respuesta){
            alert("Se ha guardado el dato!")    
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerDatos();
            
        }
    })
}

function editarInfo(){
    let datos = {
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),

    };
    console.log(datos);
    let dataToSend = JSON.stringify(datos); 
    $.ajax({

        url: "https://g765c8ee3fba53d-wtq1vixnwrv7afli.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data:dataToSend,
        contentType: "application/json",
        dataType: "json",
        success: function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            
            alert("Se ha actualizado con éxito!")   
        }
    })
}

function borrarDatos(Id){
    let datos={
        id:Id
    };
    let dataToSend = JSON.stringify(datos);
    $.ajax({
        url: "https://g765c8ee3fba53d-wtq1vixnwrv7afli.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data:dataToSend,
        contentType: "application/json",
        datatype: "json",
        success: function(respuesta){
            $("#resultado").empty();
            traerDatos();
            alert("Elemento eliminado con éxito!")
        }
    })
}