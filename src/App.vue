<template>
    <div v-for="(bloc, index) in this.snake.blocs" :key="index" class="square" :style="{ left: bloc.x + 'px', top: bloc.y+ 'px', background: bloc.color }"></div>
</template>

<script>

import Snake from './classes/Snake';

const snake = new Snake();
snake.addBloc(snake.go);
snake.addBloc(snake.go);
snake.addBloc(snake.go);
snake.addBloc(snake.go);
snake.addBloc(snake.go);
snake.addBloc(snake.go);
snake.addBloc(snake.go);
snake.addBloc(snake.go);
snake.addBloc(snake.go);
snake.addBloc(snake.go);


console.log(snake);

export default {
    data() {
        return {
            snake: snake
        };
    },
    mounted() {
        setInterval(() =>  {
            console.log(this.snake.end);
            if (this.snake.end == false) {
                this.snake.updateBloc();
            }
        }, 1);
    }
}

</script>

<style scoped>
    .square {
        width: 10px;
        height: 10px;
        position: absolute;
    }
</style>