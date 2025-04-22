declare class Button {
    private text;
    private onClick;
    constructor(text: string, onClick: () => void);
    render(): HTMLButtonElement;
}
export default Button;
