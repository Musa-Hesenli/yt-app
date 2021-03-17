import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers : {
        Authorization: 'Client-ID -rM12QttomFXLRztl0iwz3bScFxgcSoNw5torAU8eLc'
    }
})