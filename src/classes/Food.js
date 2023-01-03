export default class Food {
	constructor() {
		this.x = Math.floor(Math.random() * window.innerWidth);
		this.x = this.x - (this.x % 10);
		if (this.x == 0) {
			this.x += 10;
		} else if (this.x >= window.innerWidth - 10) {
			this.x -= 10;
		}

		this.y = Math.floor(Math.random() * window.innerHeight);
		this.y = this.y - (this.y % 10);
		if (this.y == 0) {
			this.y += 10;
		} else if (this.y >= window.innerHeight - 10) {
			this.y -= 10;
		}

		this.points = Math.floor(Math.random() * 20);
		this.color = ['red', 'blue', 'orange', 'green'][Math.floor(Math.random() * 4)];
	}
}