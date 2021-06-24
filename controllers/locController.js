const Location= require('../models/locationModel')


exports.criarLocation= async (req,res)=>{
    const {name,desc}=req.body;

  if(!name || !desc){ return res.status(422).json({erro:"preencha todos os campos"})}

    try {
      const local= await new Location({name,desc}).save();
      res.status(200).json(local);
    } catch (erro) {
        console.log(erro.message)
        res.status(500).json({erro:erro.message});
    }
}



exports.obterLocations=async (req,res)=>{
    try {
        const location = await Location.find().sort({'name':'asc'});
        
        if(!location || location==='undefined')return res.status(404).json({error:'location nao encontrada'})
        return res.status(200).json(location)  

    } catch (error) {
        console.log(error.message)
        res.status(500).json({erro:error.message});
    }
}

exports.obterLocation= async(req,res)=>{
    
    try {
        // const categoria = await Category.findOne({_id:req.params.id})
        const location = await Location.findById(req.params.id)
        if(!location || location===undefined){
            return res.status(404).json({error:'location nao encontrada'})
        }
        return res.status(200).json({data:location})
    } catch (error) {
        console.log(error.message)
    }
}











exports.atualizarLocation=async (req,res)=>{
    try {
        const location = await Location.findById(req.params.id);
        if(!location || location===undefined) return res.status(404).json({error:"Nao conseguimos encontrar esse recurso"})
        await location.set(req.body).save();
         res.status(200).send(location)
    } catch (error) {
        console.log(error.message)
    }
}


exports.removerLocation= async(req,res)=>{
    try {
        const location = await Location.findById(req.params.id);
        if(!location || location===undefined){return res.status(404).json({erro:'recurso nao encontrado'})}
        const removido= await location.remove();
        return res.status(200).json({deletado:removido})
    } catch (error) {
        console.log(error.message);
    }
}