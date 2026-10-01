
const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");
const messagesContainer = document.getElementById("messages");
const newChatButton = document.getElementById("new-chat");

// Agrega un mensaje a la conversación
function addMessage(text, sender) {
    // Si todavía está visible la bienvenida, la quitamos
    const welcome = messagesContainer.querySelector(".welcome");

    if (welcome) {
        welcome.remove();
    }

    const message = document.createElement("div");

    message.classList.add("message", sender);
    message.textContent = text;

    messagesContainer.appendChild(message);

    // Desplaza el chat hasta el último mensaje
    messagesContainer.scrollTop =
        messagesContainer.scrollHeight;
}

// Envío del formulario
chatForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = messageInput.value.trim();

    if (!text) return;

    addMessage(text, "user");

    messageInput.value = "";
    messageInput.focus();
});

// Crear una nueva conversación visual
newChatButton.addEventListener("click", () => {
    messagesContainer.innerHTML = `
        <div class="welcome">
            <div class="welcome-icon">✦</div>
            <h2>¿En qué puedo ayudarte?</h2>
            <p>
                Escribí tu pregunta y comencemos
                una conversación.
            </p>
        </div>
    `;

    messageInput.focus();
});