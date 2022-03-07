const User = require('../models/users');

exports.createUser = async(req, res) => {    
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        registryNumber: req.body.registryNumber
      });
      newUser
      .save()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(error => {
        res.status(500).json(error);
      });
}

exports.updateUser = async(req, res) => {
    const newData = { name: req.body.name, email: req.body.email, registryNumber: req.body.registryNumber };

  User.findOneAndUpdate({ _id: req.params.id }, newData, { new: true })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => res.status(500).json(error));
}

exports.deleteUser = async(req, res) => {
    User.findOneAndDelete({ _id: req.params.id })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => res.status(500).json(error));
}