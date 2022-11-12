export class Info {
	constructor(parent) {
		this.parent = parent;
	}

	render(headingText, data) {
		const container = document.createElement("div");
		const headingElement = document.createElement("h3");
		headingElement.textContent = headingText;
		container.appendChild(headingElement);

		data.forEach((elem) => {
			const innerContainer = document.createElement("div");
			const titleElement = document.createElement("h4");
			titleElement.textContent = elem.title;

			const explanationElement = document.createElement("div");
			explanationElement.textContent = elem.explanation;

			const bulletListElement = document.createElement("ul");
			if (elem.bullets !== undefined && Array.isArray(elem.bullets)) {
				elem.bullets.forEach((text) => {
					const bulletElement = document.createElement("li");
					bulletElement.textContent = text;
					bulletListElement.appendChild(bulletElement);
				});
			}

			innerContainer.append(
				titleElement,
				explanationElement,
				bulletListElement
			);
			container.appendChild(innerContainer);
		});

		this.parent.appendChild(container);
	}
}
