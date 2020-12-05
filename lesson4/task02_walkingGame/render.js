'use strict';
// Lesson4_2

let renderer = {
    map: "",

    /**
     * отображает игровое поле в консоли
     */
    render() {
        for (let row = 0; row < config.rowCount; row++) {
            for (let col = 0; col < config.colCount; col++) {
                if (row === player.y && col === player.x) {
                    this.map += "😈";
                } else if (config.scheme[col + row * config.rowCount] === 1) {
                    this.map += "🌑";
                } else
                    this.map += "🌕";
            }
            this.map += "\n";
        }
        console.log("%c" + this.map, config.fontSize);
    },

    clear() {
        console.clear();
        this.map = "";
    }
};