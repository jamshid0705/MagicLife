// const CheckPerformTransaction = async((req, res) => {});

// const CreateTransaction = async((req, res) => {});

// const PerformTransaction = async((req, res) => {});

// const CancelTransaction = async((req, res) => {});

// const CheckTransaction = async((req, res) => {});

// const GetStatement = async((req, res) => {});

const handler=((req,res,next)=>{
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