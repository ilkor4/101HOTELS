<template>
    <li class="comment">
        <div class="comment__description">
            <h3 class="comment__title">
                {{ comment.name }}
            </h3>
            <p class="comment__text">
                {{ comment.text }}
            </p>
            <p class="comment__date">
                {{ comment.date }}
            </p>
        </div>
        <div class="comment__buttons">
            <CustomButton
                class="button_tertiary"
                @click="$router.push(`/comments/${comment.id}`)"
            >
                <ShowIcon/>
                Открыть
            </CustomButton>
            <CustomButton class="button_secondary">
                <DeleteIcon/>
                Удалить
            </CustomButton>
        </div>
    </li>
</template>

<script>
import CustomButton from "../../shared/ui/CustomButton.vue";
import DeleteIcon from "../../shared/assets/images/DeleteIcon.vue";
import ShowIcon from "../../shared/assets/images/ShowIcon.vue";

export default {
    components: {ShowIcon, DeleteIcon, CustomButton},
    props: {
        comment: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.comment {
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color_interface_modal_bg);
    border-radius: var(--base_border_radius);

    &__description {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__title {
        font: var(--font_text_m);
        color: var(--color_primary);
        text-transform: uppercase;
    }

    &__text {
        font: var(--font_text_s);
        color: var(--color_text_dark);
    }

    &__date {
        font: var(--font_text_s);
        color: var(--color_text_grey);
    }

    &__buttons {
        display: flex;
        align-items: center;
        gap: 10px;
    }
}

@media screen and (max-width: 576px) {
    .comment {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
}
</style>
