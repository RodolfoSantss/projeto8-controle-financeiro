let moneyValue = parseFloat(prompt('Digite seu dinheiro inicial:'))

for (let next = true; next;) {
    const opcao = prompt(`Saldo atual: R$${moneyValue.toFixed(2)}
Digite:
1. Caso queira adicionar dinheiro.
2. Caso queira retirar dinheiro.
3. Caso deseje sair.`);

    switch (opcao) {
        case '1':
            const valorAdicionar = parseFloat(prompt("Digite a quantidade a ser adicionada:"))
            if (isNaN(valorAdicionar) || valorAdicionar <= 0) {
                alert("Valor inválido. A quantidade a ser adicionada deve ser um número positivo.")
            } else {
                moneyValue += valorAdicionar
            }
            break
        case '2':
            const valorRemover = parseFloat(prompt("Digite a quantidade a ser removida:"))
            if (isNaN(valorRemover) || valorRemover <= 0) {
                alert("Valor inválido. A quantidade a ser removida deve ser um número positivo.")
            } else if (valorRemover > moneyValue) {
                alert("Saldo insuficiente. Não é possível remover mais dinheiro do que o disponível.")
            } else {
                moneyValue -= valorRemover
            }
            break
        case '3':
            alert("Programa encerrado.")
            next = false
            break
        default:
            alert("Opção inválida. Por favor, escolha uma opção válida.")
            break
    }
}
