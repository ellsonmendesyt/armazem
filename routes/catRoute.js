const express = require('express')

const router= express.Router();

const {
    obterCategorias,
    criarCategoria,
    obterCategoria,
    atualizarCategoria,
    removerCategoria
}= require('../controllers/catController')

///ROTAS DE CATEGORIA

router 
.get('/obtercategorias',obterCategorias)
.get('/:id',obterCategoria)
.patch('/:id',atualizarCategoria)
.delete('/:id', removerCategoria)


router.post('/criarcategoria', criarCategoria)


module.exports=router;