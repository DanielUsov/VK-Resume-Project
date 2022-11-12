export class Person {
	constructor(name = 'Имя', surname = 'Фамилия') {
		this.name = name;
		this.surname = surname;
	}

	getDisplayName() {
		return `${this.name} ${this.surname}`;
	}

	fetchData() {
		console.log('Skill :: Получили данные с сервера!');
		const name = 'Михаил';
		const surname = 'Волынов';
		this.name = name;
		this.surname = surname;
	}
}
