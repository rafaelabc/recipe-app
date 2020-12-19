import axios from 'axios';
const apiTheMealDB = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1',
});
export default apiTheMealDB;
