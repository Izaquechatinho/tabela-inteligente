// Função de busca
document.getElementById('search').addEventListener('input', function () {
    let input = this.value.toLowerCase();
    let rows = document.querySelector("#productTable tbody").rows;
    
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].cells;
        let match = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(input)) {
                match = true;
                break;
            }
        }

        rows[i].style.display = match ? "" : "none";
    }
});

// Função de ordenação
function sortTable(n) {
    let table = document.getElementById("productTable");
    let rows = table.rows;
    let switching = true;
    let shouldSwitch, i;
    let dir = "asc";
    let switchCount = 0;

    while (switching) {
        switching = false;
        let rowsArray = Array.from(rows).slice(1); // Ignora o cabeçalho

        for (i = 0; i < (rowsArray.length - 1); i++) {
            shouldSwitch = false;
            let x = rowsArray[i].getElementsByTagName("TD")[n];
            let y = rowsArray[i + 1].getElementsByTagName("TD")[n];

            if (dir === "asc" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() ||
                dir === "desc" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rowsArray[i].parentNode.insertBefore(rowsArray[i + 1], rowsArray[i]);
            switching = true;
            switchCount++;
        } else if (switchCount === 0 && dir === "asc") {
            dir = "desc";
            switching = true;
        }
    }
}

// Função de filtro por Receita Gerada
document.getElementById('minRevenue').addEventListener('input', filterByRevenue);
document.getElementById('maxRevenue').addEventListener('input', filterByRevenue);

function filterByRevenue() {
    let minRevenue = parseFloat(document.getElementById('minRevenue').value) || 0;
    let maxRevenue = parseFloat(document.getElementById('maxRevenue').value) || Number.MAX_VALUE;
    let rows = document.querySelector("#productTable tbody").rows;
    
    for (let i = 0; i < rows.length; i++) {
        let revenue = parseFloat(rows[i].cells[2].textContent.replace('R$', '').replace(',', ''));
        rows[i].style.display = (revenue >= minRevenue && revenue <= maxRevenue) ? "" : "none";
    }
}

// Função de exportação para CSV
function exportTableToCSV(filename) {
    let csv = [];
    let rows = document.querySelectorAll("table tr");

    for (let i = 0; i < rows.length; i++) {
        let row = [], cols = rows[i].querySelectorAll("td, th");

        for (let j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

        csv.push(row.join(","));
    }

    let csvContent = "data:text/csv;charset=utf-8," + csv.join("\n");
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);

    link.click();
}
