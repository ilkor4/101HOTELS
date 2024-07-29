<template>
    <select
        @change="changeOption"
        :value="value"
        class="select">
        <option disabled value="">
            Выберите сортировку
        </option>
        <option
            v-for="option in options"
            :value="option.value"
            :key="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'CustomSelect',
    props: {
        value: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('input', event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.select {
    padding: 10px;
    box-sizing: border-box;
    border: none;
    font: var(--font_text_s);
    color: var(--color_text_grey);
    outline: none;
    border-radius: var(--base_border_radius);
}
</style>
