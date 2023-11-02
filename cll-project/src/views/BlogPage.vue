<template>
    <div class="BlogPage">

        <Banner></Banner>

        <section class="blog center" id="app">

            <div class="blog__latest-post">
                <h2 class="block-title">Latest Post</h2>
                <div class="blog__latest-post__box">
                    <!-- проверяем что есть что отображать -->
                    <div v-if="articles.length > 0" class="blog__latest-post__box__content">
                        <div class="blog__latest-post__box__content__image-box">
                            <img :src="require(`@/assets/img/` + articles[0].imgLink)" :alt="articles[0].imgLink"
                                class="blog__latest-post__box__content__image-box__img">

                        </div>
                        <div class="blog__latest-post__box__content__subcontent">
                            <div class="text-box">
                                <h2 class="blog__latest-post__box__content__subcontent__title">{{ articles[0].title }}</h2>
                                <p class="text-box__brief" v-for="paragraph in getParagraphs(articles[0].content)"
                                    :key="paragraph.id">{{
                                        paragraph }}</p>
                            </div>
                            <div class="blog__latest-post__box__content__subcontent__footer">
                                <p class="date">{{ formatDate(articles[0].date) }}</p>
                                <button class="button-full-article" @click="goToDetails(0)">
                                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="blog__news">
                <h2 class="block-title">Articles & News</h2>

                <template>
                    <div v-for="row in rowCount" :key="row" class="blog__news__card-line">

                        <div v-for="cardIndex in cardCount" :key="cardIndex" class="blog__news__card-line__card news-card">

                            <div class="news-card__content">
                                <div class="news-card__content__image-box">
                                    <img :src="require(`@/assets/img/` + articles[cardCount2(row, cardIndex)].imgLink)"
                                        :alt="articles[cardCount2(row, cardIndex)].title"
                                        class="news-card__content__image-box__img" />
                                    <div class="news-card__content__image-box__tag">{{ articles[cardCount2(row,
                                        cardIndex)].tag }}</div>
                                </div>
                                <div class="news-card__content__subcontent">
                                    <div class="text-box">
                                        <h2 class="news-card__content__subcontent__title">{{ articles[cardCount2(row,
                                            cardIndex)].title }}</h2>
                                    </div>
                                    <div class="news-card__content__subcontent__footer">
                                        <p class="date">{{ formatDate(articles[cardCount2(row, cardIndex)].date) }}
                                        </p>
                                        <button class=" button-full-article"
                                            @click="goToDetails(cardCount2(row, cardIndex))">
                                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </template>



            </div>


        </section>
    </div>
</template>
  
<script>
import Banner from './blogPageComponents/BlogPageBanner.vue';
import articles from '@/assets/articles.js';

export default {
    components: {
        Banner
    },


    data() {
        return {

            test: '025',
            rowCount: 2,        // количество строк
            cardsPerRow: 3,     // количество карточек в строке
            startIndex: 1,

            articles: articles,
        }
    },

    methods: {
        goToDetails(index) {
            this.$router.push({
                name: 'details',
                params: {
                    id: index.toString() // Преобразование индекса в строку и передача его в качестве параметра
                }
            });
        },

        getParagraphs: function (content) {
            return content.split('\n\n'); // Разделение текста на параграфы по двойному переносу строки
        },

        clo(text) {
            console.log(text);
        },

        // нужна библиотека которую внутри html не подключить. Пока это лучшее что я смог получить форматируя дату вручную
        formatDate(date) {
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const monthName = months[month];

            return `${day} ${monthName},${year}`;
        },

        // вычисляем индекс карточки
        cardCount2(row, indexInRow) {
            let result = (row - 1) * this.cardsPerRow; // вычисляем сколько уже строк было обработано
            result = result + indexInRow; // добавляем текущий индекс карточки и пропуск
            return Number(result);
        },

    },

    computed: {
        cardCount() {
            return Math.ceil(this.articles.length / this.cardsPerRow);
        },
    },



}

</script>
  
