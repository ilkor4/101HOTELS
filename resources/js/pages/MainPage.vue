<template>
    <main class="content">
        <CommentList :comments="sortedComments"/>
        <CreateForm/>
    </main>
</template>

<script>
import CommentList from "../entities/Comment/CommentList.vue";
import CreateForm from "../features/CreateForm.vue";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
    components: {
        CreateForm,
        CommentList
    },
    computed: {
        ...mapState({
            comments: (state) => state.comment.comments,
        }),
        ...mapGetters({
            sortedComments: "comment/sortedComments"
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
