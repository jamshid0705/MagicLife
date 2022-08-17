const express=require('express')
const Rout=express.Router()
const paymeController=require('../controller/paymentController')

Rout.route('/').post(paymeController.handler)
module.exports=Rout