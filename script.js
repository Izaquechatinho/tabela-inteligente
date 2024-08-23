function buscarProduto() {
    // Obtém o valor do input de busca
    const input = document.getElementById("searchInput").value.toLowerCase();
    
    // Obtém as linhas da tabela
    const linhas = document.querySelectorAll("#tabelaProdutos tbody tr");
    
    // Loop em cada linha da tabela
    linhas.forEach(linha => {
        const produto = linha.querySelector("td").textContent.toLowerCase();
        
        // Verifica se o nome do produto contém o valor do input de busca
        if (produto.includes(input)) {
            linha.style.display = ""; // Mostra a linha
        } else {
            linha.style.display = "none"; // Esconde a linha
        }
    });
}
