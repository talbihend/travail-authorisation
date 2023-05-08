const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const secret = config.get("secret");


const verifyAuth = async(req, res, next) => {
    let token = req.headers.authorization;

try {
    const decoded = await jwt.verify(token, secret);
    if (!decoded) return res.status(400).json({msg: "invalid token"});
    
    const user = await User.findById(decoded.id).select('-password'); // .select('-password') : heki zedtha bch kif n5araj les coordonnés te3in user bel token ma yothhorlich m3ahom lpassword 7atta wkana crypté mel best practice enna ma yothhorch
    if (!user) return res.status(404).json({msg: "unauthorized"});
    else{
        req.user = user;  //5ater bch na3ml middleware w bch na3ml fct, n7eb nhez men lmiddleware l'utilisateur li cbon lgita nhezza lel fonction li hia bch traja3houli fi res.send 
        next();
    }

} catch (error) {
    res.status(500).json({msg: error.message});
}
};

module.exports = verifyAuth