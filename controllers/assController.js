const Category = require('../models/categoryModel')
const Location = require('../models/locationModel')
const Asset    = require('../models/assetModel')

exports.criarAsset=async(req,res)=>{
    const {name,desc,category,location}=req.body;
    //validar os dados vindos
    if(!name || !desc  || desc===undefined || !category ||!location ){
        return res.status(500).json({error:'Preencha todos os campos'})
    }

    
    try {
        const categoria =Category.findById(req.body.category)

        if(categoria===undefined){
            return res.status(404).json({error:'categoria nao encontrada'})
        }

        const location =Location.findById(req.body.location)
        if(location===undefined){
            return res.status(404).json({error:'categoria nao encontrada'})
        }
        const asset = await new Asset(req.body).save();
        return res.status(200).json({data:asset})   
    } catch (error) {
        console.log(error.message)
    }
}


exports.obterAssets=async(req,res)=>{
    try {
        const asset = await Asset.find();
        if(asset===undefined) return res.status(404).json({error:"asset nao encontrado"})
        return res.status(200).json({data:asset})
    } catch (error) {
        console.log(error.message)
    }

    return res.status(200).json({data:'asset encontrado'})
}


exports.removerAsset= async(req,res)=>{
    const {id}=req.params;
    if(!id) return res.status(500).json({error:'informe o id'})

    try {
        const asset = await Asset.findById(id);
        if(asset===undefined) return res.status(404).json({error:'recurso nao encontrado'})
        const deleted = await asset.remove();
        return res.status(404).json({deleted:deleted})
    } catch (error) {
        console.log(error.message)
    }

}