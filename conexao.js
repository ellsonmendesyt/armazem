
const mongoose=require('mongoose')

module.exports= async(uri)=>{
    try {
        await mongoose.connect(uri,{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true});
        const conn= mongoose.connection;
        console.log(`conectado a ${conn.name} 🗂️ `)
        return conn;
    }catch(erro){
        console.log('❗❗❗❗');
        console.log(erro)
    }
}



// conectar(process.env.DB)
// .then( (conn)=>{
//     module.exports.conn
// })
// .catch((erro)=>{
//     console.log(erro.message)
// })