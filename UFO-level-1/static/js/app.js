// from data.js
var tableData = data;

// YOUR CODE HERE!
var tableBodyElement = document.getElementById("ufo-table").getElementsByTagName("tbody")[0];

var i;
for (i = 0; i < tableData.length; i++) {
    var newRow = tableBodyElement.insertRow();
    newRow.innerHTML = `<tr>
        <td>${tableData[i].datetime}</td>
        <td>${tableData[i].city}</td>
        <td>${tableData[i].state}</td>
        <td>${tableData[i].country}</td>
        <td>${tableData[i].shape}</td>
        <td>${tableData[i].durationMinutes}</td>
        <td>${tableData[i].comments}</td>
    </tr>`;
}

