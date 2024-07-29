<template>
    <ul class="page__list">
        <li
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            @click="setCurrentPage(pageNumber)"
            class="page__item"
            :class="{'page__item_active': currentPage === pageNumber}"
        >
            {{ pageNumber }}
        </li>
    </ul>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
    props: {},
    computed: {
        ...mapState({
            currentPage: (state) => state.comment.currentPage,
            totalPages: (state) => state.comment.totalPages
        })
    },
    methods: {
        ...mapMutations({
            setCurrentPage: "comment/setCurrentPage"
        })
    }
}
</script>

<style lang="scss" scoped>
.page {
    width: 100%;
    display: flex;
    margin-top: 15px;

    &__list {
        display: flex;
        place-items: center;
        gap: 10px;
        margin-top: 15px;
        flex-wrap: wrap;
    }

    &__item {
        border: 1px dashed var(--color_text_grey);
        padding: 10px;
        border-radius: var(--base_border_radius);
        cursor: pointer;
        transition: var(--base_transition);

        &_active {
            border: 1px solid var(--color_primary);
        }

        &:hover {
            opacity: var(--base_opacity);
        }
    }

}
</style>
