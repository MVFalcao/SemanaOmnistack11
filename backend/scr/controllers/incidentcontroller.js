const connec = require('../database/conection');
//const crypto = require('crypto');

module.exports = {
    async index(request,response){
        const {page = 1} = request.query;

        const [count] = await connec('incidents').count();
        
        response.header('X-Total-Count',count['count(*)']);

        const incidents = await connec('incidents')
        .join('ongs','ong_id','=','incidents.ong_id')
        .limit(5)
        .offset((page - 1)*5)
        .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf']);

        return response.json(incidents);
    },
    async create(request,response){
        const{title,description,value} = request.body;
        const ong_id = request.headers.authorization;
        const [id] = await connec('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id });
    },
    async delete(request,response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incidents =await connec('incidents')
        .where('id',id)
        .select('ong_id')
        .first();
        if(incidents.ong_id != ong_id){
            return response.status(401).json({error :'Operation not permitted'});
        }
        await connec('incidents').where('id',id).delete();
        return response.status(204).send();
    }
}