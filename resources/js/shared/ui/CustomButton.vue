<template>
    <button :class="$attrs.class" class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'CustomButton'
}
</script>

<style lang="scss" scoped>
.button {
    padding: 5px 10px;
    color: var(--color_text_dark);
    border-radius: var(--base_border_radius);
    border: none;
    outline: none;
    font: var(--font_text_s);
    transition: var(--base_transition);

    &_primary {
        background: var(--color_primary);
        color: var(--color_text_light);
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
    }

    &_secondary {
        background: var(--color_interface_modal_bg);
        color: var(--color_primary);
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &:hover {
        opacity: var(--base_opacity);
        cursor: pointer;
    }
}
</style>
