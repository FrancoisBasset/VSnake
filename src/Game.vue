<template>
    <Snake :blocs="this.snake.blocs" />
    <Score :score="this.snake.score" />
</template>

<script>
import Snake from './components/Snake.vue';
import Score from './components/Score.vue';
import snake from './classes/Snake';

export default {
	components: {
		Snake,
		Score
	},
	data() {
		return {
			snake: new snake()
		};
	},
	mounted() {
		setInterval(() =>  {
			if (!this.snake.end) {
				this.snake.updateBloc();
			}
		}, 100);

		document.addEventListener('keydown', (e) => {
			switch (e.key) {
				case "ArrowUp":
					if (this.snake.blocs[0].go == 'down') {
						return;
					}

					this.snake.blocs[0].go = 'up';
					this.snake.blocs[0].oldGo = 'up';

					console.log('up');
					break;
				case "ArrowDown":
					if (this.snake.blocs[0].go == 'up') {
						return;
					}

					this.snake.blocs[0].go = 'down';
					this.snake.blocs[0].oldGo = 'down';

					console.log('down');
					break;
				case "ArrowLeft":
					if (this.snake.blocs[0].go == 'right') {
						return;
					}

					this.snake.blocs[0].go = 'left';
					this.snake.blocs[0].oldGo = 'left';

					console.log('left');
					break;
				case "ArrowRight":
					if (this.snake.blocs[0].go == 'left') {
						return;
					}

					this.snake.blocs[0].go = 'right';
					this.snake.blocs[0].oldGo = 'right';

					console.log('right');
					break;
			}
		});
	}
};

</script>