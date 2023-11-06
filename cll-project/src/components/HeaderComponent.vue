<template>
    <div>
        <header class="header center">
            <router-link to="/" class="header_logo logo">
                <img src="@/assets/img/Logo.svg" alt="logo__img" class="logo__img">
                <h3 class="logo__text">Interno</h3>
            </router-link>
            <nav class="header__menubar">
                <!-- теперь наши сылки будут представлять из себя <router-link> -->
                <router-link to="/">Home</router-link>
                <router-link to="/project">Project</router-link>
                <router-link to="/blog">Blog</router-link>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: 'CllProjectHeader',

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

<style scoped lang="scss">
.header {
    margin-top: 44px;
    margin-bottom: 57px;

    display: flex;
    justify-content: space-between;

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

    &__menubar {
        display: flex;
        gap: 50px;

        font-weight: 400;
        font-family: 'Jost';
        font-size: 20px;
        line-height: 125%;
        /* identical to box height, or 25px */
        display: flex;
        align-items: center;
        text-align: center;

        color: #292F36;
    }
}
</style>