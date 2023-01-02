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
        }, 1);
    }
}

</script>