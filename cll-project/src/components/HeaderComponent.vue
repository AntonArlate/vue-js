<template>
    <div>
        <header class="header center">
            <LogoComponent />
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
import LogoComponent from './LogoComponent.vue';

export default {
    name: 'CllProjectHeader',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { LogoComponent }
};
</script>

<style scoped lang="scss">
.header {
    margin-top: 44px;
    margin-bottom: 57px;

    display: flex;
    justify-content: space-between;



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