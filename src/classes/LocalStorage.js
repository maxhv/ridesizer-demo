export default class LocalStorage {

    get(key) {
        return localStorage.getItem(key)
    }

    set(key, value) {
        return localStorage.setItem(key, value)
    }

    save(key, value = '') {

        const currentValue = localStorage.getItem(key);

        if (!currentValue) {
            localStorage.setItem(key, value);
        }

        if (currentValue) {
            if (value) {
                localStorage.setItem(key, value);
            }
        }

        return localStorage.getItem(key)
    }

}