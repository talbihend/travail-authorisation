const express = require("express");
const { check, validationResult } = require("express-validator");


//validation des input avec express-validator
exports.registerRules = () => [
    check('fullName', 'This field is required').notEmpty(),  //notEmpty=n'est pas vide
    check('email', 'This field is required').notEmpty(), 
    check('email', 'This field should be a valid email').isEmail(), 
    check('password', 'This field should be at least 6 characters').isLength({min:6}) 
];


exports.loginRules = () => [
    check('email', 'This field is required').notEmpty(), 
    check('email', 'This field should be a valid email').isEmail(), 
    check('password', 'This field should be at least 6 characters').isLength({min:6}) 

];

//gbal ma te5dem lfonction registerRules lazem n3adouha 3la lvaldation results
// bch ya3malli tableau fih les erreur lkol li 3malthom wa9t nda5el fi les coordonnees li bch na3mal bihom compte
//ya3ni generation d'un tableau d'erreurs  en cas où 3enna des erreurs
exports.validator = (req, res, next) => {
    const errors = validationResult(req);
    errors.isEmpty()? next() : res.status(406).json({errors:errors.array()}) //si le tableau d'erreur est vide alors fais next() si non raja3li l'erreur 406(not acceptable) 
}