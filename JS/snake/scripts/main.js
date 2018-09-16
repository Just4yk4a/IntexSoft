/**
 * Главная функция
 */
function main() {
    generateTable();
    var snakeCoordinate = new DoublyList();
    createSnake(snakeCoordinate);
    snakeCoordinate.drawElements();
    generateApple();
    movement(snakeCoordinate);
}

/**
 * Реализовывает изменение координат змеи, яюлока каждые timeInterval
 * @param snakeCoordinate
 */
function movement(snakeCoordinate) {
    var intervalID = setInterval(function () {
        navigation = newNav;
        move(snakeCoordinate);
        if (isGameOver(snakeCoordinate)) {
            alert("Game Over!");
            clearInterval(intervalID);
        }
        snakeCoordinate.drawElements();
    }, timeInterval);
}