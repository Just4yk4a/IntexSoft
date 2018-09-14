function move(snakeCoordinate) {
    var node = snakeCoordinate.head;
    row = node.row;
    col = node.column;
    switch (navigation) {
        case "up": {
            newRow = "row" + (Number.parseInt(row.substring(3)) - 1);
            newCol = "col" + (Number.parseInt(col.substring(3)));
        }
            break;
        case "down": {
            newRow = "row" + (Number.parseInt(row.substring(3)) + 1);
            newCol = "col" + (Number.parseInt(col.substring(3)));
        }
            break;
        case "right": {
            newRow = "row" + (Number.parseInt(row.substring(3)));
            newCol = "col" + (Number.parseInt(col.substring(3)) + 1);
        }
            break;
        case "left": {
            newRow = "row" + (Number.parseInt(row.substring(3)));
            newCol = "col" + (Number.parseInt(col.substring(3)) - 1);
        }
            break;
    }
    snakeCoordinate.addToHead(newRow, newCol);
    if (check(snakeCoordinate) && headIsApple(snakeCoordinate)) {
        generateApple();
    }
    if (!tailIsApple(snakeCoordinate)) {
        snakeCoordinate.deleteLast();
    }
}


function check(snakeCoordinate) {
    number = Number.parseInt(snakeCoordinate.head.row.substring(3));
    if (number < 0 || number > 9) {
        return false;
    }
    number = Number.parseInt(snakeCoordinate.head.column.substring(3));
    if (number < 0 || number > 9) {
        return false;
    }
    if (snakeCoordinate.haveElement(snakeCoordinate.head)) {
        return false;
    }
    return true;
}

function headIsApple(snake) {
    var parent = document.getElementsByClassName(snake.head.row);
    var div = parent[0].getElementsByClassName(snake.head.column);
    if (div[0].classList.contains("apple")) {
        return true;
    }
    return false;
}

function tailIsApple(snake) {
    var parent = document.getElementsByClassName(snake.tail.row);
    var div = parent[0].getElementsByClassName(snake.tail.column);
    if (div[0].classList.contains("apple")) {
        div[0].classList.remove("apple");
        return true;
    }
    return false;
}

function eatApple(snake) {
    var parent = document.getElementsByClassName(snake.tail.row);
    var div = parent[0].getElementsByClassName(snake.tail.column);
    div[0].classList.remove("apple");
    alert(div[0].classList.contains("applle"));
}