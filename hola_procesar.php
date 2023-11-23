<?php
// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validar el captcha
    $secreto = "6Ld-8hUpAAAAABYh8dkqAQNpLUnjeOwECAHniw2d";
    $respuesta = $_POST['g-recaptcha-response'];
    $verificacion = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secreto}&response={$respuesta}");
    $datos = json_decode($verificacion);

    if ($datos->success) {
        // Captcha válido, proceder con el procesamiento del formulario

        // Validar y escapar los datos del formulario
        $campo1 = validar_y_escapar($_POST['nombre']);
        $campo2 = validar_y_escapar($_POST['apellido']);
        $campo3 = validar_y_escapar($_POST['email']);
        // Agregar más campos según sea necesario...

        // Enviar correo electrónico con los datos del formulario
        $destinatario = "hola@unavida.tech"; // Cambiar a la dirección de correo deseada
        $asunto = "Nuevo formulario enviado";

        $mensaje = "Datos del formulario:\n";
        $mensaje .= "Campo 1: " . $campo1 . "\n";
        $mensaje .= "Campo 2: " . $campo2 . "\n";
        $mensaje .= "Campo 3: " . $campo3 . "\n";
        // Agregar más campos según sea necesario...

        // Utilizar la función mail() para enviar el correo
        mail($destinatario, $asunto, $mensaje);

        // Mostrar mensaje de éxito
        echo "Formulario procesado con éxito. Se ha enviado un correo electrónico.";
        // redirige a una pantalla de exito
        // header(exito.php,)
    } else {
        // Captcha no válido, manejar el error
        echo "Error: Captcha no válido";
    }
} else {
    // Si el formulario no se ha enviado, redirigir o manejar según sea necesario
    echo "Error: El formulario no ha sido enviado";
}

// Función para validar y escapar datos
function validar_y_escapar($dato) {
    $dato = trim($dato);
    $dato = stripslashes($dato);
    $dato = htmlspecialchars($dato);
    return $dato;
}
?>