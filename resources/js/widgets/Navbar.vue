<template>
    <header class="navbar">
        <LogoIcon />
        <div class="navbar__buttons">
            <CustomButton class="button_secondary">
                <LightIcon  class="navbar__light"/>
                Тема
            </CustomButton>
            <CustomButton class="button_primary">
                Создать комментарий
            </CustomButton>
        </div>
    </header>
</template>

<script>
import LogoIcon from '../shared/assets/images/LogoIcon.vue'
import LightIcon from "../shared/assets/images/LightIcon.vue";

export default {
    components: {
        LightIcon,
        LogoIcon
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--base_border_radius);
    background-color: var(--color_interface_modal_bg);
    box-shadow: var(--color_text_grey);

    &__buttons {
        display: flex;
        gap: 15px;
    }

    &__light {
        fill: var(--color_primary);
    }
}
</style>
