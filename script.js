document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const hero = document.getElementById("hero");

    window.addEventListener("scroll", () => {
        const heroBottom = hero.getBoundingClientRect().bottom;

        if (heroBottom <= 0) {
            header.classList.add("visible");
        } else {
            header.classList.remove("visible");
        }
    });
});

let selectedOption = "";

function selectOption(button, text) {
  selectedOption = text;

  // Remove destaque de todos os botões
  document.querySelectorAll(".options button").forEach(btn => {
    btn.classList.remove("selected");
  });

  // Destaca o botão clicado
  button.classList.add("selected");

  // Adiciona a mensagem no chat (sem duplicar se já existe)
  const lastMessage = chatBody.lastElementChild;
  if (!lastMessage || lastMessage.textContent !== text) {
    const msg = document.createElement("div");
    msg.className = "message user";
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

function sendMessage() {
  if (!selectedOption) return;

  const phone = "14998170907"; // Substitua pelo número do admin
  const message = encodeURIComponent(selectedOption);
  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank");
}


function toggleChat() {
    chatbox.style.display = chatbox.style.display === "flex" ? "none" : "flex";
  }