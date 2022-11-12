import { Summary } from '../summary/summary.js';
import { Info } from '../info/info.js';
import { Skills } from '../skills/skills.js';
import { Contacts } from '../contacts/contacts.js';

const infoJobData = [
	{
		title: '.......',
	},
	{
		title: 'Начинаяющий Frontend-разработчик',
		explanation:
			'Быстррое обучение - это тоже самое, что и медленное только без перерывов на жизнь',
	},
];

const infoEduData = [
	{
		title: "Колледж 'Сириус', бывший IT-Колледж 'Сириус'",
		explanation: 'нуу....... я работаю над этим',
	},
];

const skillsData = [
	'Изучающий Frontend',
	'Нравится спорт',
	'Рассказывать несмешные анекдоты',
];

const contactsData = [
	{
		href: 'https://t.me/Daniel_Usov',
		text: 'Telegram',
	},
];

export class ColumnRight {
	constructor(parent) {
		this.parent = parent;
		this.summary = null;
	}

	render(container) {
		const summary = new Summary(container);
		this.summary = summary;
		summary.render('Daniel Usov', 'будующий программист Front-ender');

		const contacts = new Contacts(container);
		contacts.render(contactsData);

		const skills = new Skills(container);
		skills.render('Основные умения', skillsData);

		const infoJob = new Info(container);
		infoJob.render('Опыт работы', infoJobData);

		const infoEdu = new Info(container);
		infoEdu.render('Образование', infoEduData);
	}

	update(data = {}) {
		if (!data || !Object.keys(data).length) {
			return;
		}

		this.summary.update(data.name);
	}
}
