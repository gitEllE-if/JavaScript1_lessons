'use strict';
// Lesson4_2

/**
 *  координаты и движение игрока
 */
const player = {
    x: 1,
    y: 1,

    /**
     * передвигает игрока в полученную координату
     * @param {{x: int, y: int}} nextPoint 
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
}