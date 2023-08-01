let tareas = []; // Array para almacenar las tareas

// Función para agregar una nueva tarea
function agregarTarea() {
  const numeroInput = document.getElementById("numero");
  const fechaInput = document.getElementById("fecha");
  const tareaInput = document.getElementById("tarea");
  
  const numero = numeroInput.value;
  const fecha = fechaInput.value;
  const tarea = tareaInput.value;

  if (tarea !== "") {
    tareas.push({
      numero: numero,
      fecha: fecha,
      tarea: tarea,
      completado: false,
    });
    actualizarTabla();
    numeroInput.value = "";
    fechaInput.value = "";
    tareaInput.value = "";
  }
}

// Función para actualizar la tabla con las tareas
function actualizarTabla() {
  const tablaTareas = document.getElementById("ListaTareas");
  tablaTareas.innerHTML = ""; // Limpiar la tabla antes de actualizarla

  tareas.forEach((tarea, index) => {
    const nuevaFila = tablaTareas.insertRow(); // Agregar una nueva fila al final
    nuevaFila.innerHTML = `
    <td>${index + 1}</td>
    <td>${tarea.fecha}</td>
    <td>${tarea.tarea}</td>
    <td><input type="checkbox" onclick="marcarCompletado(${index}, this)" ${tarea.completado ? "checked" : ""}></td>
    <td><button onclick="editarTarea(${index})" style="margin-right: 5px;">Editar</button><button onclick="eliminarTarea(${index})">Eliminar</button></td>
    `;
  });
}

// Función para marcar una tarea como completada
function marcarCompletado(index, checkbox) {
  tareas[index].completado = checkbox.checked;
}

// Función para eliminar una tarea
function eliminarTarea(index) {
    tareas.splice(index, 1);
    actualizarTabla();
  }
  
  // Función para editar una tarea al hacer clic en el checkbox
  function editarTarea(index) {
    const tareaSeleccionada = tareas[index];
    const numeroInput = document.getElementById("numero");
    const fechaInput = document.getElementById("fecha");
    const tareaInput = document.getElementById("tarea");
  
    // Llenar los campos del formulario con los valores de la tarea seleccionada
    numeroInput.value = tareaSeleccionada.numero;
    fechaInput.value = tareaSeleccionada.fecha;
    tareaInput.value = tareaSeleccionada.tarea;
    habilitarEdicion();
    numeroInput.value = index +1;
    // Habilitar la edición de la tarea seleccionada
    tareaSeleccionadaIndex = index;
  }
  function habilitarEdicion() {
    const numeroInput = document.getElementById("numero");
    numeroInput.disabled = false;
  }
  function guardarCambios() {
    const numeroInput = document.getElementById("numero");
    const fechaInput = document.getElementById("fecha");
    const tareaInput = document.getElementById("tarea");
  
    // Obtener los valores del formulario
    const numero = numeroInput.value;
    const fecha = fechaInput.value;
    const tarea = tareaInput.value;
  
    // Validar que los campos no estén vacíos
    if (tarea !== "") {
      // Actualizar la tarea en el array 'tareas'
      tareas[tareaSeleccionadaIndex].numero = numero;
      tareas[tareaSeleccionadaIndex].fecha = fecha;
      tareas[tareaSeleccionadaIndex].tarea = tarea;
  
      // Limpiar el formulario
      numeroInput.value = "";
      fechaInput.value = "";
      tareaInput.value = "";
  
      // Actualizar la tabla con los cambios
      actualizarTabla();
  
      // Reiniciar el índice de tarea seleccionada
      tareaSeleccionadaIndex = -1;
    }
  }





