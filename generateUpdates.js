var updatesobj = null;
var UPDATES_STARTED = false;

function generateUpdates(){
    // To Do: load the updates here
    document.getElementById("test")
    if (!UPDATES_STARTED) {
        UPDATES_STARTED = true;
        var updatesobj = null;
        parse_json(create_updates_DOM);
    }
}

function parse_json(callback) {
    var httpRequest = new XMLHttpRequest();
    var response = null;
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            response = httpRequest.responseText;
            callback(JSON.parse(response));
        }
    };
    httpRequest.open("GET", "./updates.json", true);
    httpRequest.send();
}

function create_updates_DOM(updatesobj) {
    for (var i = 0; i < updatesobj.updates_count; i++) {
        var panelDiv;
        var headingDiv;
        var a;
        var h4;
        var collapseDiv;
        var ul;

        panelDiv = document.createElement("div");
        panelDiv.setAttribute("class", "panel panel-default")

        headingDiv = document.createElement("div");
        headingDiv.setAttribute("class", "panel-heading");

        h4 = document.createElement("h4");
        h4.setAttribute("class", "panel-title");

        a = document.createElement("a");
        a.setAttribute("data-toggle", "collapse");
        a.setAttribute("data-parent", "#accordion");
        a.setAttribute("href", "#collapse" + parseInt(i));
        a.appendChild(document.createTextNode(updatesobj.updateList[i].title))

        h4.appendChild(a);

        headingDiv.appendChild(h4);

        collapseDiv = document.createElement("div");
        collapseDiv.setAttribute("id", "collapse" + parseInt(i));
        if (i==0)
            collapseDiv.setAttribute("class", "panel-collapse collapse in");
        else
            collapseDiv.setAttribute("class", "panel-collapse collapse");

        ul = document.createElement("ul");
        ul.setAttribute("class", "list-group");

        for (j = 0; j < updatesobj.updateList[i].count; j++) {
            var li = document.createElement("li");
            li.setAttribute("class", "list-group-item");
            li.appendChild(document.createTextNode(updatesobj.updateList[i].updates[j]));
            ul.appendChild(li);
        }

        collapseDiv.appendChild(ul);

        panelDiv.appendChild(headingDiv);
        panelDiv.appendChild(collapseDiv);

        document.getElementById("accordion").appendChild(panelDiv);
    }
    colorAccordion();   // Update the accordion
}

function colorAccordion() {
    var headers = document.getElementsByClassName('panel-heading');
    //console.log(headers.length);
    for (i = 0; i < headers.length; i++)
    {
        headers[i].style.backgroundColor = "#242428";
        headers[i].style.color = "white";
    }
    var items = document.getElementsByClassName('list-group-item');
    for (i = 0; i < items.length; i++)
    {
		items[i].style.backgroundColor = "#b2b2b2";
    }
}