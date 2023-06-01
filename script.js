// Obtener elementos del DOM
const reservaForm = document.getElementById('reservaForm');
const historialReservas = document.getElementById('historialReservas');

// Obtener el historial de reservas desde el almacenamiento local (si existe)
let reservas = JSON.parse(localStorage.getItem('reservas')) || [];

// Mostrar las reservas guardadas en el historial
mostrarReservas();

// Manejar el envío del formulario de reserva
reservaForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtener valores de entrada del formulario
  const nombre = document.getElementById('nombre').value;
  const fecha = document.getElementById('fecha').value;

  // Crear un objeto de reserva
  const reserva = {
    nombre,
    fecha
  };

  // Agregar la reserva al historial
  reservas.push(reserva);

  // Guardar el historial de reservas en el almacenamiento local
  localStorage.setItem('reservas', JSON.stringify(reservas));

  // Mostrar las reservas actualizadas en el historial
  mostrarReservas();

  // Limpiar el formulario
  reservaForm.reset();
});

// Función para mostrar las reservas en el historial
function mostrarReservas() {
  historialReservas.innerHTML = '';

  // Recorrer el historial de reservas y crear elementos de lista para cada reserva
  reservas.forEach(reserva => {
    const reservaItem = document.createElement('li');
    reservaItem.textContent = `Nombre: ${reserva.nombre}, Fecha: ${reserva.fecha}`;
    historialReservas.appendChild(reservaItem);
  });
}
