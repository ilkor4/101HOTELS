<template>
    <section
        class="comments"
        v-if="comments.length > 0"
    >
        <h2 class="comments__title">
            Все комментарии:
        </h2>
        <transition-group name="comments__comment-list comments-list" tag="ul">
            <CommentItem
                @remove="$emit('remove', comment)"
                v-for="comment in comments"
                :key="comment.id"
                :comment="comment "/>
        </transition-group>
    </section>
    <h2
        class="not-found-title"
        v-else
    >
        Комментарии отсутствуют!
    </h2>
</template>

<script>

import CommentItem from "./CommentItem.vue";

export default {
    components: {CommentItem},
    props: {
        comments: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.comments {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__title {
        font: var(--font_text_m);
        color: var(--color_text_grey);
    }
}

.not-found-title {
    font: var(--font_text_m);
    color: var(--color_primary);
}

.comments-list-item {
    display: inline-block;
    margin-right: 10px;
}

.comments-list-enter-active,
.comments-list-leave-active {
    transition: all .7s ease;
}

.comments-list-enter-from,
.comments-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.comments-list-move {
    transition: transform 0.7s ease;
}
</style>
