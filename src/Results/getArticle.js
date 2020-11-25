import axios from 'axios';

function getArticle() {
    axios.get('http://localhost:5000/article/')
    .then(res => alert(res.data));
}

export default getArticle;