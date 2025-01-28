/**
 * stored data as a object
 * @type {{get: (function(*): any), set: (function(*, *): Map<any, any>), remove: (function(*): boolean), clear: (function(): void)}}
 */
const memoryStorage = (() => {
    const store = new Map(); // Interner Speicher mit einer Map

    return {
        get: (key) => store.get(key),
        set: (key, value) => store.set(key, value),
        remove: (key) => store.delete(key),
        clear: () => store.clear(),
    };
})();
export default memoryStorage;