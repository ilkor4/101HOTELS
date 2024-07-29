<template>
    <main class="content">
        <CommentList :comments="sortedAndCutComments"/>
        <CreateForm/>
    </main>
</template>

<script>
import CommentList from "../entities/Comment/CommentList.vue";
import CreateForm from "../features/CreateForm.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    components: {
        CreateForm,
        CommentList
    },
    computed: {
        ...mapGetters({
            sortedAndCutComments: "comment/sortedAndCutComments"
        })
    },
    methods: {
        ...mapActions({
            fetchGetComments: "comment/fetchGetComments",
        })
    },
    mounted() {
        this.fetchGetComments();
    }
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    max-width: var(--max_width_container);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

</style>
