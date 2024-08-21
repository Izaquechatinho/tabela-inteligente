document.addEventListener('DOMContentLoaded', function() {
    // Funções para manipular a tabela
    // Exemplo: carregando dados fictícios
    const tabela = document.getElementById('tabela');
    tabela.innerHTML = `
        <tr>
            <th>Produto</th>
            <th>Volume de Vendas</th>
            <th>Receita Gerada</th>
            <th>Frequência de Compra</th>
        </tr>
        <tr>
            <td>Abrasivo A</td>
            <td>500 unidades</td>
            <td>R$ 10.000,00</td>
            <td>Mensal</td>
        </tr>
    `;
});
