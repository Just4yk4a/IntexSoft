/**
 * Создает яблоко на поле
 */
function generateApple() {
    var cell = findFreeCell();
    cell.classList.remove(CLASS_FREE_CELL);
    cell.classList.add(CLASS_APPLE);
}

