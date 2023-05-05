<template>
    <div class="square" :style="{ left: x + 'px', top: y + 'px', background: color }"></div>
</template>

<style scoped>
.square {
    width: 10px;
    height: 10px;
    position: absolute;
}
</style>

<script>
export default {
	props: ['x', 'y', 'color']
};
</script>