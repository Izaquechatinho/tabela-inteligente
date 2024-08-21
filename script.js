// Função de busca
document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let rows = document.querySelector("#productTable tbody").rows;
    
    for (let i = 0; i < rows.length; i++) {
        let cell = rows[i].cells[0];
        if (cell.textContent.toLowerCase().indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});

// Função de filtro por Margem de Lucro
document.getElementById('filterProfitMargin').addEventListener('change', function() {
    let filter = this.value;
    let rows = document.querySelector("#productTable tbody").rows;
    
    for (let i = 0; i < rows.length; i++) {
        let profitMargin = rows[i].cells[4].textContent;
        if (filter === "" || profitMargin === filter) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});

// Função de ordenação
function sortTable(n) {
    let table = document.getElementById("productTable");
    let rows = table.rows;
    let switching = true;
    let dir = "asc"; 
    let switchCount = 0;

    while (switching) {
        switching = false;
        for (let i = 1; i < rows.length - 1; i++) {
            let shouldSwitch = false;
            let x = rows[i].getElementsByTagName("TD")[n];
            let y = rows[i + 1].getElementsByTagName("TD")[n];
            if ((dir == "asc" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) ||
                (dir == "desc" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount++;
        } else if (switchCount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
    }
}
