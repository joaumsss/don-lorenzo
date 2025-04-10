function enviarPedido() {
    const selecionados = document.querySelectorAll('input[type=checkbox]:checked');
    if (selecionados.length === 0) {
        alert('Selecione pelo menos 1 item para fazer o pedido.');
        return;
    }

    let mensagem = "Olá, abaixo segue o meu pedido:%0A";
    selecionados.forEach(item => {
        mensagem += "- " + item.value + "%0A";
    });

    const telefone = "5551996179364"; // Número WhatsApp
    const url = `https://wa.me/${telefone}?text=${mensagem}`;

    window.open(url, '_blank');
}
