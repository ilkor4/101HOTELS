<template>
    <div
        class="app"
        :class="{'app_dark': theme === 'dark'}"
    >
        <Navbar/>
        <router-view/>
    </div>
</template>
<script>
import Navbar from "../widgets/Navbar.vue";
import {mapState} from "vuex";

const default_layout = "default";

export default {
    components: {Navbar},
    computed: {
        ...mapState({
            theme: (state) => state.theme.theme
        })
    }
};
</script>

<style lang="scss">
.app {
    padding: 120px 20px 20px;
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    background-color: var(--color_interface_bg);

    &_dark {
        --color_interface_bg: #ff4141;
    }
}

@media screen and (max-width: 576px) {
    .app {
        padding: 200px 20px 20px;
    }
}
</style>
