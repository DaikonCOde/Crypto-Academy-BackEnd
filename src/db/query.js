import mongoose from "mongoose";
import { Service } from "./Schema.js";


export const getAll = async () => {
    const services = await Service.find();
    console.log(services)
    return services;
}

export const get = async (name) => {

    const service = await Service.findOne({"name": name});
    return service;
}

export const insert = async (data) => {
    const service = new Service({
        "name": data.name,
        "date": data.date,
        "costMin": data.costMin,
        "benefit": data.benefit,
        "business": data.business,
        "payments": data.payments,
        "thumb": data.thumb,
    });
    service.save();
    return service;
}

export const update = async (data) => {
    const service = await Service.updateOne(
        {"_id": data._id},
        {$set: {
            "name": data.name,
            "date": data.date,
            "costMin": data.costMin,
            "benefit": data.benefit,
            "business": data.business,
            "payments": data.payments,
            "thumb": data.thumb,
            }
        }
    );

    const getService = await get(data.name);

    console.log(data);
    console.log(getService);

    return getService;
}

export const remove = async (data) => {
    const service = await Service.deleteOne({"_id": data._id});
    return service;
}