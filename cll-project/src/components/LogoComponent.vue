<template>
    <router-link to="/" class="logo">
        <img src="@/assets/img/Logo.svg" alt="logo__img" class="logo__img">
        <h3 class="logo__text">Interno</h3>
    </router-link>
</template>

<script>
export default {
    name: 'LogoComponent',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    &__img {
        width: 34px;
        height: 34px;
    }

    &__text {
        font-weight: 400;
        font-size: 40px;
        line-height: 125%;
        /* identical to box height, or 50px */
        color: #292F36;
    }
}
</style>