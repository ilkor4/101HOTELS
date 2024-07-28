<template>
    <section class="comment-page">
        <ul class="comment-page__list">
            Это страница поста с ID = {{ $route.params.id }}
        </ul>
    </section>
</template>

<script>

import CommentItem from "../entities/Comment/CommentItem.vue";

export default {
    components: {CommentItem}
}
</script>

<style lang="scss" scoped>

</style>
