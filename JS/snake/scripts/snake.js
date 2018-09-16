/**
 * Один шаг змеи:
 * Создается новая точка головы змеи
 * Создается новое яблоко, если координаты головы совпадают с координатами яблока
 * @param snake
 */
function move(snake) {
    var newPoint;
    newPoint = newSnakeElement(snake.head.point);
    snake.addToHead(newPoint);
    manipulationWithApple(snake);
}

/**
 * Создается новое яблоко, если координаты головы совпадают с координатами яблока
 * Удаляет последний элемент в списке, если координаты хвоста совпали с яблоком
 * @param snake
 */
function manipulationWithApple(snake) {
    if (isPointInTable(snake.head.point) && IsApple(snake.head.point)) {
        generateApple();
    }
    if (IsApple(snake.tail.point)) {
        eatApple(snake.tail.point);
    }
    else {
        snake.deleteLast();
    }
}

/**
 * Создает новый элемент змеи возле головы, в зависимости от направления движения.
 * @param point точка нахождения головы.
 * @returns {*}
 */
function newSnakeElement(point) {
    var rowIndex = point.rowIndex;
    var cellIndex = point.cellIndex;
    switch (navigation) {
        case UP: {
            return new Point(rowIndex - 1, cellIndex);
        }
            break;
        case DOWN: {
            return new Point(rowIndex + 1, cellIndex);
        }
            break;
        case RIGHT: {
            return new Point(rowIndex, cellIndex + 1);
        }
            break;
        case LEFT: {
            return new Point(rowIndex, cellIndex - 1);
        }
            break;
    }
}

/**
 * Проверяет число на нраницу от 0 до max.
 * @param number число
 * @param max верхняя граница
 * @returns {boolean}
 */
function isInBound(number, max) {
    return number >= 0 && number < max;
}

/**
 * Проверяет точку на нахождение в пределах таблицы
 * @param point
 * @returns {*}
 */
function isPointInTable(point) {
    return isInBound(point.rowIndex, MAX_ROW) && isInBound(point.cellIndex, MAX_CELL);
}

/**
 * Проверяет, чтобы голова змеи не вышла за границы и не попала на саму себя.
 * @param snakeCoordinate список координат змеи
 * @returns {boolean}
 */
function isGameOver(snakeCoordinate) {
    return snakeCoordinate.haveHeadElement() || !isPointInTable(snakeCoordinate.head.point);
}

/**
 * Проверяет находятся ли яблоко и хвост в одной ячейке
 * @param snake
 * @returns {boolean}
 */
function IsApple(point) {
    var cell = getCell(point);
    return cell.classList.contains(CLASS_APPLE);
}

/**
 * Удаляет из списка классов у ячейки пометку "apple"
 * @param snake ячейка
 */
function eatApple(point) {
    var cell = getCell(point);
    cell.classList.remove(CLASS_APPLE);
}