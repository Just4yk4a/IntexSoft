function generateApple() {
    do {
        row = Math.round(9 * Math.random());
        column = Math.round(9 * Math.random());
    } while(isActive(row, column));
    var parent = document.getElementsByClassName("row"+row);
    var div = parent[0].getElementsByClassName("col"+column);
    div[0].classList.remove("noactive");
    div[0].classList.add("apple");
}

function isActive(row, column) {
    var parent = document.getElementsByClassName("row"+row);
    var div = parent[0].getElementsByClassName("col"+column);
    if( div[0].classList.contains("active")){
        return true;
    }
    return false;
}