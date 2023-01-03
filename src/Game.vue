<template>
    <Snake :blocs="this.snake.blocs" />
    <Score :score="this.score" />
	<Food v-for="food in this.foods" :key="food" :x="food.x" :y="food.y" :color="food.color" />
	<div id="buttonDiv">
		<ResetButton @resetButtonClicked="reset()" class="button" />
		<SaveButton @saveButtonClicked="save()" class="button" style="float: right" />
	</div>
</template>

<style>
	#buttonDiv {
		position: absolute;
		bottom: 0px;
		width: 100%;
	}

	.button {
		font-size: 30px;
		width: 48%;
		z-index: -1;
		border: none;
		background-color: rgba(111, 222, 144, 0.2);
	}
</style>

<script>
import Snake from './components/Snake.vue';
import Food from './components/Food.vue';
import Score from './components/Score.vue';
import snake from './classes/Snake';
import food from './classes/Food';

import ResetButton from './components/ResetButton.vue';
import SaveButton from './components/SaveButton.vue';

export default {
	components: {
		Snake,
		Food,
		Score,
		ResetButton,
		SaveButton
	},
	data() {
		return {
			snake: new snake(),
			score: localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0,
			foods: JSON.parse(localStorage.getItem('foods')) ?? [],
			speed: localStorage.getItem('speed') ? parseInt(localStorage.getItem('speed')) : 100
		};
	},
	mounted() {
		if (localStorage.getItem('snake')) {
			this.snake.restore(JSON.parse(localStorage.getItem('snake')));
		}

		setInterval(() =>  {
			if (!this.snake.end) {
				this.snake.move();

				for (let i = 0; i < this.foods.length; i++) {
					if (this.foods[i].x == this.snake.blocs[0].x && this.foods[i].y == this.snake.blocs[0].y) {
						this.score += this.foods[i].points;
						this.foods.splice(i, 1);
						this.snake.addBloc();
						this.speed--;
						break;
					}
				}
			}
		}, this.speed);

		setInterval(() =>  {
			if (!this.snake.end) {
				this.foods.push(new food());
			}
		}, 2000);

		document.addEventListener('keydown', (e) => {
			switch (e.key) {
			case 'ArrowUp':
				if (this.snake.blocs[0].go == 'down') {
					return;
				}

				this.snake.blocs[0].go = 'up';
				this.snake.blocs[0].oldGo = 'up';
				break;
			case 'ArrowDown':
				if (this.snake.blocs[0].go == 'up') {
					return;
				}

				this.snake.blocs[0].go = 'down';
				this.snake.blocs[0].oldGo = 'down';
				break;
			case 'ArrowLeft':
				if (this.snake.blocs[0].go == 'right') {
					return;
				}

				this.snake.blocs[0].go = 'left';
				this.snake.blocs[0].oldGo = 'left';
				break;
			case 'ArrowRight':
				if (this.snake.blocs[0].go == 'left') {
					return;
				}

				this.snake.blocs[0].go = 'right';
				this.snake.blocs[0].oldGo = 'right';
				break;
			}
		});
	},
	methods: {
		reset() {
			this.score = 0;
			this.snake = new snake();
			this.foods = [new food()];
			this.speed = 100;
			localStorage.clear();
		},
		save() {
			localStorage.setItem('score', this.score);
			localStorage.setItem('snake', JSON.stringify(this.snake));
			localStorage.setItem('foods', JSON.stringify(this.foods));
			localStorage.setItem('speed', this.speed);
		}
	}
};

</script>