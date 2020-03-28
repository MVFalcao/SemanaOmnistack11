const connec = require('../database/conection');


module.exports = {
    async index(request,response){

        const ong_id = request.headers.authorization;

        const incidents = await connec('incidents')
        .where('ong_id' , ong_id)
        .select('*');


        return response.json(incidents);
    } 





}