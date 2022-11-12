import { MainController } from '../controllers/MainController.js';

const routers = {
	'/': MainController,
	'/contcontactsa/': MainController,
};

export class Router {
	constructor() {
		this.onDocumentClick = this.onDocumentClick.bind(this);
	}
	start() {
		this.invokeController();
		document.addEventListener('click', this.onDocumentClick);
	}

	stop() {
		document.removeEventListener('click', this.onDocumentClick);
	}

	go(path) {
		window.history.pushState({}, null, path);
		this.invokeController();
	}

	invokeController() {
		const url = window.location.pathname;
		const ControllerClass = routers[url];
		const controller = new MainController();
		controller.process();
		console.log(url);
	}

	onDocumentClick(event) {
		if (event.target.tagName === 'A') {
			event.preventDefault();
			console.log('нажатие', event);
			console.log(this);
			this.go(event.target.href);
		}
		console.log(this);
	}
}

export const router = new Router();

window.router = router;
