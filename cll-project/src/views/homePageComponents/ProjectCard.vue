<template>
    <div class="project__card">
        <div class="project__card__image-box" :class="cardClass">
            <img src="@/assets/img/banner-Photo.png" alt="vector" class="project__card__image-box__background">
        </div>
        <div class="project__card__content">
            <div class="project__card__content__sub-content">
                <h3 class="project__card__content__sub-content__name">Modern Kitchan</h3>
                <p class="project__card__content__sub-content__tag">Decor / Artchitecture</p>
            </div>
            <button class="project__card__content__button">
                <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardClass: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.project__card {
    width: 525px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &_top-left {
        border-radius: 0 80px 0 0;
    }

    &_top-right {
        border-radius: 80px 0 0 0;
    }

    &_bottom-left {
        border-radius: 0 0 80px 0;
    }

    &_bottom-right {
        border-radius: 0 0 0 80px;
    }

    &__image-box {
        overflow: hidden;
        position: relative;
        height: 548px;

        &__background {
            width: 686px;
            height: 1031px;
            background-repeat: no-repeat;
            position: absolute;
            top: -267px;
            left: -101px;
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__sub-content {
            display: flex;
            flex-direction: column;
            gap: 4px;

            &__name {
                font-size: 25px;
                line-height: 125%;
                /* or 31px */
                display: flex;
                align-items: center;
                letter-spacing: 0.02em;

                color: #292F36;

                /* Inside auto layout */
                flex: none;
                order: 0;
                flex-grow: 0;
            }

            &__tag {
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
            border: none;
            border-radius: 50%;
            width: 70px;
            height: 70px;
            background-color: #F4F0EC;
        }
    }
}
</style>