"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Button {
    constructor(text, onClick) {
        this.text = text;
        this.onClick = onClick;
    }
    render() {
        const button = document.createElement('button');
        button.textContent = this.text;
        button.addEventListener('click', this.onClick);
        return button;
    }
}
exports.default = Button;