<style scoped lang="scss">
.button-full-article {
    border: none;
    border-radius: 50%;
    width: 52px;
    height: 52px;
    background-color: #F4F0EC;
    cursor: pointer;
}

.blog {
    margin-top: 200px;

    .block-title {
        font-weight: 400;
        font-size: 50px;
        line-height: 125%;
        /* identical to box height, or 62px */
        letter-spacing: 0.02em;

        color: #292F36;
    }

    &__latest-post {
        display: flex;
        flex-direction: column;
        gap: 27px;

        &__box {
            padding: 22px;
            border: 1px solid #E7E7E7;
            filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));
            border-radius: 62px;

            &__content {
                display: flex;
                padding-right: 34px;
                align-items: center;

                gap: 65px;

                &__image-box {
                    position: relative;
                    border-radius: 50px;
                    overflow: hidden;
                    width: 100%;
                    height: 478px;

                    &__img {
                        position: absolute;
                        width: 765px;
                        height: 510px;
                    }
                }

                &__subcontent {
                    height: fit-content;
                    display: flex;
                    flex-direction: column;

                    &__title {
                        font-weight: 400;
                        font-size: 25px;
                        line-height: 125%;
                        /* or 31px */
                        letter-spacing: 0.02em;
                        margin-bottom: 22px;
                        margin-right: 20px;

                        color: #292F36;
                    }

                    .text-box {
                        display: flex;
                        flex-direction: column;
                        gap: 1em;
                        margin-right: 20px;

                        &__brief {
                            font-family: 'Jost';
                            font-size: 22px;
                            line-height: 150%;
                            /* or 33px */
                            letter-spacing: 0.01em;

                            color: #4D5053;
                        }
                    }

                    &__footer {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 41px;

                        .date {
                            font-family: 'Jost';
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 150%;
                            /* or 24px */
                            letter-spacing: 0.01em;
                            text-transform: capitalize;

                            color: #4D5053;
                        }
                    }

                }

            }
        }
    }

    &__news {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 150px;

        &__card-line {
            display: flex;
        }

        .news-card {
            border: 1px solid #E7E7E7;
            filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));
            border-radius: 62px;
            width: fit-content;
            height: fit-content;

            &:hover {
                background-color: #F4F0EC;

                .button-full-article {
                    background-color: #FFFFFF;
                }
            }

            &__content {
                margin: 21px;
                width: 340px;
                height: 479px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 11px;

                &__image-box {
                    position: relative;
                    border-radius: 45px 45px 0 0;
                    overflow: hidden;
                    width: 100%;
                    height: 289.27px;

                    &__img {
                        position: absolute;
                        z-index: -1;
                    }

                    &__tag {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 8px 10px;

                        margin-top: 228px;
                        margin-left: 20px;

                        background: #FFFFFF;
                        border-radius: 8px 8px 8px 0px;


                        /* Kitchan Design */

                        width: 104px;
                        height: 24px;

                        font-family: 'Jost';
                        font-style: normal;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 150%;
                        /* identical to box height, or 24px */
                        display: flex;
                        align-items: center;
                        letter-spacing: 0.01em;
                        text-transform: capitalize;

                        color: #4D5053;


                        /* Inside auto layout */
                        flex: none;
                        order: 0;
                        flex-grow: 0;

                    }
                }

                &__subcontent {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    flex-grow: 1;

                    &__title {

                        width: 305px;

                        font-weight: 400;
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

                    .text-box {
                        display: flex;
                        flex-direction: column;
                        gap: 1em;
                        margin-right: 20px;

                        &__brief {
                            font-family: 'Jost';
                            font-size: 22px;
                            line-height: 150%;
                            /* or 33px */
                            letter-spacing: 0.01em;

                            color: #4D5053;
                        }
                    }

                    &__footer {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .date {
                            font-family: 'Jost';
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 150%;
                            /* or 24px */
                            letter-spacing: 0.01em;
                            text-transform: capitalize;

                            color: #4D5053;
                        }
                    }
                }
            }
        }



    }

}
</style>