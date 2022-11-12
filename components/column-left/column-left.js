import { Paragraph } from "../paragraph/paragraph.js";
import { Photo } from "../photo/photo.js";

export class ColumnLeft {
	constructor(parent) {
		this.parent = parent;
		this.paragraphList = [
			{
				heading: "Контактная информация",
				content: "text text text ...",
			},
			{
				heading: "Рекомендации с прошлых мест работы",
				content: "text text text ...",
			},
		];
	}

	render(container) {
		const photo = new Photo(container);
		photo.render("Моё фото", "./man.jpg");

		const columnLeftTextElement = document.createElement("div");
		columnLeftTextElement.classList.add("column-left__text");

		this.paragraphList.forEach((element) => {
			const paragraph = new Paragraph(
				columnLeftTextElement,
				element.heading,
				element.content
			);
			paragraph.render();
		});

		container.appendChild(columnLeftTextElement);
	}
}
