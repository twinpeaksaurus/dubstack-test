import axios from 'axios';
const baseUrl = 'http://localhost: 3003/api/blogs'

let token = null;
let config

const setToken = newToken => {
    token = `bearer ${newToken}`
    config = {
        headers: { Authorization: token },
    }
}

export default { setToken }