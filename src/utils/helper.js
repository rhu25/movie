import {MOEVIE_CATCHE_KEY} from './enum'

export const fetchData = async (value) => {
    let result = await fetch(
        `http://www.omdbapi.com/?apikey=6367da97&s=${value}`
    );
    return result.json();
}

export const cacheStoreItem = (search, values) => {
    let store = localStorage.getItem(MOEVIE_CATCHE_KEY) 
        ? JSON.parse(localStorage.getItem(MOEVIE_CATCHE_KEY))
        : {};
    store[search] = values;
    localStorage.setItem(MOEVIE_CATCHE_KEY, JSON.stringify(store))
}

export const cacheGetItem = (search) => localStorage.getItem(MOEVIE_CATCHE_KEY)  ? JSON.parse(localStorage.getItem(MOEVIE_CATCHE_KEY))[search] : false
export const sortByProps = (items, prop) => items.sort((first, second) => first[prop] !== second[prop] ? first[prop] < second[prop] ? -1 : 1 :0 )
