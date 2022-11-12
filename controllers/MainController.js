import { MainView } from '../views/MainView.js';
import { makeRequest } from '../utils/makeRequest.js';

export class MainController {
	process() {
		console.log(`Выполнился MainController`);
		const view = new MainView();
		view.render();

		makeRequest('GET', '/info', null, (info) => {
			view.columnRight.update(info);
		});
	}
}
