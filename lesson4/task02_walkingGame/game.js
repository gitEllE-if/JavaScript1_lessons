'use strict';
// Lesson4_2

let game = {

    gameIntervalID: null,

    /**
     * запуск игры
     */
    run() {
        alert("Выйди из лабиринта 😈\nУправление: ⬅⬆⬇ или цифры\nВыход: ESC");
        game.gameIntervalID = setInterval(game.cycle, 800);
    },

    /**
     * одна итерация цикла игры
     */
    cycle() {
        if (mover.direction == 9 || (player.x == config.end.x && player.y == config.end.y)) {
            clearInterval(game.gameIntervalID);
            alert("игра окончена 😈");
        }
        const nextPoint = mover.getNextPosition();
        renderer.clear();
        player.move(nextPoint);
        renderer.render();
    },

    /**
     * инициализация при открытии страницы
     */
    init() {
        window.addEventListener("keydown", mover);
        console.log("ВЫЙДИ ИЗ ЛАБИРИНТА | управление: ⬅⬆⬇ или цифры | выход: ESC");
        renderer.render();
        console.log("Чтобы начать игру, набери game.run() и нажми Enter");
    }
};

game.init();