<template>
    <div
        @click="handleClose"
        class="modal"
        v-if="isModalOpen"
    >
        <div
            @click.stop
            class="modal__content"
        >
            <CloseIcon @click="handleClose"/>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import CloseIcon from "../assets/images/CloseIcon.vue";

export default {
    name: 'CustomModal',
    components: {CloseIcon},
    props: {
        isModalOpen: {
            type: Boolean,
            required: true
        },
    },
    methods: {
        handleClose() {
            this.$emit('closeModal');
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    flex-direction: column;

    &__content {
        padding: 20px;
        margin: auto;
        background: var(--color_interface_bg);
        border-radius: var(--base_border_radius);
        min-height: 50px;
        min-width: 300px;
    }
}
</style>
