<template>
    <main class="content">
        <CommentList :comments="comments"/>
        <CreateForm/>
    </main>
</template>

<script>
import CommentList from "../entities/Comment/CommentList.vue";
import axios from "axios";
import CreateForm from "../features/CreateForm.vue";

export default {
    components: {CreateForm, CommentList},
    data: () => ({
        comments: []
    }),
    methods: {
        async fetchGetComments() {
            try {
                const response = await axios.get('/api/comments/')

                this.comments = response.data;
                console.log(this.comments)

            } catch (err) {
                console.log(err)
            }
        }
    },
    mounted() {
        this.fetchGetComments()
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
