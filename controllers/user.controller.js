const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");

exports.register = async (req, res) => {
  const { fullName, email, password } = req.body;

  const existantUser = await User.findOne({ email }); //condition bch ki nda5lou utilisateur ma yda5ellich zouz bnafs lmail
  if (existantUser) res.status(409).json({ msg: "User already exists" }); // bch ki nda5al mail deja mawjoud, serveur yraja3li l'erreur 409 signifie : Conflict
  try {
    const newUser = new User({
      fullName,
      email,
      password,
    });

    // 9al ma nab3ath les input lel serveur , lazem necrypty lpassword

    // To hash a password : pour crypter le password
    let salt = await bcryptjs.genSalt(10); // l'algorithme mte3 lcryptage ki na3tih a9al me1n 10 yji lcryptage th3if w ki na3tih akthar men 10 lazem machine a9wa w aksa7 bch tecryptili lpassword, donc lazem na3tih l'ideale w lmoyenne parametre howa 10.
    let hash = await bcryptjs.hash(password, salt);

    newUser.password = hash; // lpassword ya5eth lpassword crypté
    await newUser.save();
    const payload = {
      id: newUser._id,
    };

    let token = jwt.sign(payload, secret);///l8alta talla3heli ms lehne , jeni err 5ater lpauload ma 3titou chay 
    res.send({
      token,
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
    });
    // res.status(200).json(newUser); //star hatha fi blaset ma na3mmal hethi  res.send(newUser);  na3mal condition 3la status bel code status , itha l user t3ada w teb3ath lel serveur , raja3li ok (lcode status 200 = ok )
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "wrong coordinate" });

    const isMatch = await bcryptjs.compare(password, user.password); //ycompari lmdp lmawjoud fi l DB bel mdp lwjoud fil request body
    if (!isMatch) return res.status(404).json({ msg: "wrong coordinate" });

    const payload = {
      id: user._id,
    };

    let token = jwt.sign(payload, secret);

    res.send({
      token,
      user: { id: user._id, fullName: user.fullName, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.auth = (req, res) => {
  res.send(req.user);
};
