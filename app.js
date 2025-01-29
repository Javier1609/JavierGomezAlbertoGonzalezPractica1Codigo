document.addEventListener('DOMContentLoaded', () => {
    const clientForm = document.getElementById('client-form');
    const clientTable = document.getElementById('client-table').getElementsByTagName('tbody')[0];
    const editModal = document.getElementById('edit-modal');
    const editForm = document.getElementById('edit-form');
    const closeModal = document.getElementsByClassName('close')[0];
    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    let editClientId = null;

    // Maneja el envío del formulario para añadir un nuevo cliente
    clientForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phoneExtension = document.getElementById('phone-extension').value;
        const phone = document.getElementById('phone').value.trim();

        // Validación de campos obligatorios
        if (!name || !email || !phone) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        // Validación del formato del email
        if (!validateEmail(email)) {
            alert('El formato del email no es válido.');
            return;
        }

        // Validación de que el teléfono solo contenga números
        if (!validatePhone(phone)) {
            alert('El teléfono solo puede contener números.');
            return;
        }

        // Verificación de unicidad del email
        if (clients.some(client => client.email === email)) {
            alert('El email ya está registrado.');
            return;
        }

        // Creación de un nuevo cliente
        const client = {
            id: Date.now(),
            name,
            email,
            phone: `${phoneExtension} ${phone}`
        };

        // Añadir el cliente a la lista y guardarlo en localStorage
        clients.push(client);
        localStorage.setItem('clients', JSON.stringify(clients));
        renderTable();
        clientForm.reset();
    });

    // Maneja los clics en la tabla de clientes para editar o eliminar
    clientTable.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {
            editClientId = e.target.dataset.id;
            const client = clients.find(client => client.id == editClientId);
            document.getElementById('edit-name').value = client.name;
            document.getElementById('edit-email').value = client.email;
            const [extension, phone] = client.phone.split(' ');
            document.getElementById('edit-phone-extension').value = extension;
            document.getElementById('edit-phone').value = phone;
            editModal.style.display = 'block';
        } else if (e.target.classList.contains('delete')) {
            const id = e.target.dataset.id;
            clients = clients.filter(client => client.id != id);
            localStorage.setItem('clients', JSON.stringify(clients));
            renderTable();
        }
    });

    // Maneja el envío del formulario de edición
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('edit-name').value.trim();
        const email = document.getElementById('edit-email').value.trim();
        const phoneExtension = document.getElementById('edit-phone-extension').value;
        const phone = document.getElementById('edit-phone').value.trim();

        // Validación de campos obligatorios
        if (!name || !email || !phone) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        // Validación del formato del email
        if (!validateEmail(email)) {
            alert('El formato del email no es válido.');
            return;
        }

        // Validación de que el teléfono solo contenga números
        if (!validatePhone(phone)) {
            alert('El teléfono solo puede contener números.');
            return;
        }

        // Verificación de unicidad del email
        if (clients.some(client => client.email === email && client.id != editClientId)) {
            alert('El email ya está registrado.');
            return;
        }

        // Actualización de los datos del cliente
        const client = clients.find(client => client.id == editClientId);
        client.name = name;
        client.email = email;
        client.phone = `${phoneExtension} ${phone}`;

        localStorage.setItem('clients', JSON.stringify(clients));
        renderTable();
        editModal.style.display = 'none';
    });

    // Cierra el modal de edición
    closeModal.onclick = () => {
        editModal.style.display = 'none';
    };

    // Cierra el modal de edición si se hace clic fuera de él
    window.onclick = (event) => {
        if (event.target == editModal) {
            editModal.style.display = 'none';
        }
    };

    // Renderiza la tabla de clientes
    function renderTable() {
        clientTable.innerHTML = '';
        clients.forEach(client => {
            const row = clientTable.insertRow();
            row.innerHTML = `
                <td>${client.id}</td>
                <td>${client.name}</td>
                <td>${client.email}</td>
                <td>${client.phone}</td>
                <td>
                    <button class="edit" data-id="${client.id}">Editar</button>
                    <button class="delete" data-id="${client.id}">Eliminar</button>
                </td>
            `;
        });
    }

    // Valida el formato del email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Valida que el teléfono solo contenga números
    function validatePhone(phone) {
        const re = /^\d+$/;
        return re.test(phone);
    }

    // Inicializa la tabla de clientes
    renderTable();
});