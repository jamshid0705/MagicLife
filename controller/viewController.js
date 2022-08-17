const Payme=require('../models/paymeModel')
const { catchErrorAsync } = require('../utilities/catchError')

const openKassa=catchErrorAsync(async(req,res)=>{
  res.status(200).render("kassa")
})


const saveData=catchErrorAsync(async(req,res)=>{
  const amount=req.body.amount
  const merchant_id = process.env.PAYME_MERCHANT_ID;
  const data=await Payme.create({
    amount:amount,
    account:1,
  })
  res.status(200).render('payme',{
    data,
    merchant_id,
  })

})

module.exports={openKassa,saveData}