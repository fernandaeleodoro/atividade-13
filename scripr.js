const form = document.getElementById("formLogin");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        mensagem.innerHTML = "<span style='color:red'>Preencha todos os campos!</span>";
    } else {
        mensagem.innerHTML = "<span style='color:green'>Login realizado com sucesso (simulado)</span>";
    }
});