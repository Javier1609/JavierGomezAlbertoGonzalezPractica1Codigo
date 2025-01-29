### Instrucciones para Usar la Aplicación de Gestión de Clientes

1. **Abrir la Aplicación**:
   - Abre el archivo `index.html` en tu navegador web.

2. **Añadir un Nuevo Cliente**:
   - Completa el formulario en la parte superior de la página:
     - **Nombre**: Ingresa el nombre del cliente.
     - **Email**: Ingresa la dirección de correo electrónico del cliente.
     - **Extensión del Teléfono**: Selecciona la extensión telefónica adecuada del menú desplegable.
     - **Teléfono**: Ingresa el número de teléfono del cliente (solo se permiten números).
   - Haz clic en el botón **Añadir Cliente** para guardar el cliente.

3. **Ver Clientes**:
   - Los clientes añadidos se mostrarán en la tabla debajo del formulario.
   - La tabla muestra el ID del cliente, nombre, email, número de teléfono y botones de acción.

4. **Editar un Cliente**:
   - Haz clic en el botón **Editar** junto al cliente que deseas editar.
   - Aparecerá un modal con la información actual del cliente.
   - Actualiza los campos necesarios y haz clic en **Guardar Cambios** para actualizar la información del cliente.

5. **Eliminar un Cliente**:
   - Haz clic en el botón **Eliminar** junto al cliente que deseas eliminar.
   - El cliente será eliminado de la tabla y del almacenamiento local.

6. **Cerrar el Modal de Edición**:
   - Haz clic en el botón **X** en la esquina superior derecha del modal o haz clic fuera del modal para cerrarlo sin guardar los cambios.

### Detalles Técnicos

- **Persistencia de Datos**: Los datos de los clientes se almacenan en el `localStorage` del navegador, por lo que se mantienen entre sesiones.
- **Validación**: El formulario incluye validación para asegurar que todos los campos estén correctamente llenados y el formato del email sea válido.
- **Número de Teléfono**: El campo de número de teléfono solo acepta entrada numérica.

### Requisitos

- Un navegador web moderno (Chrome, Firefox, Edge, etc.)
- JavaScript habilitado en el navegador

Siguiendo estas instrucciones, podrás gestionar la información de los clientes de manera efectiva usando la aplicación.
