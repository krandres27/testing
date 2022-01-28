import axios from 'axios';

const getSecretWord = () => axios.get('https://localhost:3030').then(res => res.data);

export default getSecretWord;
