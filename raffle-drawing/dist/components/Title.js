"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Title {
    constructor(text) {
        this.text = text;
    }
    render() {
        const titleElement = document.createElement('h1');
        titleElement.textContent = this.text;
        return titleElement;
    }
}
exports.default = Title;
