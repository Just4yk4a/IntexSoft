/**
 * Хранит точку и адресса на следующий и предыдущий элементы
 * @param point
 * @constructor
 */
function Node(point) {
    this.point = point;
    this.next = null;
    this.previous = null;
}

/**
 * Хранит длину списка, а также его первый и последний элемент.
 * @constructor
 */
function DoublyList() {
    this.length = 0;
    this.head = null;
    this.tail = null;
}

/**
 * Добавляет новый элемент в начало списка
 * @param point
 */
DoublyList.prototype.addToHead = function (point) {
    var node = new Node(point);

    if (this.length == 0) {
        this.head = node;
        this.tail = node;
    }
    else {
        var tempNode = this.head;
        this.head = node;
        this.head.previous = tempNode;
        tempNode.next = this.head;
    }

    this.length++;
}

/**
 * Закрашивает в таблице точки хранящиеся в списке
 */
DoublyList.prototype.drawElements = function () {
    var node = this.head;
    for (index = 0; index < this.length; index++) {
        var cell = getCell(node.point);
        cell.classList.remove(CLASS_FREE_CELL);
        cell.classList.add(CLASS_SNAKE);
        node = node.previous;
    }
}

/**
 * Удаляет последний элемент из списка
 */
DoublyList.prototype.deleteLast = function () {
    var cell = getCell(this.tail.point);
    cell.classList.remove(CLASS_SNAKE);
    cell.classList.add(CLASS_FREE_CELL);
    this.tail = this.tail.next;
    this.tail.previous = null;
    this.length--;
}

/**
 * Проверяет повторяется ли точка головы
 * @param point
 * @returns {boolean}
 */
DoublyList.prototype.haveHeadElement = function () {
    var node = this.head.previous;
    for (var index = 0; index < this.length - 1; index++) {
        if (node.point.equals(this.head.point)) {
            return true;
        }
        node = node.previous;
    }
    return false;
}

