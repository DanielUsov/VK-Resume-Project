export class Summary {
    constructor(parent) {
        this.parent = parent;

        const container = document.createElement('div');
        container.classList.add('summary');
        this.container = container;
    }

    render(name, position) {
        const nameElement = document.createElement('h1');
        nameElement.textContent = name;

        const positionElement = document.createElement('h2');
        positionElement.textContent = position;

        this.container.append(nameElement, positionElement);

        this.parent.prepend(this.container);
    }

    update(name, position) {
        this.container.innerHTML = '';
        this.render(name, position);
    }
}
