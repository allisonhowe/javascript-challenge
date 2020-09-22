// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

var i;
for (i = 0; i < tableData.length; i++) {
    var newRow = tbody.append("tr");
    Object.entries(tableData[i]).forEach(([key, value]) => {
        var cell = newRow.append("td");
        cell.text(value);
    });

}

var button = d3.select("#filter-btn");
var inputField = document.getElementById("datetime")

button.on("click", function() {
    console.log(inputField.value);
});