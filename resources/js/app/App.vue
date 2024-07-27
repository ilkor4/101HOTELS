<template>
    <div class="app">
        <Navbar />
    </div>
</template>
<script>
import Navbar from "../widgets/Navbar.vue";
import axios from "axios";

const default_layout = "default";

export default {
    components: {Navbar},
    data() {

    },
    methods: {
        async fetchGetComments() {
            try {
                const response = axios.get('/api/comments/')

                console.log((await response).data)
            } catch (err) {
                console.log(err)
            }
        }
    },
    mounted() {
        this.fetchGetComments()
    }
};
</script>

<style lang="scss">
.app {
    padding: 20px;
    box-sizing: border-box;
    background-color: var(--color_interface_bg);
}
</style>
