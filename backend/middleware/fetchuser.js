const jwt = require("jsonwebtoken");
const JWT_SECRET = "harryisbad$oy";
const fetchuser = (req,res,next)=>{
    token =req.header('auth-token');
    if(!token)
        res.status(401).send({error: "Please authenticate using coreect detail"})
    try{
    const data = jwt.verify(token,JWT_SECRET);
      req.user = data.user;
    next(); }
    catch(error) {
        res.send(401);
    }
}
module.exports= fetchuser;