function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput !== "") {
        addUserMessage(userInput);
        // Aqui você pode adicionar a lógica para processar a mensagem do usuário e obter a resposta do chatbot
        // Por enquanto, vamos apenas simular uma resposta do chatbot
        setTimeout(function() {
            addBotMessage("Bem vindo ao chat bot.");
        }, 500);
        document.getElementById("user-input").value = "";
    }
}

function addUserMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var userMessageElement = document.createElement("div");
    userMessageElement.className = "user-message";
    userMessageElement.textContent = message;
    chatBox.appendChild(userMessageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var botMessageElement = document.createElement("div");
    botMessageElement.className = "bot-message";
    botMessageElement.textContent = message;
    chatBox.appendChild(botMessageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}