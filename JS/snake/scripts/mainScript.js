var navigation = "right";

function main() {
    generateTable();
    var snakeCoordinate = new DoublyList();
    createSnake(snakeCoordinate);
    generateApple();
    var intervalID = setInterval(function () {
        navigation = newNav;
        move(snakeCoordinate);
        if (!check(snakeCoordinate)) {
            alert("Game Over!");
            clearInterval(intervalID);
        }
        snakeCoordinate.drawElements();
    }, 200);
}
