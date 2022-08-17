const express=require('express')
const viewController=require('../controller/viewController')
const Rout=express.Router()

Rout.route('/kassa').get(viewController.openKassa)
Rout.route('/savedatakassa').post(viewController.saveData)

module.exports=Rout