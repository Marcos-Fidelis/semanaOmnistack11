const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso 
 */

 /**
  * Metodos HTTP
  *     Get: buscar/listar uma informação no backend
  *     Post: criar uma informação no backend
  *     Pur: alterar uma informação no backend
  *     Delete: apagar uma informação no backend
  */


  /**
   * tipos de parametros
   *    
   * Query params: parâmetros nomeados enviados na rota após "?" 
   *            (geralmente server pra filtros paginação)
   * Route params: paramtros utilizados para identificar recursos 
   * Request Body: corpo da requisição usado pra criar ou alterar recursos
   */


   /**
    * SQL: MySQL, SQLite, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB etc
    */

    /**
     * Driver: SELECT * FROM USERS
     * Query Builder: table('users').select('*').where()
     */



app.listen(3333);