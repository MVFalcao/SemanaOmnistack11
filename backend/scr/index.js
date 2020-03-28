const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors);
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */
/**
 * Tipos de parametros
 * 
 * Query Parans:Parametros nomeados enviados na rota após "?"(Filtros,paginação)
 * Route Parans:Parametros utilizados para identificar recusos
 * Resquest Body:Corpo da requisicao,utilizado para cirar ou alterar recursos
 */
/**
 * Driver: Select * from users.
 * Query builder:table('users').select.('*').where()
 */


app.listen(3333);
