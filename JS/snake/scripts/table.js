/**
 * Создает таблицу и помещает ее в body
 */
function generateTable() {
    var container = createContainer();
    for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
        var row = createRow(container, rowIndex);
        for (var cellIndex = 0; cellIndex < MAX_CELL; cellIndex++) {
            createCell(row, cellIndex);
        }
    }
}

/**
 * Создает контейнер, помещает его в body и возвращает созданный контейнер
 * @returns {HTMLDivElement}
 */
function createContainer() {
    var container = document.createElement(DIV);
    document.body.appendChild(container);
    container.className = CLASS_TABLE;
    return container;
}

/**
 * Создает строку и возвращает ее
 * @param container блок в котором создается строка
 * @returns {HTMLDivElement}
 */
function createRow(container, rowIndex) {
    var row = document.createElement(DIV);
    row.classList.add(CLASS_ROW, CLASS_ROW + rowIndex);
    row.style.height = (100 / MAX_ROW) + "%";
    container.appendChild(row);
    return row;
}

/**
 * Создает ячеку внутри строки
 * @param row строка, в которую будет помещаться ячейка
 */
function createCell(row, cellIndex) {
    var cell = document.createElement(DIV);
    cell.classList.add(CLASS_CELL, CLASS_CELL + cellIndex, CLASS_FREE_CELL);
    cell.style.width = (100 / MAX_CELL) + "%";
    row.appendChild(cell);
}

/**
 * Возвращает ячейку с указанными координатами
 * @param point координаты ячейки
 * @returns {Node}
 */
function getCell(point) {
    var row = document.getElementsByClassName(CLASS_ROW + point.rowIndex)[0];
    var cell = row.getElementsByClassName(CLASS_CELL + point.cellIndex)[0];
    return cell;
}

/**
 * Ищет свободную ячейку и возвращает ее
 * @returns {Node} Возвращает свободную ячейку
 */
function findFreeCell() {
    return getCell(findFreePoint());
}

/**
 * Проверяет, является ли ячейка занятой
 * @param point Координаты ячейки
 * @returns {boolean} возващает true, если ячейка-занята, или false, если - свободна.
 */
function isActive(point) {
    return getCell(point).classList.contains(CLASS_SNAKE);
}
