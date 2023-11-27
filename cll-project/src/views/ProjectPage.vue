<template>
    <div class="projectPage">

        <Banner :title="'Our Project'" :imgLink="'@/assets/img/blogBannerBg.png'"></Banner>
        <Banner :title="'Our Project'" :imgLink="'./img/blogBannerBg.png'"></Banner>
        <Banner :title="'Our Project'" :imgLink="'../assets/img/blogBannerBg.png'"></Banner>

        <section class="project center">


            <div class="project__tags">
                <button class="tag-button" :class="{ 'selected': tag === selectedTag }" v-for="tag in uniqueTags" :key="tag"
                    @click="filterByTag(tag)">{{ tag }}</button>
            </div>

            <div class="project__card-box" :class="{ 'scrollbar': isOverflow }">
                <div class="card" v-for="article in filteredArray" :key="article.id">
                    <img :src="article.img" :style="{ minHeight: article.imgHeight + 'px' }" />
                    <h3>{{ article.title }}</h3>
                </div>
            </div>


        </section>
    </div>
</template>
  
<script>
import Banner from '@/components/PageBannerComponent.vue';
import articles from '@/assets/prjects.js';

export default {
    components: {
        Banner
    },

    data() {
        return {
            articles: articles,
            selectedTag: '',
            filteredArray: [],
            isOverflow: false,
        }
    },

    async created() {
        await this.filterByTag(this.selectedTag);
    },

    // mounted: function () {
    //     this.filteredArray = this.filterByTag(this.selectedTag);
    //     // console.log('this.filteredArticles :>> ', this.filteredArticles);
    // },

    methods: {
        filterByTag(tag) {
            if (tag === this.selectedTag) {
                this.selectedTag = ''; // Снимаем выбор тега, если он уже выбран
            } else {
                this.selectedTag = tag; // Выбираем тег
            }
            // Фильтрация статей на основе выбранного тега
            if (this.selectedTag === '') {
                this.filteredArray = this.articles;
            } else {
                this.filteredArray = this.articles.filter((article) => article.tag === this.selectedTag)
            }
            // console.log('this.filteredArticles :>> ', this.filteredArray);
        },

        checkOverflow() {
            const box = document.querySelector('.project__card-box');
            this.isOverflow = box.scrollHeight > box.clientHeight;
        },

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
                    return this.articles;
                } else {
                    return this.articles.filter((article) => article.tag === this.selectedTag);
                }
            },
            set() {
                // Этот метод нужен только чтобы исправить ошибку, но он может оставаться пустым
            }
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

.project {

    &__card-box {
        margin: 1.5em 0;
        display: flex;
        flex-wrap: wrap;
        max-height: 1200px;
        overflow-y: auto;


        .card {
            border: 2px dashed palevioletred;
            width: 585px;
            display: inline-block;


            img {}
        }
    }

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
</style>