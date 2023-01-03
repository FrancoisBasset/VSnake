<template>
    <div class="circle" :style="{ left: this.x + 'px', top: this.y+ 'px', background: this.color }"></div>
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