
const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const usersRoutes = Router()

function myMidllerware(request, response, next){

    console.log('Parabéns, você está aprendendo back-end')
    console.log(request.body)
    if(!request.body.isAdmin){
    return response.json({message: "user unathorized"})
    }
    next(); 


}

const usersController = new UsersController()

usersRoutes.post('/', myMidllerware, usersController.create)

usersRoutes.put("/:id", usersController.update)

module.exports = usersRoutes
