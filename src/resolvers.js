import { getAll, get, insert, update, remove } from './db/query.js';

export const rootValue = {
    
    getAllService: async () => {
        const services = await getAll();
        return services;
    },
    getService: async (data) => {
        const { name } = data;
        const service = await get(name);
        return service;
    },

    insert: async(data) => {
        const service = await insert(data);
        return service;
    },
    update: async(data) => {
        const service = await update(data);
        return service;
    },
    delete: async(data) => {
        const service = await remove(data);
        return 'remove element'
    }
}