const formatDate = function (date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = months[month];

    return `${day} ${monthName},${year}`;
};

Vue.component('my-article-detail', {
    props: {
        article: Object,
    },

    template: `    
    <div class="article">
        <div class="article__head">
            <!-- заголовок статьи -->
            <h2>{{ article.title }}</h2>
            <p class="date">{{formatDate(article.date )}}</p>
        </div>
        <template v-for="line in article.content.split('\\n')">
            <p class="article__text" v-if="!line.startsWith('IMAGE:')">{{ line }}</p>
            <img v-else :src="line.substr(6).trim()" :alt="article.title" />
        </template>
    </div>`,

    methods: {
        formatDate,
    },
})

Vue.component('my-article', {
    props: {
        article: Object,
    },

    template: `    
    <div class="article">
        <div class="article__head">
            <!-- заголовок статьи -->
            <h2><a @click="handleTitleClick">{{ article.title }}</a></h2>
            <p class="date">{{formatDate(article.date )}}</p>
        </div>
    </div>`,

    methods: {
        formatDate,

        // пробрасываем клик в html. 
        handleTitleClick() {
            this.$emit('title-click', this.article.title); // Событие будет называться titleClick
        },
    },


})