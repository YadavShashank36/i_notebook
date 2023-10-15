const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs"); // for securing ao creating hash for your password
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");   // generate a token which is saved which prevents us to login in other routes
const fetchuser= require ('../middleware/fetchuser');
const JWT_SECRET = "harryisbad$oy";

//create a user using: Post "/api/auth/"

// router.post('/',
// [query('name','wrong name').isLength({min: 4}),
// query('email','Enter a valid email').isEmail(),
// query('password','wrong pass').isLength({min:5}),
// ]
// , (req, res) => {
//   const result = validationResult(req);
//   if (!result.isEmpty()) {
//     return res.send({ errors: result.array() });
//   }
//   User.create({name: req.body.name,
//               email: req.body.email,
//               password: req.body.password
//   }).then((data)=>  res.json(data))
//     .catch((err)=>   res.json({error: "enter a unique key",message: err.message}))

//   })


//  Route 1
router.post(
  "/createuser",
  // this section after, was for validators
  [
    body("name", "Name should be at least 4 characters").isLength({ min: 4 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password should be at least 5 characters").isLength({
      min: 5,
    }),
  ], // from here is our function async because promise are awaited promise->  User.create()
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "sorry already found" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      
    //   secPass=req.body.password ;
       user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
     });
     
      const data = {
        user: { id: user.id },
      };
      var authtoken = jwt.sign(data,JWT_SECRET);
      res.json({authtoken});
    } catch(error) {
      console.log(error);
      res.status(500).send(error);
    }
    // .then((data) => res.json(data))                                  // was not implementing unable to generate unique data
    // .catch((err) => res.json({ error: "An error occurred", message: err.message }));
  }
);

// Route 2
router.post("/login",[body("email", "Enter a valid email").isEmail(),
body("password", "Password should be at least 5 characters").isLength({
  min: 5})],async(req,res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array()});
    }
      const {email,password } = req.body;
    try {
      let user= await User.findOne({email: email})
           if( !user)
           {
             return res.status(400).json({error: "bad credential"});
           }
           
           
           const passwordcompare= await bcrypt.compare(password,user.password);

     
           if( !passwordcompare )
              {return res.status(400).json({error: "sad credential"});}
           
              const data = {
                user:{ id: user.id }
              };
              var authtoken = jwt.sign(data,JWT_SECRET);
              res.json({authtoken});
    } catch (error) {
      console.log("errorfrom try catch block");
      res.status(500).send("some error");
    }
  })

  // Route 3 get logging details of user :  POST "/api/auth/getuser";
   router.post('/getuser', fetchuser ,async (req,res)=>{
      try {
        userId = req.user.id;
        const user=await User.findById(userId).select("-password");
        res.send(user);  
      } catch (error) {
        console.error(error.message);
      res.status(500).send("some error");
      }
   })
module.exports = router;
