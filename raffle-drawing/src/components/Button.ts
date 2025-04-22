class Button {
    constructor(private text: string, private onClick: () => void) {}

    render(): HTMLButtonElement {
        const button = document.createElement('button');
        button.textContent = this.text;
        button.addEventListener('click', this.onClick);
        return button;
    }
}

export default Button;