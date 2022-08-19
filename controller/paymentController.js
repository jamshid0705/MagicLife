const { catchErrorAsync } = require("../utilities/catchError");

const CheckPerformTransaction = catchErrorAsync(async(req,res)=>{
  const id=req.body.params.account.id

  if(id!=1){
    res.status(200).json({
      result:{
        allow:-31050,
      }
    })
  }
  
})

const CreateTransaction = catchErrorAsync(async (req, res) => {});

const PerformTransaction = catchErrorAsync(async (req, res) => {});

const CancelTransaction = catchErrorAsync(async (req, res) => {});

const CheckTransaction = catchErrorAsync(async (req, res) => {});

const GetStatement = catchErrorAsync(async (req, res) => {});

const handler=catchErrorAsync(async(req,res,next)=>{
  const method=req.body.method
  switch (method) {
    case "CheckPerformTransaction":
      CheckPerformTransaction(req, res);
      break;
    case "CreateTransaction":
      CreateTransaction(req, res);
      break;
    case "PerformTransaction":
      PerformTransaction(req, res);
      break;
    case "CancelTransaction":
      CancelTransaction(req, res);
      break;
    case "CheckTransaction":
      CheckTransaction(req, res);
      break;
    case "GetStatement":
      GetStatement(req, res);
      break;
    default:
      next();
  }
})

module.exports={handler}