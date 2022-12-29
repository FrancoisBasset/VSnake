export default class Bloc {
    constructor(x, y, go, color = 'black') {
        this.x = x;
        this.y = y;
        this.go = go;
        this.oldGo = null;
        this.color = color;
    }
}