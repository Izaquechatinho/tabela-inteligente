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
    };
    // Filtro por intervalo de Receita Gerada
document.getElementById('minRevenue').addEventListener('input', filterByRevenue);
document.getElementById('maxRevenue').addEventListener('input', filterByRevenue);

function filterByRevenue() {
    let minRevenue = parseFloat(document.getElementById('minRevenue').value) || 0;
    let maxRevenue = parseFloat(document.getElementById('maxRevenue').value) || Number.MAX_VALUE;
    let rows = document.querySelector("#productTable tbody").rows;
    
    for (let i = 0; i < rows.length; i++) {
        let revenue = parseFloat(rows[i].cells[2].textContent.replace('R$', '').replace(',', ''));
        if (revenue >= minRevenue && revenue <= maxRevenue) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
// 2 Paginação
 let currentPage = 1;
let rowsPerPage = 10;

function displayTablePage(page) {
    let rows = document.querySelector("#productTable tbody").rows;
    let totalRows = rows.length;
    let start = (page - 1) * rowsPerPage;
    let end = Math.min(start + rowsPerPage, totalRows);
    
    for (let i = 0; i < totalRows; i++) {
        rows[i].style.display = (i >= start && i < end) ? "" : "none";
    }
}

function setupPagination() {
    let rows = document.querySelector("#productTable tbody").rows;
    let totalRows = rows.length;
    let totalPages = Math.ceil(totalRows / rowsPerPage);

    let pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        let btn = document.createElement("button");
        btn.textContent = i;
        btn.addEventListener('click', function() {
            currentPage = i;
            displayTablePage(currentPage);
        });
        pagination.appendChild(btn);
    }
}

// Inicialize a paginação
setupPagination();
displayTablePage(currentPage);

}

}
