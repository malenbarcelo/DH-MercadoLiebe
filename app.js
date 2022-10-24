const express=require('express')
const path = require('path')
const app = express()
const publicPath =  path.resolve('public')
const APP_PORT = process.env.PORT || 3000

app.use(express.static(publicPath)) //le decimos que queremos la carpeta como un recurso de archivos estáticos

app.listen(APP_PORT,() => console.log("Servidor corriendo en puerto " + APP_PORT))

app.get('/',(req,res) =>res.sendFile(path.resolve('./views/home.html')))
app.post('/',(req,res) =>res.sendFile(path.resolve('./views/home.html')))
app.get('/ayuda',(req,res) =>res.sendFile(path.resolve('./views/ayuda.html')))
app.get('/register',(req,res) =>res.sendFile(path.resolve('./views/register.html')))
app.get('/login',(req,res) =>res.sendFile(path.resolve('./views/login.html')))
app.get('/mis_compras',(req,res) =>res.sendFile(path.resolve('./views/mis_compras.html')))
app.get('/ofertas',(req,res) =>res.sendFile(path.resolve('./views/ofertas.html')))
app.get('/tiendas_oficiales',(req,res) =>res.sendFile(path.resolve('./views/tiendas_oficiales.html')))
app.get('/vender',(req,res) =>res.sendFile(path.resolve('./views/vender.html')))
