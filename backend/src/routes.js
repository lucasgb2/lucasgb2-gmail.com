const express = require('express')
const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/IncidentController')
const profileController = require('./controllers/ProfileController')
const sessionController = require('./controllers/SessionController')

const routes = express.Router()
//*POST não quer dizer que estou criando no banco algo, mas sim a intensão
routes.post('/sessions', sessionController.create)

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)

routes.get('/profile', profileController.index)

module.exports = routes

 /**
  * Tipos de parametros
  * 
  * Query Params: parâmetro nomeados enviados na após ?   /user?nome=fulano
  * Route Params: parâmetros utilizados para identificar recursos  /user/3
  * Request body: corpo da requisição 
  */
 //informando o express que estou trablhando com JSON