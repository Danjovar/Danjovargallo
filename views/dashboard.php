<?php
session_start(); // Asegúrate de iniciar la sesión al comienzo de cada script que necesite acceder a las variables de sesión.

if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true) {
  // El usuario está autenticado
  $userId = $_SESSION['user_id'];
  $roleId = $_SESSION['role_id'];
  $nombre = $_SESSION['nombre'];
  $total_users = $_SESSION['total_users'];
} else {
  // El usuario no está autenticado, puedes redirigirlo a una página de inicio de sesión.
  header("Location: ../index.php");
  exit();
}

?>

<!doctype html>
<html lang="es">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
 
  <script src="../assets/alertify/alertify.js"></script>
  <link rel="stylesheet" href="../assets/alertify/css/alertify.css" />
  <link rel="stylesheet" href="../assets/alertify/css/themes/default.css" />
  <link rel="stylesheet" href="../style.css">
  <script src="../js/jquery.min.js"></script>
  <script src="../js/main.js"></script>
  <script src="./js/playlist.js"></script>
</head>

<body>

<header>

<nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
            <a class="navbar-brand" href="dashboard.php">Navbar</a>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link" href="../index1.html">First</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../index2.html">Second</a>
              </li>     <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="index.php" role="button" aria-expanded="true">Login</a>
              </li>
            </ul>
          </nav>
          <svg xmlns="http://www.w3.org/2000/svg" width="85" height="" fill="currentColor" class="bi bi-spotify" viewBox="0 0 20 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
          </svg>

      </header>
  
    
      <div class="content">
        <div id="spotifyPlayer"></div>

      </div>

        <footer class="footer">
             <h5>©2024  pagina-spotify</h5>
        </footer>


 


      <header>


    <script>
        // Definir el ID de la lista de reproducción de Spotify
        const playlistId = '4cdCUZVakAadozITR9xIQH';

        // Crear el iframe
        const iframe = document.createElement('iframe');
        iframe.title = "Spotify Embed: Recommendation Playlist ";
        iframe.src = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.style.minHeight = '360px';
        iframe.frameBorder = "0";
        iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
        iframe.loading = "lazy";

        // Agregar el iframe al elemento con el id 'spotifyPlayer'
        document.getElementById('spotifyPlayer').appendChild(iframe);
    </script>




  

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>

</html>