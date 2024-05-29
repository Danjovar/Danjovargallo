$(document).ready(function () {
  // Evento de envío del formulario de login
  $("#loginForm").submit(function (event) {
    event.preventDefault();

    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();

    loginUser(username, password);
  });



  $("#crearUsuario").submit(function (event) {
    event.preventDefault();

    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();

    console.log( username + ' --- ' + password );

    /* loginUser(username, password); */
  });


    // crear usuarios
    $("#crearUsuarioForm").submit(function (event) {
      event.preventDefault();
  
      var nombreUsuario = $('input[name="nombreUsuario"]').val();
      var nombre  = $('input[name="nombre"]').val();
      var documento = $('input[name="documento"]').val();
      var password = $('input[name="password"]').val();
      var fechaNacimiento = $('input[name="fecha"]').val();
      var usuario = $('input[name="usuario"]').val();
      var rol = $("#rol").val();
      var status = $("#Estado").val();
      var email = $('input[name="email"]').val();



  
    Createusuario(nombreUsuario, documento,
        password,
        fechaNacimiento,
        usuario,
        rol,
        status,
        email,
        nombre
      );
    });
    ////  fin crear usuarios

    
    $("#elimminar").click(function (event) {
      event.preventDefault();
  
      var id = $("#Mdusers_id").val();
        

      console.log("Id a leminiar" + id );

        

  
       EliminarDetallesUsuario(id); 
    });


    $("#editar").click(function (event) {
      event.preventDefault();
  
      var id = $("#Mdusers_id").val();
      var Mdusername =$("#Mdusername").val();
      var Mdemail=$("#Mdemail").val();
      var Mdpassword=$("#Mdpassword").val();
      var Mdrol=$("#Mdrol").val();
      var Mddocumento=$("#Mddocumento").val();
      var Mdnombre=$("#Mdnombre").val();
      var Mdfecha=$("#Mdfecha").val();
      var MdEstado=$("#MdEstado").val();

       EditarUsuario(id,Mdusername,Mdemail,Mdpassword,Mdrol,Mddocumento,Mdnombre,Mdfecha,MdEstado); 
    });

  loadTableUsers();




});


function loginUser(username, password) {
    $.ajax({
      url: "./backend/login.php",
      method: "POST",
      data: { username: username, password: password },
      dataType: "json",
      success: function (response) {
        if (response.status === "success") {
          alertify.success("Login successful");
          window.location.href = "./views/dashboard.php";
        } else if (response.status === "error") {
          if (response.message === "El usuario está inactivo") {
            // Usuario inactivo
            alertify.error(response.message);
          } else {
            // Credenciales inválidas u otro error
            console.log("Error: " + response.message);
            alertify.error(response.message);
            $('input[name="username"]').val("");
            $('input[name="password"]').val("");
          }
        } else {
          console.log("Otro error");
          $("#result").html("<p>Error in AJAX call</p>");
        }
      },
    });
  }

function loadTableUsers() {
  
  $.ajax({
    url: "../backend/users.php",
    method: "POST",
    success: function (data) {
      $("#tableUsers").html(data);
    
    },
  });

}



function Createusuario(
  nombreUsuario,
  documento,
  password,
  fechaNacimiento,
  usuario,
  rol,
  status,
  email,
  nombre
) {
  $.ajax({
    url: "../backend/usuario.php",
    method: "POST",
    data: {
      nombreUsuario: nombreUsuario,
      documento: documento,
      password: password,
      fechaNacimiento: fechaNacimiento,
      usuario: usuario,
      rol: rol,
      status: status,
      email: email,
        nombre:nombre
    },
    dataType: "json", // Indica que esperas una respuesta JSON
    success: function (response) {
      console.log("Respuesta del insert", response);
      if (response.status === "success") {
        alertify.success("Usuario agregado con exito ");
        // Cierra el modal
        $("#crearUsuarioModal").modal("hide");

        // Limpia los campos del formulario
        $("#crearUsuarioForm")[0].reset();

        loadTableUsers();

      } else if (response.status === "error") {
        console.log("Error: " + response.message);
        alertify.error(response.message);
      } else {
        console.log("Otro error");
        $("#result").html("<p>Error in AJAX call</p>");
      }
    },
  });
}


function mostrarDetallesUsuario(user_id) {

/*   console.log(user_id); */


$.ajax({
  url: "../backend/obtener_detalles_usuario.php",
  method: "POST",
  data: {user_id:user_id},
  dataType: "json",
  success: function(response) {
    console.log("response--->", response);

    if (response.error) {
      console.log("Error: " + response.error);
      
    }
    else
    {
        $("#MdEstado").val(response.status);
        $("#Mdfecha").val(response.birthdate);

        $("#Mdusers_id").val(response.user_id);


        
        $("#Mdnombre").val(response.full_name);

        $("#Mddocumento").val(response.document);

        $("#Mdrol").val(response.fk_role_id);

        $("#Mdemail").val(response.email);
        $("#Mdusername").val(response.username);

       
      
    }

  }

});
  
}


function EliminarDetallesUsuario(id) {

  /*   console.log(user_id); */
  
  
  $.ajax({
    url: "../backend/eliminar_usuario.php",
    method: "POST",
    data: {id:id},
    dataType: "json",
    success: function (response) {
      console.log("Respuesta del insert", response);
      if (response.status === "success") {
        alertify.success("Usuario Eliminado con exito ");
        // Cierra el modal
        $("#EditarUsuarioModal").modal("hide");

        // Limpia los campos del formulario
        $("#editarUsuarioForm")[0].reset();

        loadTableUsers();

      } else if (response.status === "error") {
        console.log("Error: " + response.message);
        alertify.error(response.message);
      } else {
        console.log("Otro error");
        $("#result").html("<p>Error in AJAX call</p>");
      }
    }
  
  });
    
  }


  function   EditarUsuario(id,Mdusername,Mdemail,Mdpassword,Mdrol,Mddocumento,Mdnombre,Mdfecha,MdEstado) { 
    
    $.ajax({
      url: "../backend/editar_usuario.php",
      method: "POST",
      data: {id:id,Mdusername:Mdusername,Mdemail:Mdemail,Mdpassword:Mdpassword,Mdrol:Mdrol,
        Mddocumento:Mddocumento,Mdnombre:Mdnombre,Mdfecha:Mdfecha,MdEstado:MdEstado},
      dataType: "json",
      success: function (response) {
        console.log("Respuesta del EditarUsuario", response);
        if (response.status === "success") {
          alertify.success("Usuario Editado con exito ");
          // Cierra el modal
          $("#EditarUsuarioModal").modal("hide");
  
          // Limpia los campos del formulario
          $("#editarUsuarioForm")[0].reset();
  
          loadTableUsers();
  
        } else if (response.status === "error") {
          console.log("Error: " + response.message);
          alertify.error(response.message);
        } else {
          console.log("Otro error");
          $("#result").html("<p>Error in AJAX call</p>");
        }
      }
    
    });
      
    }
