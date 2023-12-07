// Crear un objeto para la validación de formularios
let validacion = {
    validarFormulario: function(nombre, email) {
      if (nombre === '') {
        return 'Error: El nombre es requerido';
      } else if (email === '') {
        return 'Error: El email es requerido';
      } else if (!email.includes('@')) {
        return 'Error: El email no es válido';
      } else {
        return 'Formulario válido';
      }
    }
   };
   
   // Prueba de la validación de formularios
   console.log(validacion.validarFormulario('', '')); // Error: El nombre es requerido
   console.log(validacion.validarFormulario('Juan', '')); // Error: El email es requerido
   console.log(validacion.validarFormulario('Juan', 'juan')); // Error: El email no es válido
   console.log(validacion.validarFormulario('Juan', 'juan@gmail.com')); // Formulario válido
   