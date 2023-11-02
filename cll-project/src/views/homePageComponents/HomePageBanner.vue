<template>
    <section class="banner center">
        <div class="banner__background-box">
            <img src="@/assets/img/banner-Photo.png" alt="vector" class="banner__background">

            <div class="banner__intro">
                <div class="banner__intro__sub-content">
                    <h2 class="banner__intro__sub-content__title">Let Your Home Be Unique</h2>
                    <p class="banner__intro__sub-content__text">There are many variations of the passages of lorem Ipsum
                        fromavailable, majority.</p>
                </div>
                <button class="banner__intro__button">
                    <div class="banner__intro__button__inner">
                        <p class="banner__intro__button__inner__text">Get Started</p>
                        <img src="@/assets/img/banner-button-Vector.svg" alt="vector"
                            class="banner__intro__button__inner__vector">
                    </div>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.banner {
    &__background-box {
        overflow: hidden;
        border-radius: 70px;
        position: relative;
        z-index: 1;
        padding: 208px 715px 208px 52px;

        .banner__background {
            width: 1353px;
            height: 2028px;
            background-repeat: no-repeat;
            position: absolute;
            top: -541px;
            left: -90px;
            z-index: -1;
        }
    }

    &__intro {
        display: flex;
        flex-direction: column;
        gap: 21px;
        max-width: 434px;

        &__sub-content {
            display: flex;
            flex-direction: column;
            gap: 18px;

            &__title {
                font-size: 65px;
                line-height: 125%;
                /* or 81px */
                display: flex;
                align-items: center;

                color: #292F36;

                /* Inside auto layout */
                flex: none;
                order: 0;
                flex-grow: 0;
            }

            &__text {
                font-family: 'Jost';
                font-size: 22px;
                line-height: 150%;
                /* or 33px */
                display: flex;
                align-items: center;
                letter-spacing: 0.01em;

                color: #4D5053;

                /* Inside auto layout */
                flex: none;
                order: 1;
                flex-grow: 0;
            }
        }

        &__button {
            padding: 26px 48px;
            border-radius: 16px;
            background-color: #292F36;
            width: fit-content;
            border: none;

            &__inner {
                display: flex;
                gap: 10px;
                align-items: center;

                &__text {
                    font-family: 'Jost';
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 125%;

                    display: flex;
                    align-items: center;
                    text-align: center;
                    letter-spacing: 0.02em;

                    color: #FFFFFF;

                    /* Inside auto layout */
                    flex: none;
                    order: 0;
                    flex-grow: 0;
                }

                &__vector {
                    width: 15.4px;
                    height: 13.18px;
                }
            }
        }
    }

}
</style>