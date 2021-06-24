const express = require('express')
require('dotenv').config()
const app = express();
app.use(express.json())
const conectar = require('./conexao')
conectar(process.env.DB);


const catRoute= require('./routes/catRoute')
const locRoute= require('./routes/locRoute')
const assRoute= require('./routes/assRoute')


app.use((req,res,next)=>{console.log('middlewawre');next();})


// MIDDLEWARES
app.use('/api/categoria',catRoute)
app.use('/api/location', locRoute)
app.use('/api/assets', assRoute);






// ROTAS
app.get('/',(req,res)=>{
    res.send('ok')
})















app.listen(process.env.PORT,()=>{
    console.log(`✨✨ servidor     ✨✨`);
})



