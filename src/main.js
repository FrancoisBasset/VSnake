import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Game from './Game.vue';

import './assets/main.css';

const game = createApp(Game);
game.use(createPinia());
game.mount('#game');
