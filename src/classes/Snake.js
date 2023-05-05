import Bloc from './Bloc';

export default class Snake {
	constructor() {
		this.blocs = [];

		const go = ['right', 'left', 'up', 'down'][Math.floor(Math.random() * 4)];
		let x = Math.floor(Math.random() * window.innerWidth);
		x = x - (x % 10);
		let y = Math.floor(Math.random() * window.innerHeight);
		y = y - (y % 10);

		this.blocs.push(new Bloc(x, y, go, 'red'));
		this.addBloc();

		this.end = false;
	}

	restore(instance) {
		this.blocs = instance.blocs;
		this.end = instance.end;
	}

	addBloc() {
		let x = this.blocs[this.blocs.length - 1].x;
		let y = this.blocs[this.blocs.length - 1].y;
		const go = this.blocs[this.blocs.length - 1].go;

		switch (go) {
		case 'right':
			x -= 10;
			break;
		case 'left':
			x += 10;
			break;
		case 'up':
			y += 10;
			break;
		case 'down':
			y -= 10;
			break;
		}

		this.blocs.push(new Bloc(x, y, go));
	}

	move() {
		for (let i = 0; i < this.blocs.length; i++) {
			this.blocs[i].oldGo = this.blocs[i].go;

			if (i - 1 >= 0) {
				if (this.blocs[i - 1].go !== this.blocs[i].go) {					
					this.blocs[i].go = this.blocs[i - 1].oldGo;
				}
			}
	
			switch (this.blocs[i].oldGo) {
			case 'right':
				this.blocs[i].x += 10;
				break;
			case 'left':
				this.blocs[i].x -= 10;
				break;
			case 'up':
				this.blocs[i].y -= 10;
				break;
			case 'down':
				this.blocs[i].y += 10;
				break;
			}
		}
		
		if (
			(this.blocs[0].x <= 0 && this.blocs[0].go === 'left') ||
            (this.blocs[0].x + 10 >= window.innerWidth && this.blocs[0].go === 'right') ||
            (this.blocs[0].y <= 0 && this.blocs[0].go === 'up') ||
            (this.blocs[0].y + 10 > window.innerHeight && this.blocs[0].go === 'down')
		) {
			this.end = true;
		}
	}
}