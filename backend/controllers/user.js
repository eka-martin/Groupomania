const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { error } = require('console');
require('dotenv').config();

// const tokenSecret = {
//     jwtSecret: process.env.SECRET_TOKEN,
//   };
//const { secret } = require("../config")


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                fullName: req.body.fullName,
                email: req.body.email,
                avatarUrl: req.body.avatarUrl,
                //isAdmin: "false",
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ user }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user === null) {
                res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte' })
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid) {
                            res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte' })
                        } else {
                            res.status(200).json({
                                userId: user._id,
                                //isAdmin: user.isAdmin,
                                token: jwt.sign(
                                    //userId c'est pour que les autres utilisateurs pouvez pas modifier mon post
                                    { userId: user._id,
                                        //isAdmin: user.isAdmin,
                                     },
                                    process.env.SECRET_TOKEN,
                                    { expiresIn: '24h' }
                                )
                            });
                        }
                    })
                    .catch(error => res.status(501).json({ error }))
            }
        })
        .catch(error => res.status(500).json({ error }))

};

exports.me = (req, res) => {
    User.findOne({
        _id: req.auth.userId
      }).then(
        (user) => {
          res.status(200).json(user);
        }
      ).catch(
        (error) => {
          res.status(404).json({
            message: 'Pas d utilisateur'
          });
        }
      );
    
    
    // try {
    //     const user = User.findById(req.auth.userId)
    //     console.log(req.auth.userId)
    //     if (!user) {
    //         console.log('test')
    //         res.status(404).json({ message: 'Pas de user' })
    //     }
    //     console.log('test2')
    //     //res.status(201).json( user )
    //     res.status(200).json({ userId: user._id })

    // } catch (err) { res.status(404).json({ message: 'Pas d acces' }) }
}