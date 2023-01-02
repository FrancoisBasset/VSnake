import Bloc from './Bloc';

export default class Snake {
    constructor() {
        this.score = 0;
        this.blocs = [];

        this.go = ['right', 'left', 'up', 'down'][Math.floor(Math.random() * 4)];
        const x = Math.floor(Math.random() * window.innerHeight);
        const y = Math.floor(Math.random() * window.innerWidth);

        this.blocs.push(new Bloc(x, y, this.go, 'red'));
        this.addBloc(this.go);

        this.end = false;
    }

    addBloc(go) {
        let x = this.blocs[this.blocs.length - 1].x;
        let y = this.blocs[this.blocs.length - 1].y;

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

    updateBloc() {
        for (let i = 0; i < this.blocs.length; i++) {
            switch (this.blocs[i].go) {
                case 'right':
                    this.blocs[i].x++;
                    break;
                case 'left':
                    this.blocs[i].x--;
                    break;
                case 'up':
                    this.blocs[i].y--;
                    break;
                case 'down':
                    this.blocs[i].y++;
                    break;
            }
        }


        if (
            (this.blocs[0].x < 0 && this.blocs[0].go == 'left') ||
            (this.blocs[0].x + 10 > window.innerWidth && this.blocs[0].go == 'right') ||
            (this.blocs[0].y < 0 && this.blocs[0].go == 'up') ||
            (this.blocs[0].y + 10 > window.innerHeight && this.blocs[0].go == 'down')
         ) {
            this.end = true;
        }
    }
}