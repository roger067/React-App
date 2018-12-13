

$.getJSON("js/data.json", function() {
  
    for(var i=0;i< json.length; i++){
        var html = "<tr>";
        html +="<td>"+json[i].name+"</td>";
        html +="<td>"+json[i].adress+"</td>";
        html +="<td>"+json[i].city+"</td>";
        html +="<td>"+json[i].region+"</td>";
        html +="<td>"+json[i].country+"</td>";
        html +="<td>"+json[i].birthday+"</td>";
        html +="</tr>";
    }
  
    document.getElementById("table-hover").innerHTML = html;
  });