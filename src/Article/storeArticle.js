import axios from 'axios';

function storeArticle(article) {
    axios.post('http://localhost:5000/article/add', article)
    .then(res => alert(res.data));
}

export default storeArticle;