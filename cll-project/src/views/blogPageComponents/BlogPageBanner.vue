<template>
    <section class="banner">

        <img src="@/assets/img/blog-banner.png" alt="banner__background" class="banner__background">

        <div class="banner__intro">
            <nav class="breadcrumb">
                <h1 class="page-title">Articles & News</h1>
                <ul class="breadcrumb_links">
                    <li class="decorator"><router-link to="/" class="link">Home</router-link></li>
                    <li class="decorator"><router-link to="#" class="link">Blog</router-link></li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.banner {
    overflow: hidden;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;

    margin-top: 45px;
    padding-top: 178px;

    .banner__background {
        width: calc(100% + 65px);
        background-size: cover;
        min-height: calc(100% + 349px);
        top: -349px;
        left: -19px;
        background-repeat: no-repeat;
        position: absolute;

        z-index: -1;
    }

    &__intro {
        width: fit-content;
        padding: 41px 78px;

        background: #FFFFFF;
        border-radius: 37px 37px 0px 0px;

        .breadcrumb {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            .page-title {
                font-weight: 400;
                font-size: 50px;
                line-height: 125%;
                /* identical to box height, or 62px */
                display: flex;
                align-items: center;

                color: #292F36;

                /* Inside auto layout */
                flex: none;
                order: 0;
                flex-grow: 0;

            }

            &_links {
                list-style: none;
                display: flex;
                font-family: 'Jost';
                font-size: 22px;
                line-height: 150%;
                /* identical to box height, or 33px */
                letter-spacing: 0.01em;
                color: #4D5053;

                .decorator {
                    &:not(:last-child)::after {
                        content: " \202f/ \202f";
                    }
                }

                a {

                    &:link,
                    &:visited {
                        color: #4D5053;
                    }
                }
            }
        }
    }
}
</style>