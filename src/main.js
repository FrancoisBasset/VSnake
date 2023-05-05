import { createApp } from 'vue';
import { createPinia } from 'pinia';
import GameBoard from './GameBoard.vue';

import './assets/main.css';

const game = createApp(GameBoard);
game.use(createPinia());
game.mount('#game');
