"use strict";
// This file serves as the entry point of the application. It initializes the application, sets up the DOM elements, and handles any necessary event listeners.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Title_1 = __importDefault(require("./components/Title"));
const Button_1 = __importDefault(require("./components/Button"));
const app = document.getElementById('app');
if (app) {
    const title = new Title_1.default('Raffle Drawing');
    const button = new Button_1.default('Draw a Winner', () => {
        alert('Winner has been drawn!');
    });
    app.appendChild(title.render());
    // Removed redundant onClick assignment as it is now passed in the constructor
    alert('Winner has been drawn!');
}
