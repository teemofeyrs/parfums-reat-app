import express from 'express';
import fetch from "node-fetch";
import expressAsyncHandler from "express-async-handler";

const shippingRouter = express.Router();

shippingRouter.get('/cities', expressAsyncHandler(async (req, res) => {
    const response = await fetch('https://api.novaposhta.ua/v2.0/json/Address/getCities', {
        'method': 'POST',
        'headers': {
            'apiKey': 'b76d93a051c5480773432aab190e491c',
            'Content-Type': 'application/json',
            'Cookie': 'PHPSESSID=2c8f8f73ac66bbbcea0416470086d4c9; YIICSRFTOKEN=6896dc72e0fd6f0adc7ef52359f65cb432f780c8s%3A88%3A%22ckhEblZZMlRUWn50VHFFcHpyfnVPWVp2fl9TdHhGNjGW5-4tMjEkaALdo0PUDKA3mYMrU7QtpWwHMpzknmcDWQ%3D%3D%22%3B'
        },
        body: JSON.stringify({"modelName":"Address","calledMethod":"getCities","methodProperties":{},"apiKey":"b76d93a051c5480773432aab190e491c"})
    });
    const {data} = await response.json();
    res.send(data);
}))
shippingRouter.get('/:ref' , expressAsyncHandler(async (req, res) => {
    const branches = await fetch('https://api.novaposhta.ua/v2.0/json/AddressGeneral/getWarehouses', {
        'method': 'POST',
        'headers': {
            'apiKey': 'b76d93a051c5480773432aab190e491c',
            'Content-Type': 'application/json',
            'Cookie': 'PHPSESSID=2c8f8f73ac66bbbcea0416470086d4c9; YIICSRFTOKEN=6896dc72e0fd6f0adc7ef52359f65cb432f780c8s%3A88%3A%22ckhEblZZMlRUWn50VHFFcHpyfnVPWVp2fl9TdHhGNjGW5-4tMjEkaALdo0PUDKA3mYMrU7QtpWwHMpzknmcDWQ%3D%3D%22%3B'
        },
        body: JSON.stringify({"modelName":"AddressGeneral","calledMethod":"getWarehouses","methodProperties":{"CityName": `${req.params.ref}`,"Language":"ru"},"apiKey":"b76d93a051c5480773432aab190e491c"})

    });
    const {data} = await branches.json();
    res.send(data);
}))

export default shippingRouter;