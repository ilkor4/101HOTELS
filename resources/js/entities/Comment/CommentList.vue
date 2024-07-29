<template>
    <section
        class="comments"
        v-if="comments.length > 0"
    >
        <div class="comments__wrapper">
            <h2 class="comments__title">
                Все комментарии:
            </h2>
            <CustomSelect
                :options="sortOptions"
                @input="setSelectedSort"
            />
        </div>
        <transition-group
            class="comments__list"
            name="comments-list"
            tag="ul"
        >
            <CommentItem
                v-for="comment in comments"
                :key="comment.id"
                :comment="comment"/>
        </transition-group>
        <CommentsPagination class="comments__pagination"/>
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
import CustomSelect from "../../shared/ui/CustomSelect.vue";
import {sortOptions} from "./lib/constants";
import {mapMutations} from "vuex";
import CommentsPagination from "./lib/CommentsPagination.vue";

export default {
    components: {CommentsPagination, CustomSelect, CommentItem},
    data: () => ({
        sortOptions
    }),
    props: {
        comments: {
            type: Array,
            required: true
        }
    },
    methods: {
        ...mapMutations({
            setSelectedSort: "comment/setSelectedSort"
        })
    },
}
</script>

<style lang="scss" scoped>
.comments {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__title {
        font: var(--font_text_m);
        color: var(--color_text_grey);
    }

    &__pagination {
        align-self: center;
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

@media screen and (max-width: 576px) {
    .comments__wrapper {
        flex-direction: column;
        gap: 15px;
    }
}
</style>
