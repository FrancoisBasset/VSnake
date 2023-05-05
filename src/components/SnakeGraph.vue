<template>
    <BlocGraph v-for="(bloc, index) in blocs" :key="index" :x="bloc.x" :y="bloc.y" :color="bloc.color" />
</template>

<script>
import BlocGraph from './BlocGraph.vue';

export default {
	components: {
		BlocGraph
	},
	props: ['blocs']
};
</script>