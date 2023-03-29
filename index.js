'use strict'

const newspaper = {
    title: 'My super news',
    articles: [{
        author: 'Van Doe',
        header: 'Article1',
        body: 'lorem ipsum'
    }, {
        author: 'John Doe',
        header: 'Article2',
        body: 'dolor sit amet'
    }, {
        author: 'Jane Doe',
        header: 'Article3',
        body: 'lorem ipsum'
    }, {
        author: 'Alex Doe',
        header: 'Article4',
        body: 'dolor sit amet'
    }, {
        author: 'Carl Doe',
        header: 'Article5',
        body: 'lorem ipsum'
    },{
        author: 'Miky Doe',
        header: 'Article6',
        body: 'dolor sit amet'
    },{
        author: 'Ricky Doe',
        header: 'Article7',
        body: 'lorem ipsum'
    }],
    showArticles() {
        this.articles.forEach(logItems.bind(this)) 
    }
}


function logItems (currentArticle, index) {
    console.log(this);
    console.log(`${this.title} --- ${index}: ${currentArticle.author} - ${currentArticle.header}`);
}