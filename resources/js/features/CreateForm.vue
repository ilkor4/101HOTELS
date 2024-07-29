<template>
    <section id="create-form" class="form">
        <h2 class="form__title">
            Поделитесь своими впечатлениями!
        </h2>
        <form
            @submit.prevent
            name="edit-form"
            class="form__container"
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
                Создать
            </CustomButton>
        </form>
    </section>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import ru from 'vue2-datepicker/locale/ru';
import {mapActions} from "vuex";

console.log(ru); // Чтобы пустой импорт не удалялся

export default {
    components: {
        DatePicker
    },
    data: () => ({
        name: '',
        text: '',
        date: null,
    }),
    methods: {
        ...mapActions({
            fetchCreateComment: "comment/fetchCreateComment"
        }),
        onSubmit() {
            const comment = {
                name: this.name,
                text: this.text,
                date: this.date
            };

            this.fetchCreateComment(comment);

            this.name = '';
            this.date = null;
            this.text = '';
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
