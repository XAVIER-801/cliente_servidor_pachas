document.addEventListener("DOMContentLoaded", () => {
    const conn = new WebSocket('ws://localhost:8080');
    const chat = document.getElementById('chat');
    const sendButton = document.getElementById('send');
    const messageInput = document.getElementById('message');

    // Conexión abierta
    conn.onopen = function () {
        addMessage('Conexión establecida', 'received');
    };

    // Mensaje recibido desde el servidor
    conn.onmessage = function (e) {
        addMessage(e.data, 'received');
    };

    // Enviar mensaje al hacer clic
    sendButton.onclick = function () {
        const msg = messageInput.value.trim();
        if (msg) {
            addMessage(msg, 'sent');
            conn.send(msg);
            messageInput.value = '';
        }
    };

    // Enviar mensaje al presionar Enter
    messageInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });

    // Función para agregar mensajes al chat
    function addMessage(content, type) {
        const message = document.createElement('div');
        message.classList.add('message', type);
        message.textContent = content;
        chat.appendChild(message);
        chat.scrollTop = chat.scrollHeight;
    }
});


