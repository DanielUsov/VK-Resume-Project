import { Skill } from './Skill.js';

export class SkillCollection {
	constructor() {
		this.skills = [];
	}

	fetchSkills() {
		console.log('SkillCollection :: Получили данные с сервера!');
		// Ненастоящий ответ от сервера для демонстрации
		const response =
			'[{"text": "Преподавать Frontend"}, {"text": "Руководить группой разработки"}]';
		const skillsRaw = JSON.parse(response);

		this.skills = skillsRaw.map((item) => {
			return new Skill(item.text);
		});
	}

	getList() {
		return this.skills.map((skill) => skill.text);
	}
}
