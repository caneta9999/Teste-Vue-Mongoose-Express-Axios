//node server.js
import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
mongoose.connect("mongodb://localmongodb:numeroportamongodb", { useNewUrlParser: true });
import CliqueModel from './controller.js'
app.get('/getTotal', function (req, res) {
	let resposta = CliqueModel.getTotal();
	resposta.then(data =>{
		res.send(data)
	});
});
app.get('/getLast', function (req, res) {
	let resposta = CliqueModel.getLast();
	resposta.then(data =>{
		res.send(data)
	});
});
app.route('/cadastrar').post((req,res) =>{
	CliqueModel.cadastrar()
})
