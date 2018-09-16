/**
 * Хранит координаты ячейки
 * @param rowIndex индекс строки
 * @param cellIndex индекс ячейки
 * @constructor
 */
function Point(rowIndex, cellIndex) {
    this.rowIndex = rowIndex;
    this.cellIndex = cellIndex;
}

function changeCoordinate(rowIndex, cellIndex) {
    this.rowIndex = rowIndex;
    this.cellIndex = cellIndex;
}

/**
 * Возвращает рандомное число
 * @param max максимальное возможное рандомное число
 * @returns {number} полученное число
 */
function randomNumber(max) {
    return Math.round((max - 1) * Math.random());
}

/**
 *
 * @returns {Point}
 */
function randomPoint() {
    return new Point(randomNumber(MAX_ROW), randomNumber(MAX_CELL));
}

/**
 * Возвращает рандомную, свободную точку
 * @returns {{rowIndex: number, cellIndex: number}}
 */
function findFreePoint() {
    var result = randomPoint();
    while (isActive(result)) {
        result = randomPoint();
    }
    return result;
}

/**
 * Сравнивает две точки
 * @param point
 * @returns {boolean} возвращает true, если точки эквовалентны, или false в противном случаи
 */
Point.prototype.equals = function (point) {
    if (this.rowIndex == point.rowIndex && this.cellIndex == point.cellIndex) {
        return true;
    }
    return false;
}

/**
 * Изменяет координаты точки
 * @param rowIndex новый индекс строки
 * @param cellIndex новый индекс ячейки
 */
Point.prototype.changeCoordinate = function (rowIndex, cellIndex) {
    this.rowIndex = rowIndex;
    this.cellIndex = cellIndex;
}