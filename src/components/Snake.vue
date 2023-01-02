<template>
    <Bloc v-for="(bloc, index) in this.blocs" :key="index" :x="bloc.x" :y="bloc.y" :color="bloc.color" />
</template>

<script>
import Bloc from './Bloc.vue';

export default {
	components: {
		Bloc
	},
	props: ['blocs']
};
</script>