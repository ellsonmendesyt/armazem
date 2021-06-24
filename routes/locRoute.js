const express = require('express')

const router= express.Router();

const {
    obterLocations,
    obterLocation,
    criarLocation,
    atualizarLocation,
    removerLocation
}= require('../controllers/locController')

///ROTAS DE CATEGORIA

router 
.get('/obterLocations',obterLocations)
.get('/:id',obterLocation)
.patch('/:id',atualizarLocation)
.delete('/:id', removerLocation)


router.post('/criarlocation', criarLocation)


module.exports=router;