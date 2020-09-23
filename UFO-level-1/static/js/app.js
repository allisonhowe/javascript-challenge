// from data.js
var tableData = data;

// Rendering table
var tbody = d3.select("tbody");

var i;
for (i = 0; i < tableData.length; i++) {
    var newRow = tbody.append("tr");
    Object.entries(tableData[i]).forEach(([key, value]) => {
        var cell = newRow.append("td");
        cell.text(value);
    });

}

// Filtering data on button click
var button = d3.select("#filter-btn");
var inputField = document.getElementById("datetime")

button.on("click", function() {
    d3.selectAll("td").remove();
    var filteredData = tableData.filter(function(row) {
        return row.datetime.includes(inputField.value);
    })

    var i;
    for (i = 0; i < filteredData.length; i++) {
        var newRow = tbody.append("tr");
        Object.entries(filteredData[i]).forEach(([key, value]) => {
            var cell = newRow.append("td");
            cell.text(value);
        });
    }
});