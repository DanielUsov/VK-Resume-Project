function handleSkillsClick(event) {
	const skillsList = document.querySelector("#skills-list");
	skillsList.classList.toggle("hidden");

	const skills = event.target;

	if (skills.dataset.state === "open") {
		skills.dataset.state = "closed";
		skills.textContent = "Показать список умений";
	} else {
		skills.dataset.state = "open";
		skills.textContent = "Скрыть список умений";
	}
}

export class Skills {
	constructor(parent) {
		this.parent = parent;
	}

	render(headingText, skillsArray) {
		const container = document.createElement("div");

		const headingElement = document.createElement("h3");
		headingElement.textContent = headingText;

		const spoilerElement = document.createElement("div");
		spoilerElement.id = "skills";
		spoilerElement.dataset.state = "closed";
		spoilerElement.textContent = "Показать список умений";

		const listElement = document.createElement("ul");
		listElement.id = "skills-list";
		listElement.classList.add("hidden");

		const skillsElementsArray = skillsArray.map((text) => {
			const elem = document.createElement("li");
			elem.textContent = text;

			return elem;
		});

		skillsElementsArray.forEach((item) => {
			listElement.appendChild(item);
		});

		// TODO: removeEventListener!
		spoilerElement.addEventListener("click", handleSkillsClick);

		container.append(headingElement, spoilerElement, listElement);
		this.parent.appendChild(container);
	}
}
