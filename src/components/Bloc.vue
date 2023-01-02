<template>
    <div class="square" :style="{ left: this.x + 'px', top: this.y+ 'px', background: this.color }"></div>
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