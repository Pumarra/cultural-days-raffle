class Title {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    render(): HTMLElement {
        const titleElement = document.createElement('h1');
        titleElement.textContent = this.text;
        return titleElement;
    }
}

export default Title;