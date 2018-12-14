

$.getJSON("js/data.json", function(data) {
  
    var items= [];
    $.each(data, function(name, adress, city, region, country, birthday){
        items.push("<td id ='"+ name +"'></td> <td id ='"+ adress +"'></td> <td id ='"+ city +"'></td> <td id ='"+ region +"'></td> <td id ='"+ country +"'></td> <td id ='"+ birthday +"'></td>");
        
        $("<tr/>",{
            html: items.join("")
        }).appendTo("tbody");
        });
    
    });
    /*for(var i=0;i< json.length; i++){
        var html = "<tr>";
        html +="<td>"+json[i].name+"</td>";
        html +="<td>"+json[i].adress+"</td>";
        html +="<td>"+json[i].city+"</td>";
        html +="<td>"+json[i].region+"</td>";
        html +="<td>"+json[i].country+"</td>";
        html +="<td>"+json[i].birthday+"</td>";
        html +="</tr>";
    }
  
    document.getElementById("table-hover").innerHTML = html;*/