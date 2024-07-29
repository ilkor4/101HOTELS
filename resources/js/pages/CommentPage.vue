<template>
    <section class="comment-page">
        <ul class="comment-page__list">
            <CommentItem
                v-if="currentComment !== null"
                :comment="currentComment"
                :openModal="openModal"
                :hasEditButton="true"
            />
            <li
                class="comment-page__title"
                v-else
            >
                Комментарий не найден!
            </li>
        </ul>
        <CustomModal
            :isModalOpen="isOpenModal"
            @closeModal="closeModal"
        >
            <EditForm :closeModal="closeModal"/>
        </CustomModal>
    </section>
</template>

<script>

import CommentItem from "../entities/Comment/CommentItem.vue";
import {mapActions, mapState} from "vuex";
import EditForm from "../features/EditForm.vue";

export default {
    components: {EditForm, CommentItem},
    data: () => ({
        isOpenModal: false
    }),
    computed: {
        ...mapState({
            currentComment: (state) => state.comment.currentComment
        })
    },
    methods: {
        ...mapActions({
            fetchGetComment: "comment/fetchGetComment"
        }),
        openModal() {
            this.isOpenModal = true;
        },
        closeModal() {
            this.isOpenModal = false;
        }
    },
    mounted() {
        this.fetchGetComment(this.$route.params.id);
    }
}
</script>

<style lang="scss" scoped>

.comment-page {
    width: 100%;
    max-width: var(--max_width_container);

    &__list {
        width: 100%;
    }

    &__title {
        font: var(--font_text_m);
        color: var(--color_primary);
    }
}
</style>
