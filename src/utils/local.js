const local = {

    set(key, json){

        const value = JSON.stringify(json);
        window.localStorage.setItem(key, value);
    },
    get(key){
        const json = window.localStorage.getItem(key);
        return JSON.parse(json);
    },
    unset(key){
        window.localStorage.removeItem(key);
    },
}

export default local;