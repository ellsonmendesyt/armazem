const express = require('express')

const router= express.Router();

const {
    obterAssets,
    criarAsset,
    removerAsset

}= require('../controllers/assController')

///ROTAS DE CATEGORIA

// router 
// .get('/obterLocations',obterLocations)
// .get('/:id',obterLocation)
// .patch('/:id',atualizarLocation)
// .delete('/:id', removerLocation)

router.get('/obterassets', obterAssets)
router.post('/criarasset', criarAsset)
router.delete('/:id',removerAsset)


module.exports=router;