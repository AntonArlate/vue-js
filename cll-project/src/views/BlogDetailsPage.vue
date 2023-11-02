<template>
    <div class="BlogPage">
        <!-- BANNER -->
        <section class="banner">
            <img class="banner__background" src="@/assets/img/blog-details-banner.png" alt="banner__background">
        </section>

        <!-- BLOG DETAILS -->
        <section class="blog center" id="app">
            <div class="blog__details">
                <!-- передаём сюда выбранную статью -->
                <ArticleDetailComponent :article="articles[indexCurrentArticle]" :key="articles[indexCurrentArticle].id">
                </ArticleDetailComponent>

                <!-- а сюда все остальные -->
                <!-- в моём варианте при первом рендере страницы тут пустой массив. Как это исправить я не придумал -->
                <ArticleComponent v-for="article in filteredArticles" :article="article" :key="article.title"
                    @title-click="handleTitleClick">
                </ArticleComponent>

            </div>

            <div class="blog__sidebar">
                <h2 class="blog__sidebar__title">Tags</h2>
                <div class="blog__sidebar__tags">
                    <button class="tag-button" :class="{ 'selected': tag === selectedTag }" v-for="tag in uniqueTags"
                        :key="tag" @click="filterByTag(tag)">{{ tag }}</button>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>

import ArticleComponent from './blogPageComponents/ArticleComponent.vue';
import ArticleDetailComponent from './blogPageComponents/ArticleDetailComponent.vue';
import articles from '@/assets/articles.js';

export default {

    components: {
        ArticleDetailComponent,
        ArticleComponent
    },


    data() {
        return {
            articles: articles,
            indexCurrentArticle: 7, // выброанная статья которая будет показываться подробнее
            selectedTag: '',
            filteredArray: [],
        }
    },


    created() {
        const id = this.$route.params.id;
        // здесь может быть логика поиска статьи
        this.indexCurrentArticle = Number(id);
    },


    mounted: function () {
        this.filteredArticles = this.filterByTag(this.selectedTag);


    },


    computed: {
        // перебирает все теги доступных статей и создаёт массив уникальных
        uniqueTags: function () {
            const tags = [];
            this.articles.forEach(function (article) {
                if (!tags.includes(article.tag)) {
                    tags.push(article.tag);
                }
            });
            return tags;
        },

        filteredArticles: {
            get() {
                if (this.selectedTag === '') {
                    return this.articles.filter((article, index) => index !== this.indexCurrentArticle);
                } else {
                    return this.articles.filter((article, index) => article.tag === this.selectedTag && index !== this.indexCurrentArticle);
                }
            },
            set() {
                // Этот метод нужен только чтобы исправить ошибку, но он может оставаться пустым
            }
        },
    },


    methods: {
        filterByTag(tag) {
            if (tag === this.selectedTag) {
                this.selectedTag = ''; // Снимаем выбор тега, если он уже выбран
            } else {
                this.selectedTag = tag; // Выбираем тег
            }
            // Фильтрация статей на основе выбранного тега
            if (this.selectedTag === '') {
                this.filteredArticles = this.articles.filter((article, index) => index !== this.indexCurrentArticle);
            } else {
                this.filteredArticles = this.articles.filter((article, index) => article.tag === this.selectedTag && index !== this.indexCurrentArticle)
            }
        },

        // выбраная статья устанавливается нормально, но как обновить мой фильтр по тегам я не придумал. 
        handleTitleClick(title) {
            const index = this.articles.findIndex(article => article.title === title);
            this.indexCurrentArticle = index;
            // this.filterByTag(this.selectedTag);
            console.log('Индекс объекта:', this.indexCurrentArticle);
        },
    },
}

</script>
  
<style scoped lang="scss">
.banner {

    .banner__background {
        height: 351px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

}

.blog {
    display: flex;
    gap: 52px;

    &__details {}

    &__sidebar {
        min-width: 345px;
        display: flex;
        flex-direction: column;
        gap: 24px;

        &__tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            .tag-button {
                border: none;
                border-radius: 10px;

                padding: 9px 30px;

                background-color: #F4F0EC;
            }

            .selected {
                background-color: black;
                color: #FFFFFF;
            }
        }
    }
}
</style>