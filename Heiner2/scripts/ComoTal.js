function redirectCreateCliente()
{
    window.location.href = 'http://localhost:53788/RUDCLIENTE.html';
}
function redirectCreateProducto() {
    window.location.href = 'http://localhost:53788/RUDPRODUCTO.html';
}
function redirectCreateInventario() {
    window.location.href = 'http://localhost:53788/RUDINEVENTARIO.html';
}
function redirectCreateProducto2() {
    window.location.href = 'http://localhost:53788/CreateProducto.html';
}
function redirectCreateCliente2() {
    window.location.href = 'http://localhost:53788/CreateCliente.html';
}
function redirectCreateInventario2() {
    window.location.href = 'http://localhost:53788/CreateInventario.html';
}
function redirectUpdateCliente() {
    window.location.href = 'http://localhost:53788/UpdateCliente.html';
}
function redirectUpdateInventario() {
    window.location.href = 'http://localhost:53788/UpdateInventario.html';
}
function redirectUpdateProducto() {
    window.location.href = 'http://localhost:53788/UpdateProducto.html';
}
function getClients() {
    $.ajax({
        type: "GET",
        url: "/Clientes/GetClientes",
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            var tableContent = "";
            $.each(response, function (index, val) {
            
            });
            $("#table").html(tableContent);
        },
        error: function (response) {
            console.log(response);
        }
    })
}

