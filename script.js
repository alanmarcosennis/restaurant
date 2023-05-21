// Validación del formulario de contacto y envío de correo electrónico
const form = document.getElementById('contacto-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Validar el formulario antes de enviar el correo electrónico
  let nombre = document.getElementById('nombre').value;
  let email = document.getElementById('email').value;
  let mensaje = document.getElementById('mensaje').value;
  
  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, completa todos los campos del formulario.');
    return;
  }
  

  // Simular el envío del formulario
  setTimeout(function() {
    alert('¡Mensaje enviado correctamente!');
    form.reset();
  }, 1000);
});

