<template>
    <div class="article">
        <div class="article__head">
            <!-- заголовок статьи -->
            <h2><a @click="handleTitleClick">{{ article.title }}</a></h2>
            <p class="date">{{ formatDate(article.date) }}</p>
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

        // пробрасываем клик в html. 
        handleTitleClick() {
            this.$emit('title-click', this.article.title); // Событие будет называться titleClick
        },
    },

};
</script>

<style lang="scss" scoped>
a {
    cursor: pointer;
}
</style>