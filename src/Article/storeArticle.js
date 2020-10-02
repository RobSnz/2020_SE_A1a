import axios from 'axios';

function storeArticle(article) {
    axios.post('/article/add', article)
    .then(res => alert(res.data));
}

export default storeArticle;