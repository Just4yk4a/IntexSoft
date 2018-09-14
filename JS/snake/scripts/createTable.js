function generateTable() {
    var parent = document.createElement('div');
    parent.className = "table";
    for (indexI = 0; indexI < 10; indexI++) {
        var d = document.createElement('div');
        d.classList.add("row", "row" + indexI);
        for (indexJ = 0; indexJ < 10; indexJ++) {
            var e = document.createElement('div');
            e.classList.add("column", "col" + indexJ, "noactive");
            d.appendChild(e);
        }
        parent.appendChild(d);
    }
    document.body.appendChild(parent);
}