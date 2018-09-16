/**
 * Реагирует на нажатие клавиш и при необходимости меняет направление.
 * Направление не меняется на противоположное текущему движению змейки.
 * @param event
 */
document.onkeydown = function pressButton(event) {
    var nav;
    switch (event.key) {
        case BUTTON_UP: {
            nav = UP;
        }
            break;
        case BUTTON_DOWN: {
            nav = DOWN;
        }
            break;
        case BUTTON_LEFT: {
            nav = LEFT;
        }
            break;
        case BUTTON_RIGHT: {
            nav = RIGHT;
        }
            break;
        default: {
            nav = newNav;
        }

    }
    checkNavigation(nav);
}

/**
 *  Проверяет новое напрвление с текущим направлением(они не должны быть противоположными).
 *  Если они не противоположны, то обновиться newNav, отвечающая за направление при следующем шаге.
 * @param nav
 */
function checkNavigation(nav) {
    switch (navigation) {
        case UP: {
            if (nav != DOWN) newNav = nav;
        }
            break;
        case DOWN: {
            if (nav != UP) newNav = nav;
        }
            break;
        case LEFT: {
            if (nav != RIGHT) newNav = nav;
        }
            break;
        case RIGHT: {
            if (nav != LEFT) newNav = nav;
        }
            break;
    }
}