var apiURL = "";
function ajaxCreateClientes(cliente)
{
    $.post(apiURL + "clientes",{cliente})
    .done(function (data) {
        Console.log(data);  
    });
}
//update=put
//select get
function createCliente()
{    
    var nombre = document.getElementById("Nombre").innerHTML;
    var Apellido = document.getElementById("Apellido").innerHTML;
    var direccion = document.getElementById("direccion").innerHTML;
    var fechanacimiento = document.getElementById("fechanacimiento").innerHTML;
    var estadocivil = document.getElementById("estadocivil").innerHTML;
    var sexo = document.getElementById("sexo").innerHTML;
    var fechaingreso = document.getElementById("fechaingreso").innerHTML;
    var tipo = document.getElementById("tipo").innerHTML;
    var descuento = document.getElementById("descuento").innerHTML;
    var cliente={ nombre: nombre, apellido: Apellido ,fechanacimiento: fechanacimiento, direccion:direccion, estadocivil:estadocivil, sexo:sexo, fechaingreso:fechaingreso, tipo:tipo, descuento:descuento};
    ajaxCreateClientes(cliente);
}
function ajaxUpdateClientes(cliente) {
    $.put(apiURL + "clientes", { cliente })
    .done(function (data) {
        Console.log(data);
    });
}
function UpdateCliente(id) {
    var nombre = document.getElementById("Nombre").innerHTML;
    var Apellido = document.getElementById("Apellido").innerHTML;
    var direccion = document.getElementById("direccion").innerHTML;
    var fechanacimiento = document.getElementById("fechanacimiento").innerHTML;
    var estadocivil = document.getElementById("estadocivil").innerHTML;
    var sexo = document.getElementById("sexo").innerHTML;
    var fechaingreso = document.getElementById("fechaingreso").innerHTML;
    var tipo = document.getElementById("tipo").innerHTML;
    var descuento = document.getElementById("descuento").innerHTML;
    var cliente = { nombre: nombre, apellido: Apellido, fechanacimiento: fechanacimiento, direccion: direccion, estadocivil: estadocivil, sexo: sexo, fechaingreso: fechaingreso, tipo: tipo, descuento: descuento };
    ajaxUpdateClientes(cliente);
}
function ajaxDeleteClientes(id) {
    $.put(apiURL + "clientes", { id })
    .done(function (data) {
        Console.log(data);
    });
}
function DeleteCliente(id) {
    ajaxDeleteClientes(id);
}
function ajaxCreateProducto(producto) {
    $.put(apiURL + "clientes", { producto })
    .done(function (data) {
        Console.log(data);
    });
}
function CreateProducto() {
    var nombre = document.getElementById("Nombre").innerHTML;
    var marca = document.getElementById("marca").innerHTML;
    var familia = document.getElementById("familia").innerHTML;
    var casafabricacion = document.getElementById("casafabricacion").innerHTML;
    var tipounidad = document.getElementById("tipounidad").innerHTML;
    var departamento = document.getElementById("departamento").innerHTML;
    var activo = document.getElementById("activo").innerHTML;
    var fechaingreso = document.getElementById("fechaingreso").innerHTML;
    var unidad = document.getElementById("unidad").innerHTML;
    var impuesto = document.getElementById("impuesto").innerHTML;
    var producto = { nombre: nombre, marca: marca, familia: familia, casafabricacion: casafabricacion, tipounidad: tipounidad, departamento: departamento, activo: activo, fechaingreso: fechaingreso, unidad: unidad, impuesto: impuesto };
    ajaxCreateProducto(producto);
}
function ajaxUpdateProducto(producto) {
    $.put(apiURL + "clientes", { producto })
    .done(function (data) {
        Console.log(data);
    });
}
function UpdateProducto(id) {
    var nombre = document.getElementById("Nombre").innerHTML;
    var marca = document.getElementById("marca").innerHTML;
    var familia = document.getElementById("familia").innerHTML;
    var casafabricacion = document.getElementById("casafabricacion").innerHTML;
    var tipounidad = document.getElementById("tipounidad").innerHTML;
    var departamento = document.getElementById("departamento").innerHTML;
    var activo = document.getElementById("activo").innerHTML;
    var fechaingreso = document.getElementById("fechaingreso").innerHTML;
    var unidad = document.getElementById("unidad").innerHTML;
    var impuesto = document.getElementById("impuesto").innerHTML;
    var producto = { nombre: nombre, marca: marca, familia: familia, casafabricacion: casafabricacion, tipounidad: tipounidad, departamento: departamento, activo: activo, fechaingreso: fechaingreso, unidad: unidad, impuesto: impuesto };
    ajaxUpdateProducto(producto);
}
function ajaxDeleteProducto(id) {
    $.put(apiURL + "clientes", { id })
    .done(function (data) {
        Console.log(data);
    });
}
function DeleteProducto(id) {
    ajaxDeleteProducto(id);
}
function ajaxCreateInventario(inventario) {
    $.post(apiURL + "clientes", { inventario })
    .done(function (data) {
        Console.log(data);
    });
}
function createInventario() {
    var idproducto = document.getElementById("idproducto").innerHTML;
    var cantidad = document.getElementById("cantidad").innerHTML;
    var cantidadminima = document.getElementById("cantidadminima").innerHTML;
    var cantidadmaxima = document.getElementById("cantidadmaxima").innerHTML;
    var gravadoexcepto = document.getElementById("gravadoexcepto").innerHTML;
    var inventario = { idproducto: idproducto, cantidad: cantidad, cantidadminima: cantidadminima, cantidadmaxima: cantidadmaxima, gravadoexcepto: gravadoexcepto};
    ajaxCreateInventario(inventario);
}
function ajaxUpdateInventario(inventario) {
    $.post(apiURL + "clientes", { inventario })
    .done(function (data) {
        Console.log(data);
    });
}
function updateInventario() {
    var idproducto = document.getElementById("idproducto").innerHTML;
    var cantidad = document.getElementById("cantidad").innerHTML;
    var cantidadminima = document.getElementById("cantidadminima").innerHTML;
    var cantidadmaxima = document.getElementById("cantidadmaxima").innerHTML;
    var gravadoexcepto = document.getElementById("gravadoexcepto").innerHTML;
    var inventario = { idproducto: idproducto, cantidad: cantidad, cantidadminima: cantidadminima, cantidadmaxima: cantidadmaxima, gravadoexcepto: gravadoexcepto };
    ajaxUpdateInventario(inventario);
}
function ajaxDeleteInventario(id) {
    $.put(apiURL + "clientes", { id })
    .done(function (data) {
        Console.log(data);
    });
}
function DeleteInventario(id) {
    ajaxDeleteInventario(id);
}
function paintTableCliente()
{
    var contenido;
    for (var i = 0; i < length; i++) {
        contenido += "  <tr>"+"<th>"+nombre+"</th><th>"+apellido+"</th><th>"+fechanacimiento+"</th><th>"+direccion+"</th><th>"+estadocivil+"</th><th>"+sexo+"</th><th>"+fechaingreso+"</th><th>"+tipo+"</th><th>"+descuento+"</th><th>"+
        +"<button type="+"button"+ +"class="+"glyphicon glyphicon-pencil"+"onclick="+"redirectUpdateCliente();"+"></button>"+
        "<button type="+"button"+" class="+"glyphicon glyphicon-scissors"+" onclick="+"DeleteCliente();"+"></button> </th></tr>";        
    }
    $("#body").html(contenido);
}
function paintTableInventario()
{
    var contenido="";
    for (var i = 0; i < length; i++) {
        contenido = " <tr><th>" + idproducto + "</th><th>" + cantidad + "</th><th>" + cantidadminima + "</th><th>" + cantidadmaxima + "</th><th>" + gravadoexcepto + "</th><th>"
            + "<button type=" + "button" + "class=" + "glyphicon glyphicon-pencil" + " onclick=" + "redirectUpdateInventario();" + "></button><button type=" + "button" + " class=" + "glyphicon glyphicon-scissors" + "onclick=" + "DeleteInventario();" + "></button></th>"
            + "</tr>";
    }
    $("#body").html(contenido);
}
function paintTableProducto()
{
    var contenido="";
    for (var i = 0; i < length; i++) {
        contenido = "<tr><th>" + nombre + "</th><th>" + marca + "</th><th>" + familia + "</th><th>" + casafabricacion + "</th><th>" + tipounidad + "</th><th>" + departamento + "</th><th>" + activo + "</th><th>" + fechaingreso + "</th><th>" + unidad + "</th><th>" + impuesto + "</th><th>" +
            "<button type=" + "button" + "class=" + "glyphicon glyphicon-pencil" + " onclick=" + "redirectUpdateProducto();" + "></button><button type=" + "button" + "class=" + "glyphicon glyphicon-scissors" + " onclick=" + "DeleteProducto();" + "></button></th>" +"</tr>";
    }
    $("#body").html(contenido);
}
function paintInputUpdateCliente()
{
    var contenido="";
    contenido="<div class='col-md-4'>"+
          "<span class='label label-success'>Nombre</span>"+
          "<input type='text'class='form-control' placeholder='Nombre2' id=Nombre>"+
           "</div>"+
      "<div class='col-md-4'>"+
          "<span class='label label-success'>Apellido</span>"+
          "<input type='text' class='form-control' placeholder='Apellido2' id='Apellido'>"+
      "</div>"+
      "<div class='col-md-4'>"+
          "<span class='label label-success'>direccion</span>"+
          "<input type='text' class='form-control' placeholder='direccion2' id='direccion'>"+
      "</div>"+

      "<div class='col-md-4'>"+
          "<span class='label label-success'>fechanacimiento</span>"+
          "<input type='text' class='form-control' placeholder='fechanacimiento2' id='fechanacimiento'>"+
    "</div>"+

      "<div class='col-md-2'>"+
          "<span class='label label-success'>estadocivil (soltero: s)(casado: c)</span>"+
          "<input type='text' class='form-control' placeholder='estadocivil2' id='estadocivil'>"+
      "</div>"+

      "<div class='col-md-2'>"+
          "<span class='label label-success'>sexo (hombre: h)(mujer: m)</span>"+
          "<input type='text' class='form-control' placeholder='sexo2' id='sexo'>"+
      "</div>"+
      "<div class='col-md-4'>"+
          "<span class='label label-success'>fechaingreso</span>"+
          "<input type='text' class='form-control' placeholder='fechaingreso2' id='fechaingreso'>"+
      "</div>"+

      "<div class='col-md-6'>"+
          "<span class='label label-success'>tipo</span>"+
          "<input type='text' class='form-control' placeholder='tipo2' id='tipo'>"+
      "</div>"+

      "<div class='col-md-6'>"+
          "<span class='label label-success'>descuento</span>"+
          "<input type='text' class='form-control' placeholder='descuento2' id='descuento'>"+
      "</div>";
    $("#body").html(contenido);
}