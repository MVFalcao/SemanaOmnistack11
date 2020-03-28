const connec = require('../database/conection');
const crypto = require('crypto');


module.exports = {
    async index(request,response) {
        const ongs = await connec('ongs').select('*');
        return response.json(ongs);
    },
    async create(request,response){
    const {name,email,whatsapp,city,uf} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connec('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    });
    return response.json({ id });
    },
}