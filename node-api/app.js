const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoute = require('./routes/users');

app.use(express.json());
app.post('/user', userRoute.createUser);
app.put('/user/:id', userRoute.updateUser);
app.delete('/user/:id', userRoute.deleteUser);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });

app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`)
})