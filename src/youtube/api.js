import axios from 'axios'
const key = 'AIzaSyDRXycZ0QVq2Rj3H272fzEWrmqMGwO_mVc';
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        key,
        maxResults : 5
    }
})