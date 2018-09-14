var newNav = "right";

document.onkeydown = function pressButton(event) {
    switch (event.key) {
        case "ArrowUp": {
                nav = "up";
        }
            break;
        case "ArrowDown": {
                nav = "down";
        }
            break;
        case "ArrowLeft": {
                nav = "left";
        }
            break;
        case "ArrowRight": {
                nav = "right";
        }
            break;
    }

    switch (navigation) {
        case "up": {
            if (nav!="down") newNav=nav;
        }
            break;
        case "down": {
            if (nav!="up") newNav=nav;
        }
            break;
        case "left": {
            if (nav!="right") newNav=nav;
        }
            break;
        case "right": {
            if (nav!="left") newNav=nav;
        }
            break;
    }
}