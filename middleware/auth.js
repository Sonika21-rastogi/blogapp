const jwt = require('jsonwebtoken');

module.exports = function (req,res, next){
       const authHeader = req.headers.authorization;
       if(authHeader && authHeader.statWith("Bearer")) {
        console.log("variable value before split:" ,authHeader );
        const token = authHeader.split("")[1];
       }
if(!token) {
    return res.status(403).json({message:'Access Denied'});
}
try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
    }catch (error) {
        res.status(401).json({message: "Invalid Token"});
    }
};

