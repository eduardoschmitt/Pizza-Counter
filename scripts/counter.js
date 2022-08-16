let contador = 0;

const valor = document.querySelector("#id-valor");
const botoes = document.querySelectorAll(".botao");
const sms = document.querySelector("#id-mensagem")

botoes.forEach(function (botao) {
    botao.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("diminuir")) {
            contador--;
        } else if (styles.contains("aumentar")){
            contador++;
        } else {
            contador = 0;
        }

        /* MENSAGENS */ 

        if (contador > 50) {
            sms.textContent = "Você provavelmente morreu."
        } else if (contador > 40) {
            sms.textContent = "Chega cara, tu já ta no lucro, não precisa mais"
        } else if (contador > 30) {
            sms.textContent = "A fatia desse local é muito pequena?"
        } else if (contador > 25) {
            sms.textContent = "Pra onde vai tudo isso?"
        } else if (contador > 20) {
            sms.textContent = "Parabéns, você fez valer o preço"
        } else if (contador > 15) {
            sms.textContent = "Vamos, mais um poquinho cabe"
        } else if (contador > 10) {
            sms.textContent = "Esse é o mínimo que você deveria comer"
        } else if (contador > 5) {
            sms.textContent = "Vamos comer que você não ta nem no começo"
        } else if (contador > 2) {
            sms.textContent = "Mastiga bem"
        } else if (contador >= 1) {
            sms.textContent = "Um pequeno passo para o homem"
        } else if (contador == 0) {
            sms.textContent = "Ué? Você é maluco"
        } else {
            sms.textContent = "Hum... Deve ser pizza sabor antimatéria"
        }

        valor.textContent = contador;
    });
});