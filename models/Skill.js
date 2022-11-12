export class Skill {
	constructor(text = 'Умение') {
		this.text = text;
	}

	fetchData() {
		console.log('Skill :: Получили данные с сервера!');
		this.text = 'Преподавать Frontend';
	}
}
