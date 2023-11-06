<template>
    <footer class="footer center">
        <div class="footer__interio">
            <div class="footer__interio__sub-content">
                <LogoComponent />
                <p class="footer__interio__sub-content__text">It is a long established fact that a reader will be distracted
                    lookings.</p>
            </div>
            <div class="footer__interio__icons">
                <img src="@/assets/img/ico_Twitter.svg" alt="ico_Twitter.svg">
                <img src="@/assets/img/ico_in.svg" alt="ico_in.svg">
            </div>
        </div>

        <nav class="footer__pages">
            <h2 class="footer__pages__title">Pages</h2>
            <router-link class="footer__pages__link" to="/">Home</router-link>
            <router-link class="footer__pages__link" to="/project">Project</router-link>
            <router-link class="footer__pages__link" to="/blog">Blog</router-link>
        </nav>

        <nav class="footer__contact">
            <h2 class="footer__contact__title">Contact</h2>
            <p class="footer__contact__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <a class="footer__contact__text" href="mailto:contact@interno.com">contact@interno.com</a>
            <p class="footer__contact__text">(123) 456 - 7890</p>
        </nav>
    </footer>
</template>

<script>
import LogoComponent from './LogoComponent.vue';

export default {
    name: 'FooterComponent',
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
.footer {
    margin-top: 44px;
    margin-bottom: 57px;
    gap: 101px;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    &__interio {
        width: 393px;
        display: flex;
        flex-direction: column;
        gap: 31px;

        &__sub-content {
            display: flex;
            flex-direction: column;
            gap: 18px;

            &__text {
                font-family: 'Jost';
                font-style: normal;
                font-weight: 400;
                font-size: 22px;
                line-height: 150%;
                /* or 33px */
                letter-spacing: 0.01em;

                color: #4D5053;
            }
        }

        &__icons {
            img+img {
                margin-left: 54px;
            }
        }
    }

    &__pages {
        width: 125px;
        display: flex;
        flex-direction: column;
        gap: 1em;

        &__title {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 125%;
            /* or 31px */
            color: #292F36;
        }

        a {
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 300%;
            /* or 66px */
            letter-spacing: 0.01em;
            color: #4D5053;
        }
    }

    &__contact {
        width: 258px;

        &__title {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 125%;
            /* or 31px */
            color: #292F36;

            margin-bottom: 28px;
        }

        &__text {
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 150%;
            /* or 33px */
            letter-spacing: 0.01em;
            color: #4D5053;
        }

        .footer__contact__text {
            margin-top: 1em;
        }

    }

}
</style>