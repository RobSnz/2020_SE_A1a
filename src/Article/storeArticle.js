import axios from 'axios';

function storeArticle(article) {
    axios.post('/article/add', article)
    .then(res => console.log(res.data))
}

export default storeArticle;