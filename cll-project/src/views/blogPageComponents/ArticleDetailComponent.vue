<template>
    <div class="article">
        <div class="article__head">
            <!-- заголовок статьи -->
            <h2>{{ article.title }}</h2>
            <p class="date">{{ formatDate(article.date) }}</p>
        </div>
        <div v-for="line in article.content.split('\\n')" :key="line.id">
            <p class="article__text" v-if="!line.startsWith('IMAGE:')">{{ line }}</p>
            <img v-else :src="line.substr(6).trim()" :alt="article.title" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        article: Object,
    },

    methods: {
        formatDate(date) {
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const monthName = months[month];

            return `${day} ${monthName},${year}`;
        },

    },

};
</script>

<style lang="scss" scoped>
.article {
    border: 1px solid rebeccapurple
}
</style>