// Função para calcular o total da venda
function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}

// Função para aplicar desconto percentual
function aplicarDesconto(total, desconto) {
    return total - (total * desconto / 100);
}

// Função para calcular o imposto sobre as vendas
function calcularImposto(total, taxaImposto) {
    return total * taxaImposto / 100;
}

// Sorteia um premio
function exibirPremio() {
    let premio;
    
    while (true) {
        let numeroAleatorio = 0;

        for (let i = 0; i < 10; i++) {
            numeroAleatorio += Math.floor(Math.random() * 10) + 1; // Gera um número entre 1 e 10
        }

        numeroAleatorio = Math.floor(numeroAleatorio / 10);

        switch (numeroAleatorio) {
            case 1:
                premio = "Você ganhou um chaveiro!";
                break;
            case 2:
                premio = "Você ganhou um Cavalo!";
                break;
            case 3:
                premio = "Você ganhou uma xícara de café!";
                break;
            case 4:
                premio = "Você ganhou um vale-presente de R$ 10,00!";
                break;
            case 5:
                premio = "Você ganhou um Abraço!";
                break;
            case 6:
                premio = "Você ganhou um cupom de desconto de 20%!";
                break;
            case 7:
                premio = "Você ganhou um canivete!";
                break;
            case 8:
                premio = "Você ganhou uma camiseta personalizada!";
                break;
            case 9:
                premio = "Você ganhou um tablet!";
                break;
            case 10:
                premio = "Parabéns! Você ganhou um carro novo!";
                break;
            default:
                premio = "Nenhum prêmio";
        }

        if (premio !== "Nenhum prêmio") {
            break;
        }
    }

    document.getElementById("mensagem").textContent = premio;
}



function calcularVenda() {
    let opcao = document.getElementById("produto").value;
    let preco = parseFloat(document.getElementById("precoUnitario").value);
    let quantidade = parseInt(document.getElementById("quantidade").value);

    let total = calcularTotal(preco, quantidade);
    let desconto, imposto;

    switch (parseInt(opcao)) {
        case 1:
            desconto = 10; // 10% de desconto para laptops
            break;
        case 2:
            desconto = 5; // 5% de desconto para smartphones
            break;
        default:
            desconto = 0; // Sem desconto para outros produtos
    }

    total = aplicarDesconto(total, desconto);
    imposto = calcularImposto(total, 7); // Imposto de 7%

    document.getElementById("desconto").textContent =  desconto.toFixed(2) + "%";
    document.getElementById("resultadoTotal").textContent = "R$ " + total.toFixed(2);
    document.getElementById("resultadoImposto").textContent = "R$ " + imposto.toFixed(2);

    if (total > 999) {

        exibirPremio();


        
    } else {
        document.getElementById("mensagem").textContent = "Obrigado por sua compra.";
    }
}
