import axios from 'axios';

export const getSecretWord = (setter) => {
  return axios.get('https://localhost:3030').then(res => {
    setter(res.data)
    return res.data
  });
}
