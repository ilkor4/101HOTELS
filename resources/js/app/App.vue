<template>
    <div class="app">
        <Navbar/>
        <router-view/>
    </div>
</template>
<script>
import Navbar from "../widgets/Navbar.vue";

const default_layout = "default";

export default {
    components: {Navbar},
};
</script>

<style lang="scss">
.app {
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}
</style>
