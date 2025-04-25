// This file serves as the entry point of the application. It initializes the application, sets up the DOM elements, and handles any necessary event listeners.

import Title from './components/Title';
import Button from './components/Button';

const app = document.getElementById('app');

if (app) {
    const title = new Title('Raffle Drawing');
    const button = new Button('Draw a Winner', () => {
        alert('Winner has been drawn!');
    });

    app.appendChild(title.render());
    // Removed redundant onClick assignment as it is now passed in the constructor
        alert('Winner has been drawn!');
    }