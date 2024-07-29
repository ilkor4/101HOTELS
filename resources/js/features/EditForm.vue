<template>
    <form
        @submit.prevent
        name="edit-form"
        class="form"
    >
        <fieldset class="form__wrapper">
            <CustomInput
                name="name"
                v-model="name"
                required
                placeholder="Введите ваше имя"/>
            <DatePicker
                placeholder="Дата"
                class="vue2-datepicker"
                v-model="date"
                lang="ru"
                valueType="format"
            />
        </fieldset>
        <CustomInput
            id="text"
            v-model="text"
            required
            placeholder="Введите ваш комментарий"/>
        <CustomButton
            @click="onSubmit"
            class="button_primary"
            type="submit"
        >
            Редактировать
        </CustomButton>
    </form>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import ru from 'vue2-datepicker/locale/ru';
import {mapActions, mapState} from "vuex";

console.log(ru); // Чтобы пустой импорт не удалялся

export default {
    components: {
        DatePicker
    },
    props: {
        closeModal: {
            type: Function,
            required: true
        }
    },
    data: () => ({
        name: '',
        text: '',
        date: '',
    }),
    watch: {
        currentComment: {
            handler(newValue) {
                this.name = newValue.name;
                this.text = newValue.text;
                this.date = newValue.date;
            },
            deep: true,
            immediate: true
        }
    },
    computed: {
        ...mapState({
            currentComment: (state) => state.comment.currentComment
        })
    },
    methods: {
        ...mapActions({
            fetchEditComment: "comment/fetchEditComment"
        }),
        onSubmit() {
            const comment = {
                id: this.currentComment.id,
                name: this.name,
                text: this.text,
                date: this.date
            };

            this.fetchEditComment(comment);
            this.closeModal();
        }
    }
}
</script>

<style lang="scss">

.form {
    padding: 50px 20px 100px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 60px;
    background-image: url("https://101hotels.com/images/new_version/background/RU/main_bg_9.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: var(--base_border_radius);

    &__title {
        font: var(--font_text_l);
        color: var(--color_text_light);
    }

    &__wrapper {
        width: 100%;
        display: flex;
        gap: 3px;
        background-color: var(--color_interface_bg);
        border-radius: var(--base_border_radius);
    }

    &__container {
        width: 100%;
        max-width: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
}

.mx-input {
    height: 40px;
    font: var(--font_text_s);
    color: var(--color_text_dark);
    border: none;

    &:focus {
        outline: 2px dashed var(--color_interface_notification);
    }

    &:hover {
        outline: 2px dashed var(--color_interface_pr);
    }
}
</style>
