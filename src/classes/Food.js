export default class Food {
	constructor() {
		this.x = Math.floor(Math.random() * window.innerWidth);
		this.x = this.x - (this.x % 10);
		this.y = Math.floor(Math.random() * window.innerHeight);
		this.y = this.y - (this.y % 10);

		this.points = Math.floor(Math.random() * 20);
		this.color = ['red', 'blue', 'orange', 'green'][Math.floor(Math.random() * 4)];
	}
}