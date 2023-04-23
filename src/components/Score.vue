<template>
    <label>{{ score }}</label>
</template>

<style scoped>
label {
    color: orange;
    font-size: 60px;
    font-weight: bold;
    background-color: limegreen;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    float: right;
    top: 10px;
    right: 10px;
    z-index: -1;
}
</style>

<script>
export default {
	props: ['score']
};
</script>