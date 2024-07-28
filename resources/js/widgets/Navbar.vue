<template>
    <header class="navbar">
        <LogoIcon/>
        <div class="navbar__buttons">
            <CustomButton class="button_tertiary">
                <LightIcon class="navbar__light"/>
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
    box-sizing: border-box;
    width: 100%;
    max-width: var(--max_width_container);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--base_border_radius);
    background-color: var(--color_interface_modal_bg);
    box-shadow: var(--base_box_shadow);

    &__buttons {
        display: flex;
        gap: 15px;
    }
}

@media screen and (max-width: 576px) {
    .navbar {
        flex-direction: column;
        gap: 30px;
    }
}
</style>
