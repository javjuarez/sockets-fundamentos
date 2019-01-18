var socket = io();

// Para escuchar información - on
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Se perdió la conexión con el servidor');
});

// Para enviar información - emit
socket.emit('enviarMensaje', {
    usuario: 'Javier Juárez',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('Respuesta del servidor:', resp);
});

socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor:', mensaje);
})