/**
 * Задает первоначальные координаты змейки
 * @param snake
 */
function createSnake(snake) {
    for (var index = 0; index < 3; index++) {
        var point = new Point(0, index);
        snake.addToHead(point);
    }
}