import { ColumnLeft } from '../components/column-left/column-left.js';
import { ColumnRight } from '../components/column-right/column-right.js';

export class MainView {
	constructor() {
		this.columnRight = null;
		this.columnLeft = null;
	}

	render() {
		const root = document.querySelector('#root');
		const container = document.createElement('div');
		container.classList.add('page-container');

		const columnLeftContainer = document.createElement('div');
		columnLeftContainer.classList.add('column-left');
		
		this.columnLeft = new ColumnLeft();

		const columnRightContainer = document.createElement('div');
		columnRightContainer.classList.add('column-right');

		this.columnRight = new ColumnRight();

		container.append(columnLeftContainer, columnRightContainer);
		root.innerHTML = '';
		root.append(container);

		this.columnLeft.render(columnLeftContainer);
		this.columnRight.render(columnRightContainer);
	}
}
