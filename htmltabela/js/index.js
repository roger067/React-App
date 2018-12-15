$.getJSON("js/data.json", function(data) {
    var html = "<tr>";
    for (var i = 0; i < data.length; i++) {
        html += "<td>" + data[i].name + "</td>";
        html += "<td>" + data[i].address + "</td>";
        html += "<td>" + data[i].city + "</td>";
        html += "<td>" + data[i].region + "</td>";
        html += "<td>" + data[i].country + "</td>";
        html += "<td>" + data[i].birthday + "</td>";
        html += "</tr>";
    }
    document.getElementById('table-js').innerHTML = html;
});