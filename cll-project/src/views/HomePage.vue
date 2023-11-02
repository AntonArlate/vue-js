<template>
    <div class="homePage">

        <Banner></Banner>

        <section class="project center">

            <div class="project__heading">
                <h2 class="project__heading__title">Follow Our Projects</h2>
                <p class="project__heading__text">It is a long established fact that a reader will be distracted by the of
                    readable content of page lookings at its layouts points.</p>
            </div>



            <div class="project__box" ref="projectBox">
                <ProjectCard v-for="index in 4" :key="index" :card-class="getCardClass(index)" />
            </div>
        </section>
    </div>
</template>
  
<script>
import Banner from './homePageComponents/HomePageBanner.vue';
import ProjectCard from './homePageComponents/ProjectCard.vue';
export default {
    components: {
        ProjectCard,
        Banner
    },
    mounted() {
        this.createCardCopies();
    },
    methods: {
        getCardClass(index) {
            switch (index) {
                case 1:
                    return "project__card_top-left";
                case 2:
                    return "project__card_top-right";
                case 3:
                    return "project__card_bottom-left";
                case 4:
                default:
                    return "project__card_bottom-right";
            }
        },
    },
};
</script>
  
<style scoped lang="scss">
.project {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 93px;

    &__heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        max-width: 737px;

        &__title {
            font-size: 50px;
            line-height: 125%;
            /* identical to box height, or 62px */
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.02em;

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
            text-align: center;
            letter-spacing: 0.01em;

            color: #4D5053;

            /* Inside auto layout */
            flex: none;
            order: 1;
            flex-grow: 0;
        }
    }

    &__box {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 56px 104px;

    }
}
</style>