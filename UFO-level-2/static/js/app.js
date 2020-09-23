// from data.js
var tableData = data;

// From Part 1
var tbody = d3.select("tbody");

var i;
for (i = 0; i < tableData.length; i++) {
    var newRow = tbody.append("tr");
    Object.entries(tableData[i]).forEach(([key, value]) => {
        var cell = newRow.append("td");
        cell.text(value);
    });

}

// Part 2 Update
var button = d3.select("#filter-btn");
var dateInputField = document.getElementById("datetime");
var cityInputField = document.getElementById("city");
var stateInputField = document.getElementById("state");
var countryInputField = document.getElementById("country");
var shapeInputField = document.getElementById("shape");

button.on("click", function() {
    d3.selectAll("td").remove();
    var filteredData = tableData.filter(function(row) {
        return row.datetime.includes(dateInputField.value) &&
            row.city.includes(cityInputField.value) &&
            row.state.includes(stateInputField.value) &&
            row.country.includes(countryInputField.value) &&
            row.shape.includes(shapeInputField.value);
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