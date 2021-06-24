const Category= require('../models/categoryModel')


exports.criarCategoria= async (req,res)=>{
    const {name,desc}=req.body;

  if(!name || !desc){ return res.status(422).json({erro:"preencha todos os campos"})}

    try {
      const c1= await new Category({name,desc}).save();
      res.status(200).json(c1);
    } catch (erro) {
        console.log(erro.message)
        res.status(500).json({erro:erro.message});
    }
}



exports.obterCategorias=async (req,res)=>{
    try {
        const categorias = await Category.find().sort({'name':'asc'});
        res.status(200).json(categorias)   
    } catch (error) {
        console.log(error.message)
        res.status(500).json({erro:error.message});
    }
}

exports.obterCategoria= async(req,res)=>{
    
    try {
        // const categoria = await Category.findOne({_id:req.params.id})
        const categoria = await Category.findById(req.params.id)
        if(!categoria || categoria==='undefined'){
            return res.status(404).json({error:'categoria nao encontrada'})
        }
        return res.status(200).json({data:categoria})
    } catch (error) {
        console.log(error.message)
    }
}











exports.atualizarCategoria=async (req,res)=>{
    try {
        const categoria = await Category.findById(req.params.id);
        if(!categoria || categoria=='undefined') return res.status(404).json({error:"Nao conseguimos encontrar esse recurso"})
        await categoria.set(req.body).save();
         res.status(200).send('feito')
    } catch (error) {
        console.log(error.message)
    }
}


exports.removerCategoria= async(req,res)=>{
    try {
        const categoria = await Category.findById(req.params.id);
        if(!categoria || categoria===undefined){return res.status(404).json({erro:'recurso nao encontrado'})}
        const removido= await categoria.remove();
        return res.status(200).json({deletado:removido})
    } catch (error) {
        console.log(error.message);
    }
}