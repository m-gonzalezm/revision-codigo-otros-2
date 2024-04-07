const formulario = document.querySelector(".formulario"); // Se cambió el selector y el nombre de la clase a la que hace referencia

formulario.onsubmit = function(event) { // Se renombró el parámetro para mejorar la legibilidad, es cuestión de gustos, nombrar e a un evento es aceptado

  event.preventDefault(); // Se corrigió el nombre del método preventDefault
  
  const inputNombre = this.elements[0];
  const inputEdad = this.elements[1];
  const selector = this.elements[2];
  /* Se renombraron n, e y na para hacerlas más descriptivas y mejorar su legibilidad. Se cambió el elemento de referencia por un this para mejorar la estructura de la función */

  let nombre = inputNombre.value;
  let edad = inputEdad.value;
  let nacionalidad = selector.options[selector.selectedIndex].textContent; // Se evitó la declaración del índice y se cambió value por textContent para su posterior uso

  /* Se removieron los console.log por desuso */

  inputNombre.classList.toggle("error", !nombre);
  inputEdad.classList.toggle("error", edad < 18 || edad > 120);
  /* Se refactorizaron las condicionales, haciendo uso del método toggle para incluir la remoción de la clase error */

  if (nombre && edad >= 18 && edad <= 120) // Se removieron los paréntesis al existir únicamente el operador &&, se modificó el primer operando para reducir el código y se evitaron las llaves al ser una única instrucción
    agregarInvitado(nombre, edad, nacionalidad);

}

// Se eliminó la sección del código que creaba un botón

function agregarInvitado(nombre, edad, nacionalidad) {

  /* Se removieron las condicionales porque nacionalidad ya llega con el texto que se va a renderizar */

  const lista = document.getElementById("lista-de-invitados");

  const elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); //Se corrigió el nombre del método add
  lista.appendChild(elementoLista);
  
  function crearElemento(descripcion, valor) {
    const spanNombre = document.createElement("span");
    const inputNombre = document.createElement("input"); // Si no se está ocupando el input para posibles correcciones o modificaciones, se debe cambiar porque es inconsistente y puede causar problemas
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(document.createElement("br")); // Se evitó la declaración del espacio porque no se manipula
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  /* Se removió el id porque un botón se crea por cada invitado */
  elementoLista.appendChild(document.createElement("br")); // Se evitó la declaración del espacio porque no se manipula
  elementoLista.appendChild(botonBorrar);
  
  botonBorrar.onclick = function() {
    this.parentNode.remove(); // Se cambió el elemento de referencia por un this para mejorar la estructura de la función
  }
  
  formulario.reset(); // Se implementó el método reset al formulario para limpiar los valores una vez hecho submit

}

/* 
*   Se modificó la declaración a todas las variables por uno más acorde a su uso y alcance
*   Se agregó ; al final de cada sentencia, por ser buena práctica y para ser consistentes en el código
*   Se recomienda el uso de margin, padding para espaciados, en lugar de br
*/