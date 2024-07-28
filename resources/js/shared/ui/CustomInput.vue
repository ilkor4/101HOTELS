<template>
    <input
        @input="handleChange"
        class="input"
        :value="value"
        type="text"/>
</template>

<script>
export default {
    name: 'CustomInput',
    props: {
        value: [String, Number]
    },
    methods: {
        handleChange(event) {
            this.$emit('input', event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.input {
    padding: 10px 15px;
    box-sizing: border-box;
    width: 100%;
    font: var(--font_text_s);
    color: var(--color_text_dark);
    border: none;
    border-radius: var(--base_border_radius);
    outline: none;

    &::placeholder {
        color: var(--color_text_grey);
    }

    &:focus {
        outline: 2px dashed var(--color_interface_notification);
    }
}
</style>
