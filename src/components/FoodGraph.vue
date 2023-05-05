<template>
    <div class="circle" :style="{ left: x + 'px', top: y + 'px', background: color }"></div>
</template>

<style scoped>
.circle {
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 10px;
}
</style>

<script>
export default {
	props: ['x', 'y', 'color']
};
</script>