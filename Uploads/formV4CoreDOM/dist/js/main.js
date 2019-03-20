document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener('submit', function (event) {
        event.preventDefault();
        let form = document.getElementsByTagName("form");
        let form_elements = form[0].elements;
        //console.log(form_elements);
        let data = [];
        let select_items = [];
        let flag=true;
        let select = form_elements[4];
        console.log(select);

        for (i = 0; i < form_elements.length; i++) {
            if (form_elements[i].type == "text") {
                data.push(form_elements[i].value);
            } else if (form_elements[i].checked) {
                data.push(form_elements[i].value);
            } else if (form_elements[i].type == "select-multiple") {
                for (j = 0; j < select.option.length; j++) {
                    if (select.options[j].selected == true) {
                        select_items.push(select.options[j].value);
                    }
                }
            }
        }

        console.log(data);
        console.log(select_items);

        var table = document.getElementsByTagName("tbody")[0];
        var rows_data = document.getElementsByTagName("table")[0].rows;
        console.log(table);
        console.log(rows_data);

        function Retrievetable(){
            var a = document.createElement("TR");
            data.forEach(element => {
                
                var b = document.createElement("TD");
                var c = document.createTextNode(element);
                a.appendChild(b);
                b.appendChild(c);
            });

            select_items.forEach(element => {
                var b = document.createElement("TD");
                var c = document.createTextNode(element);
                a.appendChild(b);
                b.appendChild(c);
            });
            table.appendChild(a);
        }

        if(rows_data.length==1){
            Retrievetable();
        }else{

            for (i = 1; i < rows_data.length; i++) {
                console.log(rows_data);
                cell_content = rows_data[i].cells[1].textContent;
                console.log(cell_content);
                console.log(data[1]);
                if (data[1] == cell_content) {
                    alert("Entry Already Present!!!"+data[1]+"---"+cell_content);
                    flag=true;
                    break;
                } else {
                    flag=false;
                }
            }

            if(!flag){
                Retrievetable();
            }
        }


    });
});