'use strict';
// Lesson4_2

/**
 *  получает и возвращает напрвление от пользователя
 */
let mover = {
    direction: 0,

    /**
     * обработчик событий клавиатуры
     */
    handleEvent(event) {
        switch (event.key) {
            case "8":
            case "ArrowUp":
                mover.direction = UP;
                break;
            case "2":
            case "ArrowDown":
                mover.direction = DOWN;
                break;
            case "4":
            case "ArrowLeft":
                mover.direction = LEFT;
                break;
            case "6":
            case "ArrowRight":
                mover.direction = RIGHT;
                break;
            case "1":
                mover.direction = DW_LEFT;
                break;
            case "3":
                mover.direction = DW_RIGHT;
                break;
            case "7":
                mover.direction = UP_LEFT;
                break;
            case "9":
                mover.direction = UP_RIGHT;
                break;
            case "Escape":
                mover.direction = ESC;
        }
    },

    /**
     * на основе введенного пользователем напрвления движения
     * выдает следующую координату
     * @returns {{int: x, int: y}}
     */
    getNextPosition() {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (mover.direction) {
            case 0:
                return nextPosition;
            case UP:
                nextPosition.y--;
                break;
            case DOWN:
                nextPosition.y++;
                break;
            case LEFT:
                nextPosition.x--;
                break;
            case RIGHT:
                nextPosition.x++;
                break;
            case UP_LEFT:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case UP_RIGHT:
                nextPosition.y--;
                nextPosition.x++;
                break;
            case DW_LEFT:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case DW_RIGHT:
                nextPosition.y++;
                nextPosition.x++;
        }
        mover.direction = 0;
        return mover.checkPosition(nextPosition);
    },

    /**
     * проверяет новую координату, в случае коллизий возвращает старое значение
     * @param {{int: x, int: y}} pos 
     * @returns {{int: x, int: y}}
     */
    checkPosition(pos) {
        if (pos.x >= config.colCount || pos.x < 0) {
            pos.x = player.x;
        }
        if (pos.y >= config.rowCount || pos.y < 0) {
            pos.y = player.y;
        }
        if (config.scheme[pos.x + pos.y * config.rowCount] == 1) {
            pos.x = player.x;
            pos.y = player.y;
        }
        return pos;
    }
}
